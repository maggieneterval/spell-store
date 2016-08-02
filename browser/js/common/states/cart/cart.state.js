app.config(function ($stateProvider) {
	$stateProvider.state('cart', {
		url: '/cart',
		templateUrl: '/js/common/states/cart/cart.state.html',
		controller: function ($scope, CartFactory) {
			CartFactory.getOrder()
			.then(function(pendingOrder){
				$scope.pendingOrder = pendingOrder;
				
				$scope.pendingOrder.subtotal = 0;
				for(var i=0; i<pendingOrder.products.length; i++){
					$scope.pendingOrder.subtotal += pendingOrder.products[i].order_detail.quantity * pendingOrder.products[i].price;
				}
			});
		}
	})
});