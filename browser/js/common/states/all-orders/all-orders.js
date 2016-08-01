app.config(function($stateProvider){
	$stateProvider
	.state('orders',{
		url: '/orders',
		templateUrl: '/js/common/states/all-orders/all-orders.html',
		controller: function($scope, $stateParams, OrderFactory, $rootScope){
			OrderFactory.fetchAll({status: 'complete', userId: $rootScope.currentUser.id})
			.then(function(orders){
				$scope.orders = orders;
			})
			.catch(console.error())	
		}
	});
})