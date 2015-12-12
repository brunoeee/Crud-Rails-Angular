angular.module('todoController', []).
controller('TodoCtrl', ['$scope', 'ToDo','$routeParams', '$location',
  function($scope, ToDo, $routeParams, $location) {
	
	var td = ToDo.get({id: $routeParams.id}, function() {
    
      $scope.newTodo = td.todo;	
   
    });
    	
	$scope.updateTodo = function(){
      
	  if(!$scope.newTodo === '') { return; }
		
		ToDo.update({ id: $routeParams.id}, {todo: $scope.newTodo}, function() {
		  
		  $location.path('/');
		  
	    });
      
    };
   
   
	
	 
	
	
  }]);