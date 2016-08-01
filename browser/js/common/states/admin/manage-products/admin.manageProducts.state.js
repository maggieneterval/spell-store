app.config(function ($stateProvider) {
    $stateProvider.state('adminView.manageProducts', {
        url: '/admin/manageProducts',
        templateUrl: '/js/common/states/admin/manage-products/admin.manageProducts.state.html',
        resolve: {
            products: function (ProductsFactory) {
                return ProductsFactory.fetchAll();
            }
        },
        controller: 'AdminProductCtrl'
    })
});

app.controller('AdminProductCtrl', function ($scope, products, ProductsFactory) {
    $scope.products = products;
    $scope.selectedProduct;
    $scope.newProduct;
    $scope.submitProductForm = function () {
        return ProductsFactory.updateProduct($scope.selectedProduct.id, $scope.selectedProduct)
        .then(function () {
            $scope.selectedProduct = null;
            alert('Successfully updated product record.');
        })
    }
    $scope.deleteProduct = function () {
        var indOfDeleted = $scope.products.indexOf($scope.selectedProduct);
        $scope.products.splice(indOfDeleted, 1);
        return ProductsFactory.deleteProduct($scope.selectedProduct.id)
        .then(function () {
            $scope.selectedProduct = null;
            alert('Successfully deleted product.');
        })
    }
    $scope.submitNewProduct = function () {
        return ProductsFactory.createProduct($scope.newProduct)
        .then(function () {
            $scope.newProduct = null;
            alert('Successfully created new product!')
        })
    }
});
