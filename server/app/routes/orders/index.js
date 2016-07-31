/*'use strict';
var router = require('express').Router();
var db = require('../../../db');
var Order = db.model('order');
module.exports = router;*/

'use strict';
var router = require('express').Router();
var db = require('../../../db');
var Order = db.model('order');
var OrderDetails = db.model('order_detail');
module.exports = router;


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
