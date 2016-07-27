app.config(function ($stateProvider) {
  $stateProvider.state('singleCategory', {
    url: '/products/category/:category',
    templateUrl: '/js/common/states/product-category/product-category.state.html',
    resolve: {
      allCategoryProducts: function (ProductsFactory, $stateParams) {
        return ProductsFactory.fetchByCategory($stateParams.category);
      }
    },
    controller: function ($scope, allCategoryProducts) {
      $scope.allCategoryProducts = allCategoryProducts;
    }
  })
})
