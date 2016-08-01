app.config(function($stateProvider){
	$stateProvider
	.state('order',{
		url: '/orders/:orderId',
		templateUrl: '/js/common/states/order-details/order-details.html',
		controller: 'OrderCtrl'
	});
})