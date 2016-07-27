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

    return factory;
})
