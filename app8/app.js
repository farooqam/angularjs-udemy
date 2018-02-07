'use strict';

var app = angular.module('app1', ['ngRoute']);

app.controller('mainController', ['$log', function($log) {
    $log.info('Called mainController');

    var self = this;
}])
.controller('secondController', ['$log', function($log) {
    $log.info('Called secondController');

    var self = this;
}]);

app.config(function($routeProvider){

    $routeProvider.when('/main', {
        templateUrl: 'pages/main.html',
        controller: 'mainController as mainCtrl'
    })
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController as secondCtrl'
    });
});

