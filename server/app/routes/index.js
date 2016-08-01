'use strict';
var router = require('express').Router();
module.exports = router;


router.use('/products', require('./products'));
router.use('/users', require('./users'));

router.use('/orders', require('./orders'));
// Make sure this is after all of
// the registered routes!

router.use('/reviews', require('./reviews'));
router.use(function (req, res) {
    res.status(404).end();
});
