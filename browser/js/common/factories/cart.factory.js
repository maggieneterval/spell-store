app.factory('CartFactory', function($http, $rootScope){
	return {
		getOrder: function(){
			return $http.get('/api/orders/viewcart')
			.then(function(response){
				console.log(response.data)
				return response.data;
			});
		}
	}
});