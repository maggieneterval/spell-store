app.directive('reviewItem', function(){
	return {
		restrict: 'E',
		scope: {
			review: '='
		},
		templateUrl: 'js/common/directives/review/review.html'
	}
})
