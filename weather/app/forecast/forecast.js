'use strict';

angular.module('weatherApp.forecast', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {
    templateUrl: 'forecast/forecast.html',
    controller: 'ForecastController'
  });
}])

.controller('ForecastController', ['$log', 'ForecastService', function($log, ForecastService) {
  var self = this;

  self.city = ForecastService.getCity();
  $log.info(`ForecastController city: ${self.city}`);

}])

.service('ForecastService', ['$log', function($log){
  var self = this;

  var _city = '';

  self.getForecast = function(city) {
    _city = city;
    $log.info(`ForecastService city: ${_city}`);
  };

  self.getCity = function() {
    return _city;
  }

}]);