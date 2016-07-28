'use strict';

var router = require('express').Router();
var db = require('../../../db');
var User = db.model('user');
module.exports = router;

router.get('/:id', function (req, res, next) {
    User.findOne({
        where: {
        id: req.params.id
        }
    })
    .then(function (user) {
        res.status(200).send(user);
    })
    .catch(next);
});

router.get('/', function (req, res, next) {
    User.findAll()
    .then(function (allUsers) {
        res.status(200).send(allUsers);
    })
    .catch(next);
});

router.post('/', function (req, res, next) {
    User.create(req.body)
    .then(function (user) {
        res.status(201).send(user)
    })
    .catch(next);
});

router.put('/:id', function (req, res, next) {
    User.findById(req.params.id)
    .then(function (user) {
        user.update(req.body);
        return user.save();
    })
    .then(function (user) {
        res.status(200).send(user);
    })
    .catch(next);
})

router.delete('/:id', function (req, res, next) {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(function() {
        res.status(204).send('User deleted.');
    })
    .catch(next);
})
