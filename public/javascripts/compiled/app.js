// Generated by CoffeeScript 1.6.2
(function() {
  angular.module('habits', ['ngRoute', 'habits.filters', 'habits.services', 'habits.directives', 'habits.controllers']).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'partials/squares.html',
        controller: 'Dashboard'
      });
    }
  ]);

}).call(this);