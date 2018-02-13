'use strict';

angular.module('myApp.auth', [])
    .service('AuthService', ['$log', function($log){
        var self = this;

        self.showElement = function(person) {
            if(person.name === 'Bubba Gump') {
                return false;
            }

            return true;
        };
    }]);