app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: '/js/common/states/signup/signup.state.html',
        controller: 'SignupCtrl'
    });

});

app.controller('SignupCtrl', function ($scope, AuthService, $state, UsersFactory) {

    $scope.formBody = {};
    $scope.error = null;

    $scope.sendSignup = function () {

        $scope.error = null;

        UsersFactory.createUser($scope.formBody)
        .then(function () {
            AuthService.login($scope.formBody)
            .then(function () {
                $state.go('home');
            })
            .catch(function () {
                $scope.error = 'Invalid login credentials';
            });
        })
    }


})
