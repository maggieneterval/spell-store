app.config(function ($stateProvider) {
  $stateProvider.state('allProducts', {
    url: '/products',
    templateUrl: '/js/common/states/all-products/all-products.state.html',
    resolve: {
      allProducts: function (ProductsFactory) {
        return ProductsFactory.fetchAll();
      }
    },
    controller: function ($scope, allProducts) {
      $scope.allProducts = allProducts;
    }
  })
})

