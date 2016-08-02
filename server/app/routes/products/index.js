'use strict';

var router = require('express').Router();
var db = require('../../../db');
var Product = db.model('product');
var Review = db.model('review');
module.exports = router;

router.get('/category/:category', function (req, res, next) {
        Product.findAll({
            where: {
                category: req.params.category
            }
        })
        .then(function (products) {
            res.status(200).send(products);
        })
        .catch(next);
});

router.get('/:id', function (req, res, next) {
        Product.findOne({
            where: {
            id: req.params.id
            },
            include: [Review]
        })
        .then(function (products) {
            res.status(200).send(products);
        })
        .catch(next);
});

router.get('/', function (req, res, next) {
        Product.findAll()
        .then(function (allProducts) {
            res.status(200).send(allProducts);
        })
        .catch(next);
});

router.post('/', function (req, res, next) {
    if (!req.user || !req.user.isAdmin){
        res.status(403).send('Access denied.')
    } else {
        Product.create(req.body)
        .then(function (product) {
            res.status(201).send(product)
        })
        .catch(next);
    }
});

router.put('/:id', function (req, res, next) {
    if (!req.user || !req.user.isAdmin){
        res.status(403).send('Access denied.')
    } else {
        Product.findById(req.params.id)
        .then(function (product) {
            product.update(req.body);
            return product.save();
        })
        .then(function (product) {
            res.status(200).send(product);
        })
        .catch(next);
    }
})

router.delete('/:id', function (req, res, next) {
    if (!req.user || !req.user.isAdmin){
        res.status(403).send('Access denied.')
    } else {
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.status(204).send('Product deleted.');
        })
        .catch(next);
    }

})
