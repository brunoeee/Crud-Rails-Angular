angular.module('todoServices', ['ngResource']).
factory('ToDo', ['$resource',
  function($resource){
    return $resource('/todos/:id', null, {'update': {method:'PUT'}}
	);
  }]);