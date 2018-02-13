'use strict';

angular.module('weatherApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$log', function($log) {
  var self = this;
  $log.info('View1 says hello!');
}]);