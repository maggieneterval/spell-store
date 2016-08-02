app.controller('ReviewCtrl', function($scope, ReviewFactory, $state, AuthService){
      $scope.currentUser;
      AuthService.getLoggedInUser()
      .then(function(user){
            if(!user){$scope.reviewForm.username = null; }
            else{
                  $scope.currentUser = user;
                  $scope.reviewForm.username = user.username;
            }
      })

      $scope.submit = function(reviewId, productId){
                  if(!$scope.currentUser){
                        $state.go('productDetails', {id: productId}, {reload: true});
                  }
                  else{
                        $scope.newReview.userId = $scope.currentUser.id;
                        $scope.newReview.productId = productId;
      	      	ReviewFactory.add($scope.newReview)
      	      	.then(function(createdReview){
      	      		// $scope.reviews.push(createdReview);
               //                $scope.reviewForm = {};
               refresh(productId);

                        })
            }

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
      };

      $scope.delete = function(reviewId, productId){
      	ReviewFactory.destroy(reviewId)
      	.then(function(destroyedReview){
      		refresh(productId);
      	})
      };
      $scope.max = 5;
      $scope.isReadonly = false;
      $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
      };

      $scope.ratingStates = [
            {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
            {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
            {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
            {stateOn: 'glyphicon-heart'},
            {stateOff: 'glyphicon-off'}
      ];


})