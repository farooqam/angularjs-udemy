var app = angular.module('app1', []);

app.controller('mainController', ['$log', '$filter', function($log, $filter) {
    var self = this;
    self.handle = '';
    
    self.toLowerCase = function(text) {
        if(text){
            return $filter('lowercase')(text);
        }
    }
}]);
