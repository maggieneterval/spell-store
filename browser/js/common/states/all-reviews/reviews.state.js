app.config(function ($stateProvider) {
  $stateProvider.state('allReviews', {
    url: '/reviews',
    templateUrl: '/js/common/states/all-reviews/reviews.html',
    controller: function ($scope, ReviewFactory) {
      ReviewFactory.fetchAll({productId:2})
      .then(function(reviews){
        console.log("print out",reviews);
        $scope.reviews = reviews;
      })
      .catch(console.error())
    }
  })
})

