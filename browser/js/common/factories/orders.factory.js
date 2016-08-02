app.factory('OrderFactory',function($http){

	var getData = function(response){
		return response.data;
	};

	return {

		fetchAll: function(filter){
			var condition = filter || {};
			return $http.get('/api/orders', {params: condition})
			.then(getData);
		},

		fetchOne: function(id){
			return $http.get('/api/orders/' +id)
			.then(getData);
		},

		destroy: function(id){
			return $http.delete('/api/orders/'+id)
			.then(getData);
		},

		add: function(order){
			return $http.post('/api/orders', order)
			.then(getData);
		},

		update: function(id, order){
			return $http.put('/api/orders/'+id, order)
			.then(getData);
		},

		getOrderProducts: function (id){
			return $http.get('/api/orders/products/' + id)
			.then(getData);
		},

		addToCart: function (currentUser, item) {
			return $http.put('/api/orders/cart', item)
			.then(getData);
		},

		checkoutCart: function (checkoutForm) {
			return $http.put('/api/orders/checkout', checkoutForm)
			.then(getData);
		}
	}
})
