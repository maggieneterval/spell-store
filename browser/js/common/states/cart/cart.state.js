app.config(function ($stateProvider) {
	$stateProvider.state('cart', {
		url: '/cart',
		templateUrl: '/js/common/states/cart/cart.state.html',
		controller: function ($scope, CartFactory) {
			CartFactory.getOrder()
			.then(function(pendingOrder){
				$scope.pendingOrder = pendingOrder;
			});
		}
	})
});