app.controller('CartCtrl', function($scope, OrderFactory) {
	$scope.addToCart = function () {

		var item = {
            product: $scope.product.id,
            quantity: $scope.productQty
        };

	}
});