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

    $scope.categories = [

        {
            name: "Charms",
            image: "/images/hogwarts.jpg",
            description: "A charm is a spell that adds certain properties to an object or creature. Charms are distinguished from transfigurations in that a charm adds or changes properties of an object; it focuses on altering what the object does as opposed to what the object is. For example, the Colour Change Charm causes something to flash different colours; the Levitation Charm causes an object to levitate; the Cheering Charm improves upon a creature's mood. An object that has a lasting charm placed on it is called bewitched, though charms in general appear to last longer than other spells."
        },

        {
            name: "Transfigurations",
            image: "/images/dumbledorespell.jpg",
            description: "Transfiguration is a branch of magic that focuses on the alteration of the form or appearance of an object, via the alteration of the object's molecular structure. Transfiguration can be done to most (if not all) objects and, as with most forms of magic, it includes — but is hardly limited to — Transfiguration spells. Transfiguration is also regarded as 'very hard work' and is 'more scientific' than any other form of magic as in, you have to get it exactly right for the transfiguration to be successful."
        },

        {
            name: "Jinxes",
            image: "/images/lumos.jpg",
            description: "Affiliated with dark magic and distinguished by their negative effects used mostly for the amusement of observers and the minor discomfort of the victim."
        },

        {
            name: "Hexes",
            image: "/images/deathlyhallows.jpg",
            description: "A hex is also affiliated with Dark Magic, darker than a jinx but not as dark as a curse. It generally causes moderate suffering to the victim."
        },

        {
            name: "Curses",
            image: "/images/vangogh.jpg",
            description: "A tool of the Dark Arts and the worst kind of Dark Magic. Curses are used with the intention to harm, control, or even kill to the victim. We do not sell unforgivable curses at Spell Store; we just use them on you if you pirate our spells."
        },


        {
            name: "Healing Spells",
            image: "/images/vangoghbroom.jpg",
            description: "A Healing spell is distinguished by its capacity to magically improve the physical condition of the living object — it is a branch of Healing magic."
        },


        {
            name: "Protective Enchantments",
            image: "/images/patronus.jpg",
            description: "Protective enchantments are spells used to protect an area that the caster wants protected. The spells that are cast usually last a long time and shield specific places that the caster intended to shield. There are many different types of protective enchantments."
        }

    ]


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

