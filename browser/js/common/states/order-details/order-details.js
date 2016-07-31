app.config(function($stateProvider){
	$stateProvider
	.state('order',{
		url: '/orders/:orderId',
		templateUrl: '/js/common/states/order-details/order-details.html',
		controller: function($scope, $stateParams, OrderFactory, ProductsFactory){
			var createdProduct, order;
			ProductsFactory.fetchById(1)
			.then(function(product){
				createdProduct = product;
				return OrderFactory.add({
					status: 'complete',
					order_type: 'cart',
					billing_address: 'whatever',
					shipping_address: 'another whatever',
					shippping_status: 'shipped'
				})
				.then(function(createdOrder){
					order = createdOrder;
					console.log(order);
					order.addProducts(createdProduct, {quantity: 4, price: 1000})
					console.log(order.getProducts());
				})

			})

			// OrderFactory.fetchOne($stateParams.orderId)
			// .then(function(order){
			// 	$scope.order = order;
			// 	console.log(order);
			// 	console.log(order.OrderDetail)
			// })
			// .catch(console.error())	
		}
	});
})