'use strict';

var app = angular.module('app1', []);

app.controller('mainController', ['$log', '$filter', function($log, $filter) {
    var self = this;
    
    self.handle = '';

    self.toLowerCase = function(text) {
        return $filter('lowercase')(text);
    };

    self.handleLength = 5;

    self.showWarning = function() {
        return self.handle.length < self.handleLength;
    };

    self.showDanger = function() {
        return self.handle.length > self.handleLength;
    };

    let rules = [
        {'name': `Must be ${self.handleLength} characters.`},
        {'name': 'Must be unique.'},
        {'name': 'Must be memorable.'}
    ];

    self.getRules = function() {
        return rules;
    }
}]);