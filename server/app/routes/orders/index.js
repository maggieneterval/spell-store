'use strict';
var router = require('express').Router();
var db = require('../../../db');
var Order = db.model('order');
var OrderDetails = db.model('order_detail');
var Product = db.model('product');
var User = db.model('user');
module.exports = router;

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
			order.billing_address = checkoutForm.billing_address;
			order.shipping_address = checkoutForm.shipping_address;
			order.shipping_status = 'pending';
			order.save()
			.then(function (savedOrder) {
				console.log('Completed checkout: ', savedOrder)
			})
		})
	} else {
		var createdUser;
		User.create({
			username: checkoutForm.username,
			password: checkoutForm.password
		})
		.then(function (user) {
			createdUser = user;
			Order.findOne({
				where: {
					id: req.session.cart.id,
					status: 'pending'
				}
			})
		})
		.then(function (order) {
			order.status = 'complete';
			order.billing_address = checkoutForm.billing_address;
			order.shipping_address = checkoutForm.shipping_address;
			order.shipping_status = 'pending';
			order.userId = createdUser.id;
			order.save()
			.then(function (savedOrder) {
				console.log('Completed checkout: ', savedOrder);

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
	Order.findAll({where: req.query})
	.then(orders => res.json(orders))
	.catch(next);
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
	Order.create(req.body)
	.then(createdOrder => res.json(createdOrder))
	.catch(next);
});

router.get('/:id', function(req, res, next){
	res.json(req.order);
})

router.put('/:id', function(req, res, next){
	req.order.update(req.body)
	.then(updatedOrder => res.json(updatedOrder))
	.catch(next);
})

router.delete('/:id', function(req, res, next){
	req.order.destroy()
	.then(destroyedOrder => res.status(204).send('Order deleted.'))
	.catch(next);
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

/*
This is how Laura advised me to set it up. It attaches the order detail to an order. Try uncommenting this and commenting the get request directly below this comment block to see the difference. I don't think I understand how to work with associations of populated scope well enough to know which approach is better.
*/

/*
router.get('/', function(req, res, next){
	Order.scope('populated').findAll({where: req.query})
	.then(orders => res.json(orders))
	.catch(next);
});
*/
