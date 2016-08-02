app.factory('ProductsFactory', function ($http) {

    return {

        fetchAll: function () {
            return $http.get('/api/products')
            .then (function (res) {
                  return res.data;
            })
        },

        fetchByCategory: function (category) {
            return $http.get('/api/products/category/' + category)
            .then (function (res) {
                return res.data;
            })
        },

        fetchById: function (id) {
            return $http.get('/api/products/' + id)
            .then (function (res) {
                return res.data;
            })
        },

        createProduct: function (body) {
            return $http.post('/api/products', body)
            .then(function (res) {
                return res.data;
            })
        },

        updateProduct: function (id, body) {
            return $http.put('/api/products/' + id, body)
            .then(function (res) {
                return res.data;
            })
        },

        deleteProduct: function (id) {
            return $http.delete('/api/products/' + id)
            .then(function (res) {
                return res.data;
            })
        }

    }
})
