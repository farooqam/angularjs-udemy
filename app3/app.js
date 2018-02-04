var app = angular.module('app1', []);

app.controller('mainController', ['$log', '$filter', '$scope', '$timeout', function($log, $filter, $scope, $timeout) {
    var self = this;
    
    self.handle = '';

    self.toLowerCase = function(text) {
        return $filter('lowercase')(text);
    };

    $scope.$watch(angular.bind(this, function() {
        return self.handle;
    }), function(newValue, oldValue) {
        $log.info(`Old value: ${oldValue}; New value: ${newValue}`);
    });

    /* setTimeout(function() {
        $scope.$apply(function() {
            self.handle = 'newtwitterhandle';
            $log.info('Scope changed!');
        });
    }, 3000); */

    $timeout(function() {
        self.handle = 'newtwitterhandle';
        $log.info('Scope changed!');
    }, 3000);
    
}]);