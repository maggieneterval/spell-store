var router = require('express').Router();
var db = require('../../../../server/db'); //might need to fix this
var Review = db.model('review');
module.exports = router;

router.get('/', function(req,res,next){
	return Review.findAll({where: req.body})
	.then(reviews => res.json(reviews))
	.catch(next);
})

router.param('id', function (req, res, next, id) {
	return Review.findById(id)
	.then(function (review) {
		if (review) {
			req.review = review;
			next();
			return null; // silence Bluebird warning re: non-returned promise in next
		} else {
			throw HttpError(404);
		}
	})
	.catch(next);
});

router.post('/', function(req,res,next){
	return Review.create(req.body)
	.then(createdReview => res.json(createdReview))
	.catch(next);
})

router.get('/:id', function(req,res,next){
	return res.json(req.review);
})

router.put(':/id', function(req,res,next){
	return req.review.update(req.body)
	.then(updatedReview => res.json(updatedReview))
	.catch(next);
})

router.delete(':/id', function(req,res,next){
	return req.review.destroy()
	.then(destroyedReview => res.json(destroyedReview))
	.catch(next);
})