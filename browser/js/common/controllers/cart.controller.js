app.controller('CartCtrl', function($scope) {
	$scope.addToCart = function () {
		$scope.cart = $scope.cart || [];
		$scope.cart.push({quantity: $scope.productQty});
		console.log($scope.cart);
	}
});