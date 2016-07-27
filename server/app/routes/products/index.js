'use strict';

var router = require('express').Router();
var Product = require('../../../db/models/product');
module.exports = router;

router.get('/category/:category', function (req, res, next) {
  Product.findAll({
    where: {
      category: req.params.category
    }
  })
  .then(function (products) {
    res.send(products);
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  Product.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function (products) {
    res.send(products);
  })
  .catch(next);
});

router.get('/', function (req, res, next) {
  Product.findAll()
  .then(function (allProducts) {
    res.send(allProducts);
  })
  .catch(next);
});
