var app = angular.module('app1', ['ngResource']);

app.controller('mainController', function($log, $resource) {
    this.name = '';

    let things = [1,2,3, function(args) {
        $log.info(args);
    }];
    
    $log.info(things);
    things[3]('hello function!');
});
