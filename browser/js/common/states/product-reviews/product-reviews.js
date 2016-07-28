app.config(function ($stateProvider) {
  $stateProvider.state('productReviews', {
    url: '/products/:productId/reviews',
    templateUrl: '/js/common/states/all-reviews/reviews.html',
    controller: function ($scope, ReviewFactory, $stateParams) {
      ReviewFactory.fetchAll({productId: $stateParams.productId})
      .then(function(reviews){
        $scope.reviews = reviews;
      })
      .catch(console.error())
    }
  })
})

