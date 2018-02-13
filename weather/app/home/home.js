'use strict';

angular.module('weatherApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$log', function($log) {
  var self = this;
  $log.info('HomeController says hello!');
}]);