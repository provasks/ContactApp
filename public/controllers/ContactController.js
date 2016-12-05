/*
var app = anguler.module('ContactApp',[]);
app.controller('ContactController',['$scope','$http', function($scope,$http){
	console.log('Contact controller is working');
}]);
*/
var contactApp = angular.module('contactApp',[]);

contactApp.controller('ContactController', ['$scope', '$http', function($scope, $http) {
  
  $http.get('/contacts').then(function(resp){
  	$scope.customers = resp.data;
  });

  $scope.addCustomer = function(){
  	try{
 	  $http.post('/contacts',$scope.customer).then(function(resp){
	  	$scope.customers.push(resp.data);
	  });

  	}
  	catch(e){
  		debugger;
  	}

  }
  
}]);