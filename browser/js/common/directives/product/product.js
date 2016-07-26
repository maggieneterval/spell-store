app.directives('productItem', function(){
	return {
		restrict: 'E',
		scope: {
			product: '='
		},
		templateUrl: 'js/common/directives/product/product.html'
	}
})