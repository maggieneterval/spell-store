app.factory('OrderFactory',function($http){
	var getData = function(response){
		return response.data;
	};
	return {

		// error handling should be done in the controller
		// You should just be returning the promises for the data, and then deal with the errors later

		fetchAll: function(filter){
			var condition = filter || {};
			return $http.get('/api/orders', {params: condition})
			.then(getData)
			.catch(console.error());
		},
		fetchOne: function(id){
			return $http.get('/api/orders/' +id)
			.then(getData)
			.catch(console.error());
		},
		destroy: function(id){
			return $http.delete('/api/orders/'+id)
			.then(getData)
			.catch(console.error());
		},
		add: function(order){
			return $http.post('/api/orders', order)
			.then(getData)
			.catch(console.error());
		},
		update: function(id, order){
			return $http.put('/api/orders/'+id, order)
			.then(getData)
			.catch(console.error());
		},
		getOrderProducts: function (id){
			return $http.get('/api/orders/products/' + id)
			.then(getData)
			.catch(console.error());
		},
		addToCart: function (currentUser, item) {
			return $http.put('/api/orders/cart', item)
			.then(getData)
			.catch(console.error());
		}
	}
})
