app.controller('CartCtrl', function($scope, OrderFactory) {
	$scope.addToCart = function () {

		var item = {
            product: $scope.product.id,
            quantity: $scope.productQty
        };

        // I wanted to use this `item` in a PUT request
        // I'm thinking the flow needs to be something like:
        // check if the user has an order pending. create an order if not
        // if the person is a unregistered user, do you create a user in the db based on the Sessions table data?
        // add the item to order details table



	}
});