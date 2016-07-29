app.config(function($stateProvider){
	$stateProvider
	.state('allOrders',{
		url: '/orders',
		templateUrl: '/js/common/states/all-orders/all-orders.html',
		controller: function($scope, $stateParams, OrderFactory){

			OrderFactory.fetchById($stateParams.id)
			.then(function(product){
				$scope.product = product;
				$scope.reviews = product.reviews
			})
			.catch(console.error())	
		}
	});
})