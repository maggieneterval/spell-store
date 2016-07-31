app.controller('ReviewCtrl', function($scope, ReviewFactory, $state){

      $scope.submit = function(reviewId, productId){
                  $scope.newReview.reviewId = reviewId;
                  $scope.newReview.productId = productId;
	      	ReviewFactory.add($scope.newReview)
	      	.then(function(createdReview){
	      		$scope.reviews.push(createdReview);
	      	})

      	//Testing create
      	// $scope.newReview = [];
      	// var newReview = {
      	// 	rating: 1,
      	// 	content: "Not the best one i have had"
      	// }
      	// ReviewFactory.add(newReview)
      	// .then(function(createdReview){
      	// 	$scope.reviews.push(createdReview);
      	// })
      };

      var refresh = function(productId){
      	ReviewFactory.fetchAll({productId: productId})
      	.then(function(allReviews){
      		$scope.reviews = allReviews;
      	})
      }
      $scope.edit = function(reviewId){
      	$scope.isEditing = true;
      	$state.go('productDetails.review', {reviewId: reviewId})
      	//update changes
      };

      $scope.delete = function(reviewId, productId){
      	ReviewFactory.destroy(reviewId)
      	.then(function(destroyedReview){
      		refresh(productId);
      	})
      };
})