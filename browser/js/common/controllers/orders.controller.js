app.controller('OrderCtrl', function($scope, $stateParams, OrderFactory, ProductsFactory){
	var orderId = $stateParams.orderId;
	
	var promise1 = OrderFactory.fetchOne(orderId);

	var promise2 = OrderFactory.getOrderProducts(orderId);

	Promise.all([promise1, promise2])
	.then(function(result){
		var order = result[0];
		var orderedProducts = result[1];
		$scope.order = order;
		$scope.order.total = 0;
		$scope.orderedProducts = orderedProducts
		var getProductsPromise = orderedProducts.map(function(item){
			$scope.order.total+=item.getTotal;
			return ProductsFactory.fetchById(item.productId);
		})

		return Promise.all(getProductsPromise);

	})
	.then(function(products){
		for(var i=0; i< $scope.orderedProducts.length; i++){
			$scope.orderedProducts[i].details = products[i];
		}
		$scope.$digest();
	})
})