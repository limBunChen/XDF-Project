angular.module('Service',[])
.service('getData',['$http','$rootScope',function($http,$rootScope){
	return{
		"getMenu" : function(){
			$http.get('js/schoolData.json', {})
			.then(function(response){
				
				$rootScope.$broadcast('myData',response.data)
			},function(error){
				console.log(error)
			})
		}

}
	
}])