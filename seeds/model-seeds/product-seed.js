var db = require('../../server/db');
var Product = db.model('product');

var generatePhoto = function(){
    // generates random integer between 0 and 6
    var randomInt = Math.floor(Math.random()*100)%7;
    // now assign an image based on that number
    if (randomInt === 0){return "/images/deathlyhallows.jpg"}
    if (randomInt === 1){return "/images/dumbledorespell.jpg"}
    if (randomInt === 2){return "/images/hogwarts.jpg"}
    if (randomInt === 3){return "/images/lumos.jpg"}
    if (randomInt === 4){return "/images/patronus.jpg"}
    if (randomInt === 5){return "/images/vangogh.jpg"}
    if (randomInt === 6){return "/images/vangoghbroom.jpg"}

}

var seedProducts = function () {

    var products = [
        /*Note: the prices are in knuts. A knut is worth about 2 cents. 
        Let's display it as Galleons, Sickles, and Knuts on the front end */
        {
            title: 'Amplifying Charm',
            category: 'Charm',
            description: ' A charm that can be used to amplify the targeted sound, be it a person\'s voice or a piece of equipment.',
            price: 500,
            deliverable: 'Sonorus',
            photo: generatePhoto(),
            inventory: 20

        },
        {
            title: 'Fire-Making Spell',
            category: 'Transfiguration',
            description: 'A form of Conjuration that can be used to conjure a jet of orange and red flame, thereby setting things alight',
            price: 1000,
            deliverable: 'Incendio',
            photo: generatePhoto(),
            inventory: 20

        },
        {
            title: 'Stickfast Hex',
            category: 'Hex',
            price: 3000,
            description: 'A hex that was used to make the target\'s shoes stick to the ground.',
            deliverable: 'Colloshoo',
            photo: generatePhoto(),
            inventory: 35
        },
        {
            title: 'The Dancing Feet Spell',
            category: 'Jinx',
            description: 'The Dancing Feet spell has its origins in ancient Italy, but is best remembered for its improper usage by Warlock Zaccaria Innocenti who is credited with conjuring a dance within Mt. Vesuvius in 79 AD. It is used to force another person\'s legs to begin dancing uncontrollably. The spell requires a clear, unobstructed view of the target to be successfully cast.',
            price: '5000',
            photo: generatePhoto(),
            deliverable: 'Tarantallegra',
            inventory: 10
        },
        {
            title: 'Throat Clearing Spell',
            category: 'Healing Spell',
            description: 'A healing spell that clears the target person\'s throat if it is blocked; an example would be if one was choking.',
            price: '6000',
            photo: generatePhoto(),
            deliverable: 'Anapneo',
            inventory: 5
        },
        {
            title: 'Body Freezing Spell',
            category: 'Curse',
            description: 'The Full Body-Bind Curse also known as the Body Freezing Spell is a curse that paralyses the opponent. It is often used by inexperienced or young wizards in duelling. This curse can be found in Curses and Counter-Curses by Vindictus Viridian.',
            price: '7000',
            photo: generatePhoto(),
            deliverable : 'Petrificus Totalus',
            inventory: 5

        },
        {
            title: 'Shield from Evil',
            category: 'Protective enchantment', 
            description: ' A stronger version of the Shield Charm which protects a very large area against highly Dark Magic. It causes anything within the ranges of Dark Magic to rebound off the shield.',
            price: '8000',
            photo: generatePhoto(),
            deliverable: 'Protego horribilis',
            inventory: 10
        },

          {
            title: 'Launch Spell',
            category: 'Charm',
            description: 'Launches the target into the air and emits red light from the wand.',
            price: '7000',
            photo: 'http://placehold.it/400x400',
            deliverable : 'Alarte Ascendare',
            inventory: 5

        }

    ];
   
    var creatingProducts = products.map(function (productObj) {
        return Product.create(productObj);
    });

    return Promise.all(creatingProducts);

};

module.exports = seedProducts;













