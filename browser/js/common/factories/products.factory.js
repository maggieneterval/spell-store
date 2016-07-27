app.factory('ProductsFactory', function ($http) {

    var factory = {};

    factory.fetchAll = function () {
        return $http.get('/api/products')
        .then (function (res) {
              return res.data;
        })
    }

    factory.fetchByCategory = function (category) {
        return $http.get('/api/products/category/' + category)
        .then (function (res) {
            return res.data;
        })
    }

    factory.fetchById = function (id) {
        return $http.get('/api/products/' + id)
        .then (function (res) {
            return res.data;
        })
    }

    factory.createProduct = function (body) {
        return $http.post('/api/products', body)
        .then(function (res) {
            return res.data;
        })
    }

    factory.updateProduct = function (id, body) {
        return $http.put('/api/products/' + id, body)
        .then(function (res) {
            return res.data;
        })
    }

    factory.deleteProduct = function (id) {
        return $http.delete('/api/products/' + id)
        .then(function (res) {
            return res.data;
        })
    }

    return factory;
})
