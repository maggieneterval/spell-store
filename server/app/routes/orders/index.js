'use strict';
var router = require('express').Router();
var db = require('../../../db');
var Order = db.model('order');
var OrderDetails = db.model('order_detail');
var Product = db.model('product');
var User = db.model('user');
var nodemailer = require('nodemailer');
module.exports = router;


 // create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://spellstorellc%40gmail.com:magicalme@smtp.gmail.com');

router.get('/viewcart', function (req, res, next) {
	if (req.user){
		Order.scope('populated').findOrCreate({
			where: {
				userId: req.user.id,
				status:'pending'
			}
		})
		.spread(function (order, created){
			res.send(order);
		})
	} else {
		if (!req.session.cart){
			Order.create({
				status: 'pending'
			})
			.then(function (order) {
				req.session.cart = order;
				res.send(order);
			})
		} else {
			Order.scope('populated').findOrCreate({
				where: {
					id: req.session.cart.id,
					status: 'pending'
				}
			})
			.spread(function (order, wasCreated) {
				res.send(order);
			})
		}
	}
})


router.put('/checkout', function (req, res, next) {

	var checkoutForm = req.body;
	//setup e-mail data with unicode symbols
	var mailOptions = {
	    from: 'Spell Store 👥" <spellstorellc%40gmail.com>', // sender address
	    // to: 'samanthalowe2010@gmail.com', // list of receivers
	    subject: 'Your Spell Incantations', // Subject line
	    text: 'Thank you for your spell order, ' + checkoutForm.fullName + '!', // plaintext body
	    html: '<h3>Thank you for your spell order, ' + checkoutForm.fullName + '!</h3>' // html body
	};

	// send mail with defined transport object

	console.log('Checkout form!!!!', checkoutForm)
	if (req.user){
		Order.findOne({
			where: {
				userId: req.user.id,
				status: 'pending'
			}
		})
		.then(function (order) {
			order.status = 'complete';
			order.billing_address = checkoutForm.billingAddress;
			order.shipping_address = checkoutForm.shippingAddress;
			order.shipping_status = 'pending';
			order.save()
			.then(function (savedOrder) {
				return Order.scope('populated').findById(savedOrder.id);
			})
			.then(function (ourOrder) {
				ourOrder.products.forEach(function (product, i) {
					// console.log(`Product number ${i+1} is`, product.title, 'The incantation is: ', product.deliverable);
					mailOptions.text += "\n Spell purchased: " + product.title + ". Incantation: " + product.deliverable + ".";
					mailOptions.html += "<p>Spell purchased: " + product.title + ". Incantation: <b>" + product.deliverable + "</b>.</p>";
				})

				mailOptions.to = checkoutForm.email;
				// mailOptions
				transporter.sendMail(mailOptions, function(error, info){
				    if(error){
				        return console.log(error);
				    }
				    console.log('Message sent: ' + info.response);
				});
				res.send(ourOrder)
			})
		})
		.catch(next);
	} else {
		var createdUser;
		User.findOrCreate({where: {
			username: checkoutForm.email,
			email: checkoutForm.email,
			password: null
		}})
		.then(function (user) {
			createdUser = user;
			return Order.findOrCreate({
				where: {
					id: req.session.cart.id,
					status: 'pending'
				}
			})
		})
		.spread(function (order, ifCreated) {
			order.status = 'complete';
			order.billing_address = checkoutForm.billingAddress;
			order.shipping_address = checkoutForm.shippingAddress;
			order.shipping_status = 'pending';
			order.userId = createdUser.id;
			return order.save();
		})
		.then(function (savedOrder) {
			return Order.scope('populated').findById(savedOrder.id);
		})
		.then(function (ourOrder) {
			ourOrder.products.forEach(function (product, i) {
				// console.log(`Product number ${i+1} is`, product.title, 'The incantation is: ', product.deliverable);
				mailOptions.text += "\n Spell purchased: " + product.title + ". Incantation: " + product.deliverable + ".";
				mailOptions.html += "<p>Spell purchased: " + product.title + ". Incantation: <b>" + product.deliverable + "</b>.</p>";
			})
			req.session.cart = null;
			mailOptions.to = checkoutForm.email;
			transporter.sendMail(mailOptions, function(error, info){
			    if(error){
			        return console.log(error);
			    }
			    console.log('Message sent: ' + info.response);
			});
			res.send(ourOrder);

		})
		.catch(next);
	}

})

router.put('/cart', function (req, res, next) {

	var productId = req.body.id;
	var productQty = Number(req.body.qty);
	var productPrice;

	Product.findById(productId)
	.then(function (product) {
		productPrice = product.price;
	});

	function updateOrder (order) {
		OrderDetails.findOrCreate({
			where: {
				orderId: order.id,
				productId: productId
			}
		})
		.spread(function (orderDetail, created) {
			if (created){
				orderDetail.quantity = productQty;
			} else {
				orderDetail.quantity = orderDetail.quantity + productQty;
			}
			orderDetail.price = productPrice * orderDetail.quantity;
			orderDetail.save()
			.then(function (savedDetail) {
				res.send(savedDetail);
			})
		})
	}

	if (req.user){
		Order.findOrCreate({
			where: {
				userId: req.user.id,
				status: 'pending'
			}
		})
		.spread(function (order) {
			return updateOrder(order);
		})
	} else {
		if (!req.session.cart){
			Order.create({
				status: 'pending'
			})
			.then(function (order) {
				req.session.cart = order;
				return updateOrder(order);
			})
		} else {
			Order.findOrCreate({
				where: {
					id: req.session.cart.id,
					status: 'pending'
				}
			})
			.spread(function (order, wasCreated) {
				return updateOrder(order);
			})
		}
	}
})

router.get('/', function(req,res,next){
    if (!req.user){
        res.status(403).send('Access denied.')
    } else {
		Order.findAll({where: req.query})
		.then(orders => res.json(orders))
		.catch(next);
	}
});

router.param('id', function (req, res, next, id) {
	Order.findById(id)
	.then(function (order) {
		if (order) {
			req.order = order;
			next();
			return null;
		} else {
			throw HttpError(404);
		}
	})
	.catch(next);
});

router.post('/', function(req, res, next){
    if (!req.user){
        res.status(403).send('Access denied.')
    } else {
		Order.create(req.body)
		.then(createdOrder => res.json(createdOrder))
		.catch(next);
	}
});

router.get('/:id', function(req, res, next){
	if(req.user.id === req.order.userId || req.user.isAdmin){
		res.json(req.order);
	}else{
		res.status(403).send('Access denied.')
	}
})

router.put('/:id', function(req, res, next){
    if (req.user.id === req.order.userId || req.user.isAdmin){
        req.order.update(req.body)
	.then(updatedOrder => res.json(updatedOrder))
	.catch(next);
    } else {
	res.status(403).send('Access denied.')
    }
})

router.delete('/:id', function(req, res, next){
    if (req.user.id === req.order.userId || req.user.isAdmin){
                req.order.destroy()
	        .then(destroyedOrder => res.status(204).send('Order deleted.'))
		.catch(next);
    } else {
		res.status(403).send('Access denied.')
	}
})

router.get('/products/:id', function (req, res, next) {
		OrderDetails.findAll({
			where: {
				orderId: req.params.id
			}
		})
		.then(function (details) {
			res.send(details);
		})
		.catch(next);
})
