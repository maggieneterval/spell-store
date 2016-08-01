app.factory('ReviewFactory',function($http){
	var getData = function(response){
		return response.data;
	};
	return {
		fetchAll: function(filter){
			var condition = filter || {};
			return $http.get('/api/reviews', {params: condition})
			.then(getData)
			.catch(console.error());
		},
		fetchOne: function(id){
			return $http.get('/api/reviews/' +id)
			.then(getData)
			.catch(console.error());
		},
		destroy: function(id){
			return $http.delete('/api/reviews/'+id)
			.then(getData)
			.catch(console.error());
		},
		add: function(review){
			return $http.post('/api/reviews/', review)
			.then(getData)
			.catch(console.error());
		},
		update: function(id, review){
			return $http.put('/api/reviews/'+id, review)
			.then(getData)
			.catch(console.error());
		}
	}
})
