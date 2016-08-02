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
            category: 'Charms',
            description: ' A charm that can be used to amplify the targeted sound, be it a person\'s voice or a piece of equipment.',
            price: 500,
            deliverable: 'Sonorus',
            photo: generatePhoto(),
            inventory: 20

        },
        {
            title: 'Fire-Making Spell',
            category: 'Transfigurations',
            description: 'A form of Conjuration that can be used to conjure a jet of orange and red flame, thereby setting things alight',
            price: 1000,
            deliverable: 'Incendio',
            photo: generatePhoto(),
            inventory: 20

        },
        {
            title: 'Stickfast Hex',
            category: 'Hexes',
            price: 3000,
            description: 'A hex that was used to make the target\'s shoes stick to the ground.',
            deliverable: 'Colloshoo',
            photo: generatePhoto(),
            inventory: 35
        },
        {
            title: 'The Dancing Feet Spell',
            category: 'Jinxes',
            description: 'The Dancing Feet spell has its origins in ancient Italy, but is best remembered for its improper usage by Warlock Zaccaria Innocenti who is credited with conjuring a dance within Mt. Vesuvius in 79 AD. It is used to force another person\'s legs to begin dancing uncontrollably. The spell requires a clear, unobstructed view of the target to be successfully cast.',
            price: '5000',
            photo: generatePhoto(),
            deliverable: 'Tarantallegra',
            inventory: 10
        },
        {
            title: 'Throat Clearing Spell',
            category: 'Healing Spells',
            description: 'A healing spell that clears the target person\'s throat if it is blocked; an example would be if one was choking.',
            price: '6000',
            photo: generatePhoto(),
            deliverable: 'Anapneo',
            inventory: 5
        },
        {
            title: 'Body Freezing Spell',
            category: 'Curses',
            description: 'The Full Body-Bind Curse also known as the Body Freezing Spell is a curse that paralyses the opponent. It is often used by inexperienced or young wizards in duelling. This curse can be found in Curses and Counter-Curses by Vindictus Viridian.',
            price: '7000',
            photo: generatePhoto(),
            deliverable : 'Petrificus Totalus',
            inventory: 5

        },
        {
            title: 'Shield from Evil',
            category: 'Protective Enchantments', 
            description: ' A stronger version of the Shield Charm which protects a very large area against highly Dark Magic. It causes anything within the ranges of Dark Magic to rebound off the shield.',
            price: '8000',
            photo: generatePhoto(),
            deliverable: 'Protego horribilis',
            inventory: 10
        },

          {
            title: 'Rocket Spell',
            category: 'Charms',
            description: 'Launches the target into the air and emits red light from the wand.',
            price: '7000',
            photo: generatePhoto(),
            deliverable : 'Alarte Ascendare',
            inventory: 5

        },

         {
            title: 'Stop Momentum Spell',
            category: 'Charms',
            description: 'The incantation of a charm that can be used by a witch or wizard to slow the velocity of an object. It is taught in second year Charms class at Hogwarts School of Witchcraft and Wizardry.',
            price: '7000',
            photo: generatePhoto(),
            deliverable : 'Arresto Momentum',
            inventory: 20

        },

         {
            title: 'Avian Spell',
            category: 'Transfigurations',
            description: 'A transforming spell that could be used to change the target into a bird, flock of birds or occasionally a flock of bats with a vivid flash of blue light.',
            price: '7000',
            photo: generatePhoto(),
            deliverable : 'Avifors',
            inventory: 10

        },

        {
            title: 'Bird-Conjuring Charm',
            category: 'Charms',
            description: 'A spell that conjures a flock of birds. This charm is an advanced form of Transfiguration, taught at N.E.W.T.-level at Hogwarts School of Witchcraft and Wizardry. The birds are shot from the caster\'s wand tip, accompanied by a loud blast that sounds like a gun being fired and smoke.',
            price: '6000',
            photo: generatePhoto(),
            deliverable : 'Avis',
            inventory: 10

        },

           {
            title: 'Explosion Spell',
            category: 'Charms',
            description: 'A charm used to provoke small explosions; one use for this explosion is to blast open sealed doors or to blow bars off of windows.',
            price: '5000',
            photo: generatePhoto(),
            deliverable : 'Bombarda',
            inventory: 10

        },

         {
            title: 'Large Explosion Spell',
            category: 'Charms',
            description: 'A charm used to provoke large, violent explosions capable of demolishing entire walls. This is a stronger variation of the traditional Explosion Charm.',
            price: '6000',
            photo: generatePhoto(),
            deliverable : 'Bombarda Maxima',
            inventory: 5

        },

        {
            title: 'Disarming Charm',
            category: 'Charms',
            description: 'A defensive charm which forced the victim to release whatever they were holding at the time. It is common to see this spell used in duels, to make an opponent release their wand. t is not known precisely who created the Disarming Charm. Some wizarding historians claim that it may have been invented by Merlin himself, others claim that its first widespread use was in Madagascar in the 11th century. Even if any of this is true, the fact remains that it was not very popular until 1379, when Elizabeth Smudgling — the most likely inventor, in the opinion of Miranda Goshawk — used it in a duelling contest in Dartmoor.It became Harry Potter\'s signature spell, and it notably caused the death of Lord Voldemort during the Battle of Hogwarts by rebounding his Killing Curse.',
            price: '10000',
            photo: generatePhoto(),
            deliverable : 'Bombarda Maxima',
            inventory: 5

        },

         {
            title: 'Duck Spell',
            category: 'Transfigurations',
            description: 'A transfiguration spell that transforms an organism into a duck. Third years and above were able to cast the spell. The caster will slash their wand downward to point at the target; a banana-yellow jet of light will shoot from the tip, with what appears to be a duck made entirely of brilliant yellow light soaring in front. When it hits the target, there is a burst of yellow light and when said light fades, the target is in the shape of a duck.',
            price: '30000',
            photo: generatePhoto(),
            deliverable : 'Ducklifors',
            inventory: 10

        },

         {
            title: 'Bubble Jinx',
            category: 'Jinxes',
            description: 'A jinx that entraps the targeted witch or wizard, or indeed any target, in a very large bubble that cannot be popped by physical force.',
            price: '30000',
            photo: generatePhoto(),
            deliverable : 'Ebublio',
            inventory: 10

        },

        {
            title: 'Engorement Charm',
            category: 'Charms',
            description: 'A charm that causes the target to swell immensely. If the caster attempts to engorge the target beyond a certain point it will violently explode. Although this spell is safe to use on animals, it is not recommended until the counter-charm has been perfected. It appears as a circle of icy blue light emanating from the tip of the wand, much like a torch. Anything within this circle will grow exponentially, bouncing and shivering',
            price: '20000',
            photo: generatePhoto(),
            deliverable : 'Engorgio',
            inventory: 10

        },

        {
            title: 'Bonding Charm',
            category: 'Charms',
            description: 'The targets of this spell become molecularly bonded to each other so that they are glued together. If one were to attempt separation, the surface one of the targets would hold on to the other object, stretching and sticking to that object like chewing gum. This spell may be a variation of the Permanent Sticking Charm, Sticking Charm or Fixing Charm, or even the actual incantation for one of them, even though the Harry Potter Trading Card Game incorrectly labels it as a Transfiguration spell. The most likely of which, would be the Sticking Charm.',
            price: '30000',
            photo: generatePhoto(),
            deliverable : 'Epoximise',
            inventory: 10

        },

         {
            title: 'Explosion Curse',
            category: 'Curses',
            description: 'A curse used to produce immense explosions, blasting the target apart with a burst of blue light; it has enough force to throw people into walls.',
            price: '110000',
            photo: generatePhoto(),
            deliverable : 'Expulso',
            inventory: 10

        },

          {
            title: 'Bone Mending Spell',
            category: 'Healing Spells',
            description: 'is a spell used to bandage and splint broken bones. It apparently eases pain as well. It was used by Remus Lupin in the spring of 1994 on Ron Weasley to support Wesley\'s broken leg',
            price: '150000',
            photo: generatePhoto(),
            deliverable : 'Ferula',
            inventory: 10

        },

        {
            title: 'Four-Point Spell',
            category: 'Charms',
            description: 'A spell that causes the caster\'s wand to behave as if it were a compass and point North.',
            price: '110000',
            photo: generatePhoto(),
            deliverable : 'Point me',
            inventory: 10

        },

         {
            title: 'Levitation Spell',
            category: 'Charms',
            description: 'a charm used to make objects fly, or levitate,[1] taught to first years at Hogwarts School of Witchcraft and Wizardry. There are a number of lesser variations of the Levitation Charm, such as the Hover Charm, the Rocket Charm and the Floating Charm, just to name a few, but the Levitation Charm remains the original and best. Created by  Jarleth Hobart in 1544.',
            price: '5000',
            photo: generatePhoto(),
            deliverable : 'Wingardium Leviosa',
            inventory: 50

        },

        {
            title: 'Patronus Charm',
            category: 'Protective Enchantments',
            description: 'The Patronus Charm is the most famous and one of the most powerful defensive charms known to wizardkind. It is an immensely complicated and extremely difficult spell that evokes a partially-tangible positive energy force known as a Patronus (pl. Patronuses) or spirit guardian. It is the primary protection against Dementors and Lethifolds, against which there is no other defense.',
            price: '110000',
            photo: generatePhoto(),
            deliverable : 'Expecto Patronum',
            inventory: 10

        },

         {
            title: 'Animation Spell',
            category: 'Transfigurations',
            description: 'A transfiguration spell used to bring life to those artefacts that had, previously, been inanimate and unmoving. The target\'s movements can be controlled by the caster of the spell.',
            price: '130000',
            photo: generatePhoto(),
            deliverable : 'Piertotum Locomotor',
            inventory: 10

        },

         {
            title: 'Fish Spell',
            category: 'Transfigurations',
            description: 'A transfiguration spell that can be used to transform the target into a fish. Professor Horace Slughorn described it as being beautiful.',
            price: '5000',
            photo: generatePhoto(),
            deliverable : 'Piscifors',
            inventory: 5

        },

        {
            title: 'Portkey Making Spell',
            category: 'Charms',
            description: 'A charm used to transform an ordinary object into a Portkey. Since creating Portkeys are restricted by the Ministry of Magic, the usage of this spell also requires permission. This was the subject of a question of the Theory of Charms O.W.L. in 1996. Immediately after casting, the target will glow bright blue, as the Portkey does when it is ready, but after a few seconds it will return to its normal colour.',
            price: '12000',
            photo: generatePhoto(),
            deliverable : 'Portus',
            inventory: 5

        },

        {
            title: 'Fowl Spell',
            category: 'Jinxes',
            description: 'A transforming jinx used to transfigure the target into a chicken or a goose; in particular, Erklings appear to be rather vulnerable to this jinx. This jinx was used in 1754 by an unknown wizard on Silvio Astolfi, an Italian broom racer.',
            price: '6000',
            photo: generatePhoto(),
            deliverable : 'Pullus',
            inventory: 5

        },

         {
            title: 'Quill Spell',
            category: 'Transfigurations',
            description: 'A transforming spell that transfigures the target into a quill; it is effective on forks. Gregory Goyle\'s fork was the victim of this spell sometime from September 1991 to June 1993, much to his surprise and outrage.',
            price: '6000',
            photo: generatePhoto(),
            deliverable : 'Scribblifors',
            inventory: 5

        },

         {
            title: 'Hair Loss Curse',
            category: 'Curses',
            description: 'a curse that removes the victim\'s hair or headdress.',
            price: '6000',
            photo: generatePhoto(),
            deliverable : 'Calvorio',
            inventory: 10

        },

        {
            title: 'Teeth Growing Hex',
            category: 'Hexes',
            description: 'A hex which causes the teeth to elongate at a grotesque, alarming rate. The Shrinking Charm can be used to counteract this spell.',
            price: '8000',
            photo: generatePhoto(),
            deliverable : 'Densaugeo',
            inventory: 10

        },

        {
            title: 'Horn Growing Hex',
            category: 'Hexes',
            description: 'A hex that causes the target to grow antlers. Gilbert Wimple from the Committee on Experimental Charms presumably had this spell used on him, as he had large horns growing from his head before the 1994 Quidditch World Cup.',
            price: '1000',
            photo: generatePhoto(),
            deliverable : 'Anteoculatia',
            inventory: 10

        },

        {
            title: 'Tickling Hex',
            category: 'Hexes',
            description: 'A is a hex that tickles and weakens the target. It manifested itself in purple, hand-shaped ribbons of light that wrapped around the target and tickled them.',
            price: '18000',
            photo: generatePhoto(),
            deliverable : 'Titillando',
            inventory: 10

        },

        {
            title: 'Impediment Jinx',
            category: 'Jinxes',
            description: 'A jinx that slows the target. Its effect is only temporary, lasting about ten seconds. Although it is capable of freezing a wasp in mid-air, it is ineffective against lethifolds. It was also ineffective against Acromantula (or some variant of giant spider, anyway) and Blast-Ended Skrewts unless it happens to hit them on their underbellies, which have no protective armour. The jinx will usually simply immobilize a target, it can also be used to throw a target backward or simply decrease the velocity of the victim\'s movement, and can also levitate them.',
            price: '15000',
            photo: generatePhoto(),
            deliverable : 'Impedimenta',
            inventory: 10

        },

        {
            title: 'Jelly-Leg Jinx',
            category: 'Jinxes',
            description: 'A spell that causes the victim\'s legs to collapse. This curse is covered in Curses and Counter-Curses by Professor Vindictus Viridian.',
            price: '15000',
            photo: generatePhoto(),
            deliverable : 'Locomotor Wibbly',
            inventory: 10
        },

        {
            title: 'Pumpkin Head Jinx',
            category: 'Jinxes',
            description: 'A jinx that encases the victim\'s head in a pumpkin, although it appears to those watching to transform the victim\'s head into a pumpkin. The pumpkin can be shattered to free the victim, or can fall apart on its own after a short time.',
            price: '13000',
            photo: generatePhoto(),
            deliverable : 'Melofors',
            inventory: 10
        },

        {
            title: 'Worm Jinx',
            category: 'Jinxes',
            description: 'A transforming jinx used to transfigure things into worms. Vampyr Mosps are especially susceptible to this spell, and any spell cast on them whilst they are in their transformed state will cause them to explode and produce certain candies.',
            price: '9000',
            photo: generatePhoto(),
            deliverable : 'Vermiculus',
            inventory: 10
        },

          {
            title: 'Knockback Jinx',
            category: 'Jinxes',
            description: 'A jinx that can be used to physically repel an opponent, knock away an object, blast apart fragile objects and active magically charmed switches. The Knockback Jinx feels like a blow to the chest, knocking its victim back, along with "a loud bang." The Knockback Jinx can be rebounded to its caster by means of the Shield Charm, as many other spells can, or simply dodged.',
            price: '9500',
            photo: generatePhoto(),
            deliverable : 'Flipendo',
            inventory: 10
        },

        {
            title: 'Curse of the Bogies',
            category: 'Curses',
            description: 'A curse that gives the recipient a strong cold, that can make him or her collapse if not treated, as well as an extremely runny nose. No further casts of this curse have any additional effect on the target, except the Tria version, but if the Duo or Tria modifiers are used in addition to the Uno variation, then the version of the spell with the highest power will take effect.',
            price: '20000',
            photo: generatePhoto(),
            deliverable : 'Mucus ad Nauseam',
            inventory: 10
        },

         {
            title: 'Doubling Curse',
            category: 'Curses',
            description: 'A spell used to duplicate an object, creating an exact replica of the target entity. It can also be used to bewitch an object into multiplying repeatedly when touched. The Doubling Charm was invented by a pair of reclusive twin witches, Helixa and Syna Hyslop, who used it to create duplicates of every item inside their mansion, in which they lived together their whole lives. After their deaths, their relatives finally learned of this practise, discovering two, duplicated sets of hand-written instructions for the spell, one left by each twin. There was much debate over whether a copy created with the Gemino Curse held the same value as the original, as the two items were impossible to tell apart at first, being identical to one another. However, over time, the copy tended to rot or tarnish more quickly than the original, making it possible to identify eventually.',
            price: '23000',
            photo: generatePhoto(),
            deliverable : 'Gemino',
            inventory: 10
        },

        {
            title: 'Mending Spell',
            category: 'Healing Spells',
            description: 'A healing spell that heals relatively minor injuries such as broken noses and split lips.',
            price: '10000',
            photo: generatePhoto(),
            deliverable : 'Episkey',
            inventory: 10
        },        

        {
            title: 'Magical Ailment Reversal Spell',
            category: 'Healing Spells',
            description: 'A healing spell that reverts minor magically-induced ailments, such as paralysis and poisoning.',
            price: '8000',
            photo: generatePhoto(),
            deliverable : 'Reparifors',
            inventory: 10
        }, 

          {
            title: 'Gash Healing Spell',
            category: 'Healing Spells',
            description: 'A healing spell and counter-curse to the Sectumsempra Spell, both of which were invented by Professor Severus Snape under his alias of "Half-Blood Prince". For maximum effect of the spell, the incantation had to be repeated thrice; firstly slowing the flow of blood to prevent death by exsanguination; the second to clear residue and begin to heal the wounds; and the third to fully knit the wounds, although dittany had to be applied to prevent scarring.',
            price: '11000',
            photo: generatePhoto(),
            deliverable : 'Vulnera Sanentur',
            inventory: 10
        }, 

        {
            title: 'Muggle-Repelling Spell',
            category: 'Protective Enchantments',
            description: 'A spell that repells Muggles from an area. "Muggle-Repelling Charms on every inch of it. Every time Muggles have got anywhere near here all year, they\'ve suddenly remembered urgent appointments and had to dash away again." —Arthur Weasley',
            price: '19000',
            photo: generatePhoto(),
            deliverable : 'Repello Muggletum',
            inventory: 10
        },

        {
            title: 'Hex Deflection',
            category: 'Protective Enchantments',
            description: 'A defensive spell which presumably deflects hexes from an area.',
            price: '6000',
            photo: generatePhoto(),
            deliverable : 'Salvio hexia',
            inventory: 10
        },

        {
            title: 'Muffling Spell',
            category: 'Protective Enchantments',
            description: 'A spell used to fill the ears of any person in the vicinity of the caster with an unidentifiable buzzing sound so as to allow conversing without being overheard. The spell was invented by Severus Snape and recorded during his time as a student at Hogwarts School of Witchcraft and Wizardry.',
            price: '5000',
            photo: generatePhoto(),
            deliverable : 'Muffliato',
            inventory: 10
        }

    ];
   
    var creatingProducts = products.map(function (productObj) {
        return Product.create(productObj);
    });

    return Promise.all(creatingProducts);

};

module.exports = seedProducts;