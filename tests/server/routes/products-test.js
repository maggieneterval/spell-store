var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var supertest = require('supertest');

describe('Product Routes', function () {

    var app, Product, User, agent;

    beforeEach('Sync DB', function () {
        return db.sync({force: true});
    });

    beforeEach('Create app', function () {
        app = require('../../../server/app')(db);
        Product = db.model('product');
        User = db.model('user');
        agent = supertest.agent(app);
    });

    describe('CRUD products', function () {

        var productA, productB, productC;

        beforeEach(function () {
            return Product.create({
                title: 'productA',
                category: 'Charm'
            })
            .then(function (newProduct) {
                productA = newProduct;
            })
        })

        beforeEach(function () {
            return Product.create({
                title: 'productB',
                category: 'Hex'
            })
            .then(function (newProduct) {
                productB = newProduct;
            })
        })

        beforeEach(function () {
            return Product.create({
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
            .get('/api/products/003')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body.title).to.equal(productC.title);
                done();
            })
        })

        it('POSTs new product', function (done) {
            agent
            .post('/api/products')
            .send({
                id: 004,
                title: 'productD',
                category: 'Hex'
            })
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body.title).to.equal('productD');
                expect(res.body.id).to.exist;
                Product.findById(res.body.id)
                .then(function (thisProduct) {
                    expect(thisProduct).to.not.be.null;
                    done()
                })
                .catch(done);
            })
        })

        it('PUT updates a product', function (done) {
            agent
            .put('/api/products/002')
            .send({
                title: 'productBupdated'
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body.title).to.equal('productBupdated');
                Product.findById(002)
                .then(function (thisProduct) {
                    expect(thisProduct).to.not.be.null;
                    done()
                })
                .catch(done);
            })
        })

        it('DELETEs a product', function (done) {
            agent
            .delete('/api/products/001')
            .expect(204)
            .end(function (err, res) {
                if (err) return done(err);
                Product.findById(001)
                .then(function (thisProduct) {
                    expect(thisProduct).to.be.null;
                    done();
                })
                .catch(done);
            })
        })
    })

})

