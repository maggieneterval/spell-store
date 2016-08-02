var expect = require('chai').expect;
var Sequelize = require('sequelize');
var db = require('../../../server/db');
var supertest = require('supertest');


describe('Order Model', function () {

    var app, OrderDetail, agent;


    beforeEach('Sync DB', function () {
        return db.sync({force: true});
    });

    beforeEach('Create app', function () {
        app = require('../../../server/app')(db);
        OrderDetail = db.model('order_detail');
        Order = db.model('order');
        Product = db.model('product');
        User = db.model('user');
        agent = supertest.agent(app);
    });

    describe('CRUD orders', function () {
    	var order = 
	    	{
				id: 11,
		        status: 'paid',
		        billing_address: '41 Rockville Drive Holland, MI 49423',
		        shipping_address: '41 Rockville Drive Holland, MI 49423',
		        shipping_status: 'pending',
		        products: [
				    {
					  	id: 13,
					  	title: "setFire",
			    		category: "dark",
			    		price: 4000,
			    		description: "really dangerous magic that will set anything on fire",
			    		inventory: 1
				}]
			}

        it('Total Getter Test Test and creation of object with products', function (done) {

        	Order.create(order, 
					{
					  include: [ Product ]
					})
			.then(function(created){
				expect(created.id).to.equal(11);
				expect(created.products).to.be.an.instanceOf(Array);
				expect(created.products[0].title).to.equal("setFire");
				return OrderDetail.findAll()
			})
			.then(function(foundOrderDetail){
				return foundOrderDetail[0].update({price: 4000, quantity: 5})
			})
			.then(function(updated){
				 expect(updated.getTotal).to.equal(20000);
			})
			done();
        });      
    })

})