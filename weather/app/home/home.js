'use strict';

angular.module('weatherApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$log', 'ForecastService', function($log, ForecastService) {
  var self = this;
  $log.info('HomeController says hello!');

  self.city = '';

  self.getForecast = function() {
    $log.info(`HomeController calling ForecastService.getForecast(${self.city})`);
    ForecastService.getForecast(self.city);

  }
}]);