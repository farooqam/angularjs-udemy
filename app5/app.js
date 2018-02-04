'use strict';

var app = angular.module('app1', []);

app.controller('mainController', ['$log', '$filter', function($log, $filter) {
    var self = this;
    
    self.onClick = function() {
        $log.info('Button clicked!');
    };
}]);