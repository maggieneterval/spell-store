app.controller('MainCtrl', function ($scope, $state, AuthService, AUTH_EVENTS) {
    $scope.searchString;
    $scope.changeState = function () {
      $state.go('allProducts');
    }
    $scope.currentUser = null;
    $scope.getCurrentUser = function () {
        return AuthService.getLoggedInUser()
        .then(function (user) {
            $scope.currentUser = user;
        });
    }
    $scope.$on(AUTH_EVENTS.loginSuccess, function (event, args) {
        $scope.getCurrentUser();
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

