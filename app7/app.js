'use strict';

var app = angular.module('app1', []);

app.controller('mainController', ['$log', '$filter', '$http', function($log, $filter, $http) {
    var self = this;
    var handleLength = 5;
    self.handle = '';

    self.showWarning = function() {
        return self.handle.length < handleLength;
    }
    
    self.showDanger = function() {
        return self.handle.length > handleLength;
    }

    self.onClick = function() {
        $log.info('Button clicked!');
    };

    self.toLowerCase = function(text) {
        return $filter('lowercase')(text);
    };

    var rules = {};
    self.gotRules = false;

    $http.get('http://demo1621533.mockable.io/rules')
    .then(function(response) {
        $log.info(response);
        rules = response.data;
        self.gotRules = true;
    }, 
    function(errorResponse) {
        $log.error(errorResponse);
    });
    
    self.getRules = function() {
        return rules;
    };

    self.newRule = '';

    self.addRule = function() {
        $http.post('http://demo1621533.mockable.io/rules', {name: self.newRule})
        .then(function(response) {
            $log.info(response);
        }, 
        function(errorResponse) {
            $log.error(errorResponse);
        });
    }

}]);