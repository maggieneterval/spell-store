app.config(function ($stateProvider) {
    $stateProvider.state('adminView.manageOrders', {
        url: '/admin/manageOrders',
        templateUrl: '/js/common/states/admin/manage-orders/admin.manageOrders.state.html',
        resolve: {
            orders: function (OrderFactory) {
                return OrderFactory.fetchAll();
            }
        },
        controller: function ($scope, orders, OrderFactory) {
            $scope.orders = orders;
            $scope.selectedOrder;
            $scope.submitEditOrderForm = function () {
                return OrderFactory.update($scope.selectedOrder.id, $scope.selectedOrder)
                .then(function () {
                    $scope.selectedOrder = null;
                    alert("Successfully updated order record.")
                })
            }
            $scope.deleteOrder = function () {
                var indOfDeleted = $scope.orders.indexOf($scope.selectedOrder);
                $scope.orders.splice(indOfDeleted, 1);
                return OrderFactory.destroy($scope.selectedOrder.id)
                .then(function () {
                    $scope.selectedOrder = null;
                    alert("Successfully deleted order.")
                })
            }
            $scope.selectOrder = function (order){
                $scope.selectedOrder = order;
            }
        }
    })
})

app.filter('orderStatusFilter', function () {
    return function(orders, orderStatus){
        if (orderStatus) orderStatus = orderStatus.toLowerCase();
        if (!orderStatus || orderStatus === 'all'){
            return orders;
        }
        var result = [];
        angular.forEach(orders, function (order) {
            if (order.shipping_status === orderStatus){
                result.push(order);
            }
        });
        return result;
    }
})
