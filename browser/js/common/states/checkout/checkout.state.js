app.config(function ($stateProvider) {
    $stateProvider.state('checkout', {
        url: '/checkout',
        templateUrl: '/js/common/states/checkout/checkout.state.html',
        controller: 'CheckoutCtrl',
        resolve: {
            user: function (AuthService) {
                return AuthService.getLoggedInUser();
            }
        }
    })
});

app.controller('CheckoutCtrl', function ($scope, OrderFactory, $state, user) {
    $scope.checkout = angular.copy(user, {});
    $scope.submitCheckout = function () {
        OrderFactory.checkoutCart($scope.checkout)
        .then(function (res) {
            console.log(res);
            $state.go('home')
        })
    }
});

