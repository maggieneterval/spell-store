app.config(function ($stateProvider) {
    $stateProvider.state('checkout', {
        url: '/checkout',
        templateUrl: '/js/common/states/checkout/checkout.state.html',
        controller: 'CheckoutCtrl'
    })
});

app.controller('CheckoutCtrl', function ($scope, OrderFactory) {
    $scope.submitCheckout = function () {
        OrderFactory.checkoutCart($scope.checkout)
        .then(function (res) {
            console.log(res);
        })
    }
});

