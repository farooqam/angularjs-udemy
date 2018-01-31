var app = angular.module('app1', ['ngResource']);

app.controller('mainController', ['$log', '$resource', function($log, $resource) {
    this.name = '';
    $log.log($resource);
}]);
