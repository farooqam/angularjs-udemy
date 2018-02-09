'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$log', 'nameService', function($log, nameService) {
  var self = this;
  var name = nameService.getName();
  $log.info(name);
  self.text = `Name is '${name.name}' with length '${name.length}'.`;
  
}]);