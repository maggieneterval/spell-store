var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var supertest = require('supertest');

describe('product routes', function () {

    var app, Product, agent;

    beforeEach('Sync DB', function () {
        return db.sync({force: true});
    });

    beforeEach('Create app', function () {
        app = require('../../../server/app')(db);
        Product = db.model('product');
        agent = supertest.agent(app);
    });

    describe('fetching products', function () {

        var productA, productB, productC;

        beforeEach(function () {
            return Product.create({
                product_id: 001,
                title: 'productA',
                category: 'Charm'
            })
            .then(function (newProduct) {
                productA = newProduct;
            })
        })

        beforeEach(function () {
            return Product.create({
                product_id: 002,
                title: 'productB',
                category: 'Hex'
            })
            .then(function (newProduct) {
                productB = newProduct;
            })
        })

        beforeEach(function () {
            return Product.create({
                product_id: 003,
                title: 'productC',
                category: 'Jinx'
            })
            .then(function (newProduct) {
                productC = newProduct;
            })
        })

        it('GET all', function (done) {
            agent
            .get('/api/products')
            .expect(200)
            .end(function (err, res) {
                if(err) return done(err);
                expect(res.body).to.be.instanceof(Array);
                expect(res.body).to.have.length(3);
                done();
            });
        });

        it('GET all by category', function (done) {
            agent
            .get('/api/products/category/Charm')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body).to.be.instanceof(Array);
                expect(res.body).to.have.length(1);
                done();
            })
        })

        it('GET one by id', function (done) {
            agent
            .get('api/products/003')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body.title).to.equal(productC.title);
                done();
            })
        })
    })
})

