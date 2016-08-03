'use strict';

var expect = chai.expect;

var mockProducts = [
    {
    title: 'Amplifying Charm',
    category: 'Charms',
    description: ' A charm that can be used to amplify the targeted sound, be it a person\'s voice or a piece of equipment.',
    price: 500,
    deliverable: 'Sonorus',
    inventory: 20

    },
    {
        title: 'Fire-Making Spell',
        category: 'Transfigurations',
        description: 'A form of Conjuration that can be used to conjure a jet of orange and red flame, thereby setting things alight',
        price: 1000,
        deliverable: 'Incendio',
        inventory: 20

    },
    {
        title: 'Stickfast Hex',
        category: 'Hexes',
        price: 3000,
        description: 'A hex that was used to make the target\'s shoes stick to the ground.',
        deliverable: 'Colloshoo',
        inventory: 35
    }
];

describe('adminProductCtrl controller', function () {

    var $controller, myController, $scope, ProductsFactory;

    beforeEach(module('FullstackGeneratedApp', function ($provide) {
        $provide.value('products', mockProducts)
    }));

    beforeEach(inject(function (_$controller_, UsersFactory, products, ProductsFactory) {

        $controller = _$controller_;
        products = products;
        $scope = {};
        ProductsFactory = ProductsFactory;

        myController = $controller('AdminProductCtrl', { $scope: $scope, products: products });

    }));

    describe('$scope.submitProductForm', function () {

        it('$scope.selectedProduct starts as undefined', function () {

            expect($scope.selectedProduct).to.equal(undefined);
        })
    })

})


