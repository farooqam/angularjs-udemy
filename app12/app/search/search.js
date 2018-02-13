'use strict';

angular.module('myApp.search', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'search/search.html',
            controller: 'SearchCtrl'
        });
    }])
    .service('SearchService', ['$log', function($log){
        var self = this;
        self.getPeople = function() {
            return [
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
        }
    }])

    .controller('SearchCtrl', ['$log', 'SearchService', function ($log, SearchService) {
        var self = this;

        self.people = SearchService.getPeople();

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
    .directive("searchResult", ['$log', '$compile', function ($log, $compile) {
        return {
            templateUrl: 'search/searchResult.html',
            replace: true,
            scope: {
                header: '@',
                text: '@',
                metadata: '=',
                hashFn: '&',
                person: '='
            },
            link: function(scope, elements, attributes){
                $log.info('Linking...');
                $log.info(elements.html());
                $log.info(scope);

                if(scope.person.name === 'Bubba Gump'){
                    elements.attr('ng-if', '1===2');
                    $compile(elements)(scope);
                }
            },
            transclude: {
                'warnMessage': '?warnMessage',
                'errorMessage' : '?errorMessage'
            }
        };
    }]);