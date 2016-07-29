app.config(function ($stateProvider) {
  $stateProvider.state('productDetails.review', {
    url: '/reviews/:reviewId',
    templateUrl: '/js/common/states/product-reviews/product-reviews.html',
    resolve: { 
      productId: function($stateParams){
        return $stateParams.id;
      } 
    },
    controller: function ($scope, ReviewFactory, productId, $stateParams) {
      ReviewFactory.fetchOne($stateParams.reviewId)
      .then(function(review){
        $scope.review = review;
      })
      .catch(console.error())
    }
  })
})

