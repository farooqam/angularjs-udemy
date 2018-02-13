'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.search',
  'myApp.auth'  
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.service('nameService', function() {
  var self = this;
  var name = 'Farooq Mahmud';

  self.getName = function() {
    return name;
  };

  self.setName = function(newName) {
    name = newName;
  };

});
