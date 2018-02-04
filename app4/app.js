'use strict';

var app = angular.module('app1', []);

app.controller('mainController', ['$log', '$filter', function($log, $filter) {
    var self = this;
    
    self.handle = '';

    self.toLowerCase = function(text) {
        return $filter('lowercase')(text);
    };

    self.handleLength = 5;

    self.handleIsValid = function() {
        return self.handle.length === self.handleLength;
    };

}]);