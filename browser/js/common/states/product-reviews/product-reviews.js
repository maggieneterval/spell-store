app.config(function ($stateProvider) {
  $stateProvider.state('productDetails.review', {
    //Should this be nested under the product details state?
    url: '/reviews',
    templateUrl: '/js/common/states/product-reviews/product-reviews.html',
    resolve: { 
      productId: function($stateParams){
        return $stateParams.id;
      } 
    },
    controller: function ($scope, ReviewFactory, productId) {
      ReviewFactory.fetchAll({productId: productId})
      .then(function(reviews){
        $scope.reviews = reviews;
      })
      .catch(console.error())
    }
  })
})

