app.directive('reviewItem', function(ReviewFactory){
	return {
		restrict: 'E',
		scope: {
			review: '=',
		},
		templateUrl: 'js/common/directives/reviews/review.html',
		link: function(scope){
			scope.max = 5;
			scope.rating = scope.review.rating;
			scope.isReadonly = true;
			scope.ratingStates = [
			{stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
			];
		}
	}
})
