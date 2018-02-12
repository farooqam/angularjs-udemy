'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$log', 'nameService', '$scope', function($log, nameService, $scope) {
  var self = this;
  self.text = nameService.getName();

  $scope.$watch(angular.bind(this, function() {
    return self.text;
  }), function(newValue, oldValue) {
      $log.info(`Old value (View1Ctrl): ${oldValue}; New value: ${newValue}`);
      nameService.setName(newValue);
  });
}]);