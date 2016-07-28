app.directive('magicRating', function(){
	return {
		restrict: 'EA',
		templateUrl: '/js/common/directives/ratings/ratings.html',
		scope: {
			ratingValue: '='
		},
		link: function(scope, element, attr) {
        	scope.getNum = function(){
        		return [1,2,3,4,5];
        	}
        	scope.clicked = function(index){
        		console.log(index+1);
        	}	
    	}
  	}
})

