var db = require('../../server/db');
var OrderDetails = db.model('order_detail')

var seedOrderDetails = function () {
    var orderDetails = [
    	{ 
    		order_id: 1,
    		product_id: 1,
    		quantity: 1,
    		price: 500
    	},

    	{
    		order_id: 2,
    		product_id: 4,
    		quantity: 1,
    		price: 5000
    	},

    	{
    		order_id: 3,
    		product_id: 6,
    		quantity: 1,
    		price: 7000
    	},

    	{
    		order_id: 4,
    		product_id: 7,
    		quantity: 1,
    		price: 8000
    	},

    	{
    		order_id: 5,
    		product_id: 2,
    		quantity: 1,
    		price: 1000
    	},

    	{
    		order_id: 6,
    		product_id: 7,
    		quantity: 1,
    		price: 8000
    	},

    	{
    		order_id: 7,
    		product_id: 3,
    		quantity: 1,
    		price: 3000
    	},

    	{
    		order_id: 8,
    		product_id: 5,
    		quantity: 3,
    		price: 6000
    	},

    	{
    		order_id: 9,
    		product_id: 2,
    		quantity: 9,
    		price: 1000
    	},

    	{
    		order_id: 10,
    		product_id: 2,
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