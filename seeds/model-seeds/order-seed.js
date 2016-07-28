var db = require('../../server/db');
var Order = db.model('order');

var seedOrders = function () {
    var orders = [
        {
            status: helpChoose('status'),
            order_type: 'cart',
            billing_address: '94 Hanover Drive, Titusville, FL 32780',
            shipping_address: '94 Hanover Drive, Titusville, FL 32780',
            shipping_status: helpChoose('shipping_status'),
            userId: 3
        },
        {
            status: helpChoose('status'),
            order_type: 'cart',
            billing_address: '542 Goldfield Court, Lafayette, IN 47905',
            shipping_address: '542 Goldfield Court, Lafayette, IN 47905',
            shipping_status: helpChoose('shipping_status'),
            userId: 1
        },
        {
            status: helpChoose('status'),
            order_type: 'cart',
            billing_address: '57 King Lane, Pomona, CA 91768',
            shipping_address: '57 King Lane, Pomona, CA 91768',
            shipping_status: helpChoose('shipping_status'),
            userId: 2
        },
        {
            status: helpChoose('status'),
            order_type: 'cart',
            billing_address: '4 South Edgewood St., Natick, MA 01760',
            shipping_address: '4 South Edgewood St., Natick, MA 01760',
            shipping_status: helpChoose('shipping_status'),
            userId: 2
        },
        {
            status: helpChoose('status'),
            order_type: 'cart',
            billing_address: '213 Roosevelt Drive, Dracut, MA 01826',
            shipping_address: '213 Roosevelt Drive, Dracut, MA 01826',
            shipping_status: helpChoose('shipping_status'),
            userId: 1
        },
        {
            status: helpChoose('status'),
            order_type: 'cart',
            billing_address: '971 Hilldale St., Macomb, MI 48042',
            shipping_address: '971 Hilldale St., Macomb, MI 48042',
            shipping_status: helpChoose('shipping_status'),
            userId: 1
        },
        {
            status: helpChoose('status'),
            order_type: 'cart',
            billing_address: '417 Grant Drive, Marion, NC 28752',
            shipping_address: '417 Grant Drive, Marion, NC 28752',
            shipping_status: helpChoose('shipping_status'),
            userId: 2
        },
        {
            status: helpChoose('status'),
            order_type: 'cart',
            billing_address: '38 Grandrose Ave. Spartanburg, SC 29301',
            shipping_address: '38 Grandrose Ave. Spartanburg, SC 29301',
            shipping_status: helpChoose('shipping_status'),
            userId: 1
        },
        {
            status: helpChoose('status'),
            order_type: 'cart',
            billing_address: '4 Pacific St., Pelham, AL 35124',
            shipping_address: '4 Pacific St., Pelham, AL 35124',
            shipping_status: helpChoose('shipping_status'),
            userId: 1
        },
        {
            status: helpChoose('status'),
            order_type: 'cart',
            billing_address: '263 Brickell Road, North Miami Beach, FL 33160',
            shipping_address: '263 Brickell Road, North Miami Beach, FL 33160',
            shipping_status: helpChoose('shipping_status'),
            userId: 3
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
    }else if(col === 'shipping_status'){
        options = ['pending', 'shipped'];
    }
    var index = Math.floor(Math.random()*2);
    return options[index];
}

module.exports = seedOrders;