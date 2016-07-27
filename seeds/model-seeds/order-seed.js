var db = require('../../server/db');
var Order = db.model('order');

var seedOrders = function () {
    var orders = [
        {
            status: helpChoose('status'),
            order_type: helpChoose('order_type'),
            shipping_address: '94 Hanover Drive, Titusville, FL 32780',
            shipping_status: helpChoose('shipping_status'),
            purchaser_user: 1,
            target_user: 2
        },
        {
            status: helpChoose('status'),
            order_type: helpChoose('order_type'),
            shipping_address: '542 Goldfield Court, Lafayette, IN 47905',
            shipping_status: helpChoose('shipping_status'),
            purchaser_user: 2,
            target_user: 1
        },
        {
            status: helpChoose('status'),
            order_type: helpChoose('order_type'),
            shipping_address: '57 King Lane, Pomona, CA 91768',
            shipping_status: helpChoose('shipping_status'),
            purchaser_user: 1,
            target_user: 2
        },
        {
            status: helpChoose('status'),
            order_type: helpChoose('order_type'),
            shipping_address: '4 South Edgewood St., Natick, MA 01760',
            shipping_status: helpChoose('shipping_status'),
            purchaser_user: 2,
            target_user: 1
        },
        {
            status: helpChoose('status'),
            order_type: helpChoose('order_type'),
            shipping_address: '213 Roosevelt Drive, Dracut, MA 01826',
            shipping_status: helpChoose('shipping_status'),
            purchaser_user: 1,
            target_user: 2
        },
        {
            status: helpChoose('status'),
            order_type: helpChoose('order_type'),
            shipping_address: '971 Hilldale St., Macomb, MI 48042',
            shipping_status: helpChoose('shipping_status'),
            purchaser_user: 2,
            target_user: 1
        },
        {
            status: helpChoose('status'),
            order_type: helpChoose('order_type'),
            shipping_address: '417 Grant Drive, Marion, NC 28752',
            shipping_status: helpChoose('shipping_status'),
            purchaser_user: 1,
            target_user: 2
        },
        {
            status: helpChoose('status'),
            order_type: helpChoose('order_type'),
            shipping_address: '38 Grandrose Ave. Spartanburg, SC 29301',
            shipping_status: helpChoose('shipping_status'),
            purchaser_user: 2,
            target_user: 1
        },
        {
            status: helpChoose('status'),
            order_type: helpChoose('order_type'),
            shipping_address: '4 Pacific St., Pelham, AL 35124',
            shipping_status: helpChoose('shipping_status'),
            purchaser_user: 1,
            target_user: 2
        },
        {
            status: helpChoose('status'),
            order_type: helpChoose('order_type'),
            shipping_address: '263 Brickell Road, North Miami Beach, FL 33160',
            shipping_status: helpChoose('shipping_status'),
            purchaser_user: 2,
            target_user: 1
        }
    ];
   
    var creatingOrders = orders.map(function (orderObj) {
        return Order.create(orderObj);
    });

    return Promise.all(creatingOrders);

};

function helpChoose(col){
    var options;
    if(col === 'status'){
        options = ['pending','complete'];
    }else if (col === 'order_type'){
        options = ['wishlist', 'cart'];
    }else if(col === 'shipping_status'){
        options = ['pending', 'shipped'];
    }
    var index = Math.floor(Math.random()*2);
    return options[index];
}

module.exports = seedOrders;