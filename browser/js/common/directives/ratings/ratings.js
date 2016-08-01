app.directive('magicRating', function(){
	return {
		restrict: 'EA',
		templateUrl: '/js/common/directives/ratings/ratings.html',
		scope: {
            rate: '@'
		},
		link: function(scope, element, attr) {
        	// scope.rate = 1;
              scope.max = 5;
              scope.isReadonly = true;

              scope.hoveringOver = function(value) {
                scope.overStar = value;
              };

              scope.ratingStates = [
                {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
              ];
        	}	
  	}
})

