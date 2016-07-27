var db = require('../../server/db');
var Review = db.model('review');

var seedReviews = function () {

    var reviews = [
        {
            content: 'The Amplifying Charm is amazing!',
            rating: 5,
            userId: 1,
            productId: 1
        },
        {
            content: 'The Amplifying Charm is just okay. Not my favorite charm.',
            rating: 2,
            userId: 2,
            productId: 1
        },
        {
            content: 'One of my faovrite transfigurations of all time. Works like a charm.',
            rating: 4,
            userId: 1,
            productId: 2
        },
        {
            content: 'The Stickfast Hex almost ruined my marriage. Proceed with caution.',
            rating: 1,
            userId: 1,
            productId: 3
        },
        {
            content: 'This jinx is HILARIOUS. Such a hit at parties.',
            rating: 5,
            userId: 2,
            productId: 4
        },
        {
            content: 'I am ADDICTED to this jinx. Love it.',
            rating: 4,
            userId: 1,
            productId: 4
        },
        {
            content: 'I am a teacher, and this spell changed my life.',
            rating: 5,
            userId: 1,
            productId: 5
        },
        {
            content: 'My teacher now uses this spell, and class runs a lot more smoothly now.',
            rating: 4,
            userId: 2,
            productId: 5
        },
        {
            content: 'The Muggles have no idea I use this spell as a professional wrestler!',
            rating: 5,
            userId: 1,
            productId: 6
        },
        {
            content: 'I am truly paranoid about the rise of He Who Must Not Be Named, so this spell is a must for my home, office, etc.',
            rating: 5,
            userId: 1,
            productId: 7
        },
        {
            content: 'This spell does NOT work against Voldemort. Beware.',
            rating: 1,
            userId: 2,
            productId: 7
        }
    ];

    var creatingReviews = reviews.map(function (reviewObj) {
        return Review.create(reviewObj);
    });

    return Promise.all(creatingReviews);

};

module.exports = seedReviews;
