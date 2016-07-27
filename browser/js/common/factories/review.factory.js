app.factory('ReviewFactory',function($http){
	var getData = function(response){
		return response.data;
	};
	return {
		getAll: function(){
			$http.get('/api/reviews')
			.then(getData)
			.catch(console.error())
		}
	}
})