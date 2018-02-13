'use strict';

angular.module('weatherApp.forecast', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {
    templateUrl: 'forecast/forecast.html',
    controller: 'ForecastController'
  });
}])

.controller('ForecastController', ['$log', function($log) {
  var self = this;
  $log.info('ForecastController says hello!');
}]);