app.config(function($stateProvider){
	$stateProvider
	.state('productDetails',{
		url: '/products/:id',
		templateUrl: '/js/common/states/product-details/product-details.html',
		controller: function($scope, ProductsFactory, AuthService, $stateParams){
			
			ProductsFactory.fetchById($stateParams.id)
			.then(function(product){
				$scope.product = product;
				$scope.reviews = product.reviews
			})
			.catch(console.error());	
		}
	});
})