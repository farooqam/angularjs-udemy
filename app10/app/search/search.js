'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$log', function($log) {
  var self = this;
  
}])
.directive("searchResult", ['$log', function($log) {
    return {
        templateUrl: 'search/searchResult.html',
        replace: true
    };
}]);