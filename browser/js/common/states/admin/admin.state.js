app.config(function ($stateProvider) {
    $stateProvider.state('adminView', {
        url: '/admin',
        templateUrl: '/js/common/states/admin/admin.state.html',
        // visible to everyone, not just admin
        // use ng-shows and backend route validation
    })
})

