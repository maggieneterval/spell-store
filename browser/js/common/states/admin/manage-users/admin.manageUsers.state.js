app.config(function ($stateProvider) {
    $stateProvider.state('adminView.manageUsers', {
        url: '/admin/manageUsers',
        templateUrl: '/js/common/states/admin/manage-users/admin.manageUsers.state.html',
        resolve: {
            users: function (UsersFactory) {
                return UsersFactory.fetchAll();
            }
        },
        controller: function ($scope, users, UsersFactory) {
            $scope.users = users;
            $scope.selectedUser;
            $scope.submitUserForm = function () {
                return UsersFactory.updateUser($scope.selectedUser.id, $scope.selectedUser)
                .then(function () {
                        $scope.selectedUser = null;
                        alert("Successfully updated user record.")
                    })
            }
            $scope.deleteUser = function () {
                var indOfDeleted = $scope.users.indexOf($scope.selectedUser);
                $scope.users.splice(indOfDeleted, 1);
                return UsersFactory.deleteUser($scope.selectedUser.id)
                .then(function () {
                    $scope.selectedUser = null;
                    alert('Successfully deleted user.');
                })

            }
        }
    })
})
