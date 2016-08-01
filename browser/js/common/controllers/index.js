app.controller('MainCtrl', function ($scope, $rootScope, $state, AuthService, AUTH_EVENTS) {
    $scope.searchString;
    $scope.changeState = function () {
      $state.go('allProducts');
    }
    $rootScope.currentUser = null;
    $scope.getCurrentUser = function () {
        return AuthService.getLoggedInUser()
        .then(function (user) {
            $rootScope.currentUser = user;
        });
    }
    $scope.logout = function () {
        AuthService.logout()
        .then(function () {
            $state.go('login');
        })
    }
    $scope.$on(AUTH_EVENTS.loginSuccess, function (event, args) {
        $scope.getCurrentUser();
    })
    $scope.$on(AUTH_EVENTS.logoutSuccess, function (event, args) {
        $rootScope.currentUser = null;
    })
});

app.filter('searchFor', function () {
    return function(arr, searchString){
        if (!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function (item) {
            if (item.title.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });
        return result;
    }
})

