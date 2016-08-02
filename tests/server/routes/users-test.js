var expect = require('chai').expect;
var should = require('chai').should;
var Sequelize = require('sequelize');

var db = require('../../../server/db');

var supertest = require('supertest');

describe('User Routes', function () {

    var app, User, agent;

    beforeEach('Sync DB', function () {
        return db.sync({force: true});
    });

    beforeEach('Create app', function () {
        app = require('../../../server/app')(db);
        User = db.model('user');
        agent = supertest.agent(app);
    });

    describe('CRUD users', function () {

        var userA, userB;

        beforeEach(function() {
            return User.create({
                username: 'mneterval',
                email: 'mneterval@gmail.com'
            })
            .then(function (newUser) {
                userA = newUser;
            })
        })

        beforeEach(function() {
            return User.create({
                username: 'james',
                email: 'james@gmail.com'
            })
            .then(function (newUser) {
                userB = newUser;
            })
        })

        beforeEach(function(done) {
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
                   console.log("this is the user", res.body);
                   done();
                });
            })
        })

        it('GETs all users', function (done) {
            agent
            .get('/api/users')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body).to.be.instanceof(Array);
                expect(res.body).to.have.length(3);
                done();
            });
        });

        it('GETs a user by ID', function (done) {
            agent
            .get('/api/users/1')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body.username).to.equal(userA.username)
                done();
            });
        });

        it('POSTs a user', function (done) {
            agent
            .post('/api/users')
            .send({
                username: 'newUser',
                email: 'new@gmail.com',
                password: 'whatever'
            })
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body.email).to.equal('new@gmail.com');
                User.findOne({
                    where: {
                        email: 'new@gmail.com'
                    }
                })
                .then(function (thisUser) {
                    expect(thisUser).to.not.be.null;
                    done();
                })
                .catch(done);
            })
        })

        it('PUT updates an existing user', function (done) {
            agent
            .put('/api/users/1')
            .send({
                username: 'edited'
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body.username).to.equal('edited');
                User.findById(1)
                .then(function (theUser) {
                    expect(theUser.username).to.equal('edited');
                    done();
                })
                .catch(done);
            })
        })

        it('DELETEs an existing user', function (done) {
            agent
            .delete('/api/users/2')
            .expect(204)
            .end(function (err, res) {
                if (err) return done(err);
                User.findById(2)
                .then(function (theUser) {
                    expect(theUser).to.be.null;
                    done();
                })
                .catch(done);
            })
        })

    })
})
