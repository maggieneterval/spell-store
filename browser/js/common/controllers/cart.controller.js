app.controller('CartCtrl', function($scope, $rootScope, OrderFactory) {

	$scope.addToCart = function () {

        $rootScope.currentUser;
        $scope.currentItem = {
            id: $scope.product.id,
            qty: $scope.productQty
        }

        OrderFactory.addToCart($rootScope.currentUser, $scope.currentItem)
        .then(function () {
            //go to 'myCauldron' state
            console.log('Added to cart');
        })
	}
});
