app.factory('UsersFactory', function ($http) {

    var factory = {};

    factory.fetchAll = function () {
        return $http.get('/api/users')
        .then (function (res) {
              return res.data;
        })
    }

    factory.fetchById = function (id) {
        return $http.get('/api/users/' + id)
        .then (function (res) {
            return res.data;
        })
    }

    factory.createUser = function (body) {
        return $http.post('/api/users', body)
        .then(function (res) {
            return res.data;
        })
    }

    factory.updateUser = function (id, body) {
        return $http.put('/api/users/' + id, body)
        .then(function (res) {
            return res.data;
        })
    }

    factory.deleteUser = function (id) {
        return $http.delete('/api/users/' + id)
        .then(function (res) {
            return res.data;
        })
    }

    return factory;
})