'use strict';
var router = require('express').Router();
var db = require('../../../db');
var Order = db.model('order');
module.exports = router;


router.get('/', function(req,res,next){
	Order.findAll({where: req.query})
	.then(orders => res.json(orders))
	.catch(next);
})

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

router.post('/', function(req,res,next){
	order.create(req.body)
	.then(createdOrder => res.json(createdOrder))
	.catch(next);
})

router.get('/:id', function(req,res,next){
	res.json(req.order);
})

router.put('/:id', function(req,res,next){
	req.order.update(req.body)
	.then(updatedOrder => res.json(updatedOrder))
	.catch(next);
})

router.delete('/:id', function(req,res,next){
	req.order.destroy()
	.then(destroyedOrder => res.status(204).send('Product deleted.'))
	.catch(next);
})
