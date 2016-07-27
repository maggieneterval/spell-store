app.config(function($stateProvider){
	$stateProvider
	.state('productDetails',{
		url: 'products/:id',
		templateUrl: '/js/common/states/product-details/product-details.html',
		controller: function($scope, $stateParams){
			//to view the product details, pass in the PRODUCT OBJECT ITESELF into the stateparams.
			$scope.product = $stateParams.product;
			$scope.reviews = $scope.product.reviews;	
		}
	});
})