var db = require('../../server/db');
var OrderDetails = db.model('order_detail')

var seedOrderDetails = function () {
    var orderDetails = [
    	{ 
    		orderId: 1,
    		productId: 1,
    		quantity: 1,
    		price: 500
    	},

    	{
    		orderId: 2,
    		productId: 4,
    		quantity: 1,
    		price: 5000
    	},

    	{
    		orderId: 3,
    		productId: 6,
    		quantity: 1,
    		price: 7000
    	},

    	{
    		orderId: 4,
    		productId: 7,
    		quantity: 1,
    		price: 8000
    	},

    	{
    		orderId: 5,
    		productId: 2,
    		quantity: 1,
    		price: 1000
    	},

    	{
    		orderId: 6,
    		productId: 7,
    		quantity: 1,
    		price: 8000
    	},

    	{
    		orderId: 7,
    		productId: 3,
    		quantity: 1,
    		price: 3000
    	},

    	{
    		orderId: 8,
    		productId: 5,
    		quantity: 3,
    		price: 6000
    	},

    	{
    		orderId: 9,
    		productId: 2,
    		quantity: 9,
    		price: 1000
    	},

    	{
    		orderId: 10,
    		productId: 2,
    		quantity: 1,
    		price: 1000
    	}
       
    ];
   
    var creatingOrderDetails = orderDetails.map(function (orderDetailsObj) {
        return OrderDetails.create(orderDetailsObj);
    });

    return Promise.all(creatingOrderDetails);

};



module.exports = seedOrderDetails;