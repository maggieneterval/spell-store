app.controller('ReviewCtrl', function($scope, ReviewFactory){
	// ReviewFactory.fetchAll({productId: $scope.product.id})
 //      .then(function(reviews){
 //        $scope.reviews = reviews;
 //      })
 //      .catch(console.error())
 		$scope.isEditing = false;
      $scope.submit = function(reviewId){
      	if(!reviewId){
	      	ReviewFactory.add($scope.newReview)
	      	.then(function(createdReview){
	      		$scope.reviews.push(createdReview);
	      	}) 
      	}else{
      		ReviewFactory.update(reviewId, review)
      		.then(function(updated){
      			$scope.isEditing = false;
      		})
      	}
      };

      $scope.edit = function(reviewId){
      	$scope.isEditing = true;
      	//update changes
      };

      $scope.delete = function(reviewId){

      };
})