app.directive('productItem', function(ProductsFactory){
	return {
		restrict: 'E',
		scope: {
			product: '='
		},
		templateUrl: 'js/common/directives/product/product.html'
	}
})
