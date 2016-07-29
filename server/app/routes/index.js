'use strict';
var router = require('express').Router();
module.exports = router;

//router.use('/members', require('./members'));
router.use('/products', require('./products'));
router.use('/users', require('./users'));

// Make sure this is after all of
// the registered routes!

router.use('/reviews', require('./reviews'));
router.use(function (req, res) {
    res.status(404).end();
});
