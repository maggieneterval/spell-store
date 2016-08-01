app.config(function($stateProvider){
	$stateProvider
	.state('orders',{
		url: '/orders',
		templateUrl: '/js/common/states/all-orders/all-orders.html',
		controller: function($scope, $stateParams, OrderFactory){

			OrderFactory.fetchAll({status: 'complete'})
			.then(function(orders){
				$scope.orders = orders;
			})
			.catch(console.error())	
		}
		// this state is visible to everyone, including non-logged-in users (not good)
		// could include validation in backend and frontend
	});
})