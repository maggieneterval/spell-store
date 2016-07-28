app.directive('reviewItem', function(ReviewFactory){
	return {
		restrict: 'E',
		scope: {
			review: '='
		},
		templateUrl: 'js/common/directives/review/review.html'
		// link: function(scope){
		// 	ReviewFactory.fetchOne(1)
		// 	.then(function(review){
		// 		scope.review = review;
		// 	});

		// }
	}
})
