'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$log', 'nameService', '$scope', function($log, nameService, $scope) {
  var self = this;
  self.text = nameService.getName();
  
  $scope.$watch(angular.bind(this, function() {
    return self.text;
  }), function(newValue, oldValue) {
      $log.info(`Old value (View2Ctrl): ${oldValue}; New value: ${newValue}`);
      nameService.setName(newValue);
  });
}]);