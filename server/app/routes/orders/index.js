'use strict';
var router = require('express').Router();
var db = require('../../../db');
var Order = db.model('order');
var OrderDetails = db.model('order_detail');
var Product = db.model('product');
var User = db.model('user');
module.exports = router;

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
					userId: req.session.cart.id,
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
				res.send('Completed checkout: ', savedOrder)
			})
		})
	} else {
		var createdUser;
		User.create({
			username: checkoutForm.email,
			email: checkoutForm.email,
			password: checkoutForm.email
		})
		.then(function (user) {
			createdUser = user;
			Order.findOrCreate({
				where: {
					id: req.session.cart.id,
					status: 'pending'
				}
			})
			.spread(function (order, ifCreated) {
				order.status = 'complete';
				order.billing_address = checkoutForm.billingAddress;
				order.shipping_address = checkoutForm.shippingAddress;
				order.shipping_status = 'pending';
				order.userId = createdUser.id;
				order.save()
				.then(function (savedOrder) {
					req.session.cart = null;
					res.send('Completed checkout: ', savedOrder);

				})
			})
		})
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
    if (!req.user || !req.user.isAdmin){
        res.status(403).send('Access denied.')
    } else {
		OrderDetails.findAll({
			where: {
				orderId: req.params.id
			}
		})
		.then(function (details) {
			res.send(details);
		})
		.catch(next);
	}
})