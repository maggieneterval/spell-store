/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Product = db.model('product');
var Promise = require('sequelize').Promise;

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];


    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);

};

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
            photo: 'http://placehold.it/400x400',
            inventory: 20

        },
        {
            title: 'Fire-Making Spell',
            category: 'Transfiguration',
            description: 'A form of Conjuration that can be used to conjure a jet of orange and red flame, thereby setting things alight',
            price: 1000,
            deliverable: 'Incendio',
            photo: 'http://placehold.it/400x400',
            inventory: 20

        },
        {
            title: 'Stickfast Hex',
            category: 'Hex',
            price: 3000,
            description: 'A hex that was used to make the target\'s shoes stick to the ground.',
            deliverable: 'Colloshoo',
            photo: 'http://placehold.it/400x400',
            inventory: 35
        },
        {
            title: 'The Dancing Feet Spell',
            category: 'Jinx',
            description: 'The Dancing Feet spell has its origins in ancient Italy, but is best remembered for its improper usage by Warlock Zaccaria Innocenti who is credited with conjuring a dance within Mt. Vesuvius in 79 AD. It is used to force another person\'s legs to begin dancing uncontrollably. The spell requires a clear, unobstructed view of the target to be successfully cast.',
            price: '5000',
            deliverable: 'Tarantallegra',
            inventory: 10
        },
        {
            title: 'Throat Clearing Spell',
            category: 'Healing Spell',
            description: 'A healing spell that clears the target person\'s throat if it is blocked; an example would be if one was choking.',
            price: '6000',
            deliverable: 'Anapneo',
            inventory: 5
        },
        {
            title: 'Body Freezing Spell',
            category: 'Curse',
            description: 'The Full Body-Bind Curse also known as the Body Freezing Spell is a curse that paralyses the opponent. It is often used by inexperienced or young wizards in duelling. This curse can be found in Curses and Counter-Curses by Vindictus Viridian.',
            price: '7000',
            deliverable : 'Petrificus Totalus',
            inventory: 5

        },
        {
            title: 'Shield from Evil',
            category: 'Protective enchantment', 
            description: ' A stronger version of the Shield Charm which protects a very large area against highly Dark Magic. It causes anything within the ranges of Dark Magic to rebound off the shield.',
            price: '8000',
            deliverable: 'Protego horribilis',
            inventory: 10
        }
    ];

   
    var creatingProducts = products.map(function (productObj) {
        return Product.create(productObj);
    });

    return Promise.all(creatingProducts);

};

db.sync({ force: true })
    .then(function () {
        return seedUsers();
    })
    .then(function () {
        return seedProducts();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
