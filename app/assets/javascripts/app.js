'use strict';

angular.module('todo', ['ngRoute', 'templates', 'homeController', 'todoServices', 'todoController'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'home/_home.html',
        controller: 'HomeCtrl'
      }).
      when('/todos/:id', {
        templateUrl: 'todo/_todo.html',
        controller: 'TodoCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);