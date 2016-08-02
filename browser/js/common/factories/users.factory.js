app.factory('UsersFactory', function ($http) {

    return {

        fetchAll: function () {
            return $http.get('/api/users')
            .then (function (res) {
                  return res.data;
            })
        },

        fetchById: function (id) {
            return $http.get('/api/users/' + id)
            .then (function (res) {
                return res.data;
            })
        },

        createUser: function (body) {
            return $http.post('/api/users', body)
            .then(function (res) {
                return res.data;
            })
        },

        updateUser: function (id, body) {
            return $http.put('/api/users/' + id, body)
            .then(function (res) {
                return res.data;
            })
        },

        deleteUser: function (id) {
            return $http.delete('/api/users/' + id)
            .then(function (res) {
                return res.data;
            })
        }
    }
});
