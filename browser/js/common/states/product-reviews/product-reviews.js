// app.config(function ($stateProvider) {
//   $stateProvider.state('productDetails.review', {
//     //Should this be nested under the product details state?
//     url: '/',
//     templateUrl: '/js/common/states/product-reviews/product-reviews.html',
//     resolve: { 
//       productId: function($stateParams){
//         return $stateParams.id;
//       } 
//     },
//     controller: function ($scope, ReviewFactory, productId) {
//       ReviewFactory.fetchAll({productId: productId})
//       .then(function(reviews){
//         $scope.reviews = reviews;
//       })
//       .catch(console.error())
//     }
//   })
// })

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

