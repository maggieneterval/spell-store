app.factory('ReviewFactory',function($http){

	var getData = function(response){
		return response.data;
	};

	return {

		fetchAll: function(filter){
			var condition = filter || {};
			return $http.get('/api/reviews', {params: condition})
			.then(getData);
		},

		fetchOne: function(id){
			return $http.get('/api/reviews/' +id)
			.then(getData);
		},

		destroy: function(id){
			return $http.delete('/api/reviews/'+id)
			.then(getData)
		},

		add: function(review){
			return $http.post('/api/reviews/', review)
			.then(getData);
		},

		update: function(id, review){
			return $http.put('/api/reviews/'+id, review)
			.then(getData);
		}
	}
})
