'use strict';

angular.module('weatherApp.forecast', ['ngRoute', 'angular-momentjs'])

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
  self.forecast = ForecastService.getForecast(self.city);
}])

.service('ForecastService', ['$log', '$resource', function($log, $resource){
  var self = this;

  var _city = '';

  self.getForecast = function(city) {
    _city = city;
    let count = 2;
    let apiUrl = 'http://api.openweathermap.org/data/2.5/forecast';
    $log.info(`ForecastService city: ${_city}; count: ${count}; api url: ${apiUrl}`);
    
    let api = $resource(apiUrl);

    var forecast = api.get( {
      q: _city,
      mode: 'json',
      cnt: count,
      appId: '0bfd9c8ec382ac598e201a033426f6ef'
    });
 
    $log.info(forecast);

    return forecast;
  };

  self.getCity = function() {
    return _city;
  }

}])
.filter('convertTemp', [function() {
  return function(temp, mode) {
    if(mode === 'ktof') {
      return ((9/5)*(temp - 273)) + 32;
    }

    return temp;
  }
  }])
  .filter('prettyPrintTicks', [function() {
    return function(dt, asLocalTime) {
    
      var m = moment.unix(dt);

      if(!asLocalTime) {
        m = m.utc();
      }
      
      return m.format('dddd, MMMM Do YYYY');
    }
  }]);