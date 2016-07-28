app.config(function ($stateProvider) {
  $stateProvider.state('productReviews', {
    //Should this be nested under the product details state?
    url: '/products/:productId/reviews',
    templateUrl: '/js/common/states/product-reviews/product-reviews.html',
    controller: function ($scope, ReviewFactory, $stateParams) {
      ReviewFactory.fetchAll({productId: $stateParams.productId})
      .then(function(reviews){
        $scope.reviews = reviews;
      })
      .catch(console.error())
    }
  })
})

