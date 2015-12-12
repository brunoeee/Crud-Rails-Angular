angular.module('homeController', []).
controller('HomeCtrl', ['$scope', 'ToDo',
  function($scope, ToDo) {
	
    $scope.Todo = ToDo.query();
	
	$scope.addTodo = function(){
      
	  if(!$scope.newTodo === '') { return; }
	  ToDo.save({toDo: {todo: $scope.newTodo}}, function() {
		  
		 $scope.Todo = ToDo.query(); 
		  
	  });
      $scope.newTodo = '';
	
    };
	
	$scope.delTodo = function(_id){
		
		ToDo.remove({ id: _id }, function() {
			
			$scope.Todo = ToDo.query();
			
		});
    
	};
  }]);