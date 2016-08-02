var expect = require('chai').expect;
var Sequelize = require('sequelize');
var db = require('../../../server/db');
var supertest = require('supertest');

describe('Order Routes', function () {

    var app, Order, agent;


    beforeEach('Sync DB', function () {
        return db.sync({force: true});
    });

    beforeEach('Create app', function (done) {
        app = require('../../../server/app')(db);
        Order = db.model('order');
        User = db.model('user');
        agent = supertest.agent(app);
        User.create({isRegistered: true, username: "irisy", email: "iris@gmail.com", password: "forest", isAdmin: true})
        .then(function(user){
            agent
            .post('/login')
            .send({
                email: 'iris@gmail.com',
                password: 'forest'
            })
            .expect(200)
            .end(function(err, res) {
               if(err) return done(err);
               done();
            });
        })

    });

    describe('CRUD orders', function () {

        var orderA, orderB, orderC;

        beforeEach(function () {
        	var promise1 = Order.create({
                status: 'paid',
                billing_address: '41 Rockville Drive Holland, MI 49423',
                shipping_address: '41 Rockville Drive Holland, MI 49423',
                shipping_status: 'pending'
            });

            var promise2 = Order.create({
                status: 'complete',
                billing_address: '8146 Augusta Street Floral Park, NY 11001',
                shipping_address: '8146 Augusta Street Floral Park, NY 11001',
                shipping_status: 'shipped'
            });

            var promise3 = Order.create({
                status: 'complete',
                billing_address: '7436 Park Street Inman, SC 29349',
                shipping_address: '7436 Park Street Inman, SC 29349',
                shipping_status: 'pending'
            });

            Promise.all([promise1,promise2,promise3])
            .then(function(arr){
            	orderA = arr[0];
            	orderB = arr[1];
            	orderC = arr[2];
            })
        })

        it('GET all', function (done) {
            agent
            .get('/api/orders')
            .expect(200)
            .end(function (err, res) {
                if(err) return done(err);
                expect(res.body).to.be.instanceof(Array);
                expect(res.body).to.have.length(3);
                done();
            });
        });

        it('GET One', function (done) {
            agent
            .get('/api/orders/'+orderB.id)
            .expect(200)
            .end(function (err, res) {
                if(err) return done(err);
                expect(res.body).to.be.instanceof(Object);
                expect(res.body.billing_address).to.equal(orderB.billing_address);
                done();
            });
        });


        it('Post New Order', function (done) {
        	var newOrder = {
        		id: 004,
                status: 'complete',
                billing_address: '9334 Marshall St. Bronx, NY 10451',
                shipping_address: '9334 Marshall St. Bronx, NY 10451',
                shipping_status: 'pending'
        	}
            agent
            .post('/api/orders')
            .send(newOrder)
            .expect(200)
            .end(function (err, res) {
                if(err) return done(err);
                expect(res.body).to.be.instanceof(Object);
                expect(res.body.billing_address).to.equal(newOrder.billing_address);
                done();
            });
        });

        it('PUT One', function (done) {
            agent
            .put('/api/orders/3')
            .send({shipping_address: "5 Hanover Square, New York, New York, 10004"})
            .expect(200)
            .end(function (err, res) {
                if(err) return done(err);
                expect(res.body).to.be.instanceof(Object);
                expect(res.body.shipping_address).to.equal("5 Hanover Square, New York, New York, 10004");
                done();
            });
        });

        it('PUT One', function (done) {
            agent
            .put('/api/orders/3')
            .send({shipping_address: "5 Hanover Square, New York, New York, 10004"})
            .expect(200)
            .end(function (err, res) {
                if(err) return done(err);
                expect(res.body).to.be.instanceof(Object);
                expect(res.body.shipping_address).to.equal("5 Hanover Square, New York, New York, 10004");
                done();
            });
        });

        it('DELETE One', function (done) {
            agent
            .delete('/api/orders/1')
            .send({shipping_address: "5 Hanover Square, New York, New York, 10004"})
            .expect(204)
            .end(function (err, res) {
                if(err) return done(err);
                done();
            });
        });
    })

})


