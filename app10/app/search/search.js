'use strict';

angular.module('myApp.search', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'search/search.html',
            controller: 'SearchCtrl'
        });
    }])

    .controller('SearchCtrl', ['$log', function ($log) {
        var self = this;

        self.people = [
            {
                name: 'Bubba Gump',
                address: '100 1st Ave, New York, NY 10010'
            },
            {
                name: 'Farooq Mahmud',
                address: '100 1st Ave, New York, NY 10010'
            },
            {
                name: 'Emily Green',
                address: '100 1st Ave, New York, NY 10010'
            }
        ];

        self.metadata = {
            id: 100,
            description: 'foo'
        };
        
        self.hashPerson = function(person) {
            let stringToHash = `${person.name.toLowerCase()}${person.address.toLowerCase()}`;
            let hash = sha256(stringToHash);
            $log.info(JSON.stringify({ str: stringToHash, hash: hash }));
            return hash;
        }

    }])
    .directive("searchResult", ['$log', function ($log) {
        return {
            templateUrl: 'search/searchResult.html',
            replace: true,
            scope: {
                header: '@',
                text: '@',
                metadata: '=',
                hashFn: '&',
                person: '='
            }
        };
    }]);