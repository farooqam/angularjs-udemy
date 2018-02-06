'use strict';

var app = angular.module('app1', []);

app.controller('mainController', ['$log', '$filter', '$http', function($log, $filter, $http) {
    var self = this;
    
    self.onClick = function() {
        $log.info('Button clicked!');
    };

    var rules = {};
    self.gotRules = false;

    $http({
        method : "GET",
        url : "http://demo1621533.mockable.io/rules"
    }).then(function mySuccess(response) {
        $log.info(response.data);
        rules = response.data;
        self.gotRules = true;
    }, function myError(response) {
        $log.error(response.statusText);
    });

    self.getRules = function() {
        return rules;
    };

}]);