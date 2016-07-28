app.controller('MainCtrl', function ($scope) {
    $scope.searchString;
});

app.controller('searchSubmit', function ($scope, $state, $rootScope) {
    // $scope.searchString; //from search input
    // $scope.submitSearch = function () {
    //     $rootScope.searchString = $scope.searchString;
    //     $state.go('allProducts');
    //     $rootScope.searchString = '';
    //     $scope.searchString = '';
    // }
})

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

