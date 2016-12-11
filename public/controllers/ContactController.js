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
  		console.log(e);
  	}
  }
  
  $scope.editCustomer = function(c){
    try{
      var customer = {_id:c._id, name:c.name, email:c.email, contact:c.contact};
      $scope.customer = customer;
    }
    catch(e){
      console.log(e);
    }
  }

  $scope.updateCustomer = function(){
    try{
      $http.put('/contacts', $scope.customer).then(function(resp){
        var customer =  $scope.customers.filter(function(obj){
          return obj._id == $scope.customer._id;
        });
        customer[0].name = resp.data.name;
        customer[0].email = resp.data.email;
        customer[0].contact = resp.data.contact;
      });
    }
    catch(e){
      console.log(e);
    }
  }


  $scope.removeCustomer = function(id){
    try{
      $http.delete('/contacts/'+id).then(function(resp){
        $scope.customers =  $scope.customers.filter(function(obj){
          return obj._id !=id;
        });
      });
    }
    catch(e){
      console.log(e);
    }
  }

}]);


