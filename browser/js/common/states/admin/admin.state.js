app.config(function ($stateProvider) {
    $stateProvider.state('adminView', {
        url: '/admin',
        templateUrl: '/js/common/states/admin/admin.state.html'
    })
})

app.config(function ($stateProvider) {
    $stateProvider.state('adminView.manageUsers', {
        url: '/admin/manageUsers',
        templateUrl: '/js/common/states/admin/admin.manageUsers.state.html',
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
        }
    })
})

app.config(function ($stateProvider) {
  $stateProvider.state('adminView.manageOrders', {
    url: '/admin/manageOrders',
    templateUrl: '/js/common/states/admin/admin.manageOrders.state.html',
    resolve: {
        orders: function (OrdersFactory) {
            return OrdersFactory.fetchAll();
        }
    },
    controller: function ($scope, orders, OrdersFactory) {
        $scope.orders = orders;
        $scope.selectedOrder;
        $scope.submitEditOrderForm = function () {
            return OrdersFactory.updateOrder($scope.selectedOrder.id, $scope.selectedOrder)
            .then(function () {
                $scope.selectedOrder = null;
                alert("Successfully updated order record.")
            })
        }
    }
  })
})

app.config(function ($stateProvider) {
    $stateProvider.state('adminView.manageProducts', {
        url: '/admin/manageProducts',
        templateUrl: '/js/common/states/admin/admin.manageProducts.state.html',
        resolve: {
            products: function (ProductsFactory) {
                return ProductsFactory.fetchAll();
            }
        },
        controller: function ($scope, products, ProductsFactory) {
            $scope.products = products;
            $scope.selectedProduct;
            $scope.submitProductForm = function () {
                return ProductsFactory.updateProduct($scope.selectedProduct.id, $scope.selectedProduct)
                .then(function () {
                    $scope.selectedProduct = null;
                    alert("Successfully updated product record.")
                })
            }
        }
    })
})
