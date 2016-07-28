'use strict';

var expect = chai.expect;

var makeFakeUsers = function () {
    var fakeUsers = [{id: 1, username: 'maggie', password: '12345'}, {id: 2, username: 'dana', password: '123456'}];
    return fakeUsers;
}

describe('Users factory', function () {

    beforeEach(module('FullstackGeneratedApp'));

    var $httpBackend, User;

    beforeEach(inject(function ($injector, UsersFactory) {
        $httpBackend = $injector.get('$httpBackend');
        User = UsersFactory;

    }))

    afterEach(function () {
        try {
            $httpBackend.verifyNoOutstandingExpectation(false);
            $httpBackend.verifyNoOutstandingRequest();
        } catch (err) {
            this.test.error(err);
        }
    })

    it('fetchAll fetches all users', function (done) {
        var fakeUsers = makeFakeUsers();
        $httpBackend.whenGET('/api/users')
            .respond(200, fakeUsers);
        User.fetchAll()
            .then(function (users) {
                $httpBackend.flush();
                expect(users).to.deep.equal(fakeUsers);
            })
            .catch(done);
        done();
    })

    it('fetchById fetches one user by id', function (done) {
        var fakeUsers = makeFakeUsers();
        $httpBackend.whenGET('/api/users/1')
            .respond(200, fakeUsers[0]);
        User.fetchById(1)
            .then(function (foundUser) {
               $httpBackend.flush();
               expect(foundUser.username.toEqual('maggie'));
            })
            .catch(done);
        done();
    })

    it('createUser creates one user', function (done) {
        var createdUser = {id: 3, username: 'antha', password: 3456};
        $httpBackend.whenPOST('/api/users', createdUser)
            .respond(201, createdUser)
        User.createUser(createdUser)
            .then(function (newUser) {
                $httpBackend.flush();
                expect(newUser.to.deep.equal(createdUser));
            })
            .catch(done);
        done();
    })

    it('updateUser updates one user', function (done) {
        var fakeUsers = makeFakeUsers();
        var update = {username: 'newUsername'}
        fakeUsers[0].username = 'newUsername';
        $httpBackend.whenPUT('/api/users/1', update)
            .respond(200, fakeUsers[0])
        User.updateUser(update)
            .then(function (changedUser) {
                $httpBackend.flush();
                expect(changedUser.to.deep.equal(fakeUsers[0]));
            })
            .catch(done);
        done();
    })

    // it('deleteUser updates one user', function (done) {
    //     var fakeUsers = makeFakeUsers();
    //     $httpBackend.whenDELETE('/api/users/1')
    //         .respond(204)
    //     User.deleteUser(1)
    //         .then(function () {
    //             $httpBackend.flush();

    //         })
    //         .catch(done);
    //     done();
    // })

})
