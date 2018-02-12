'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$log', function($log) {
  var self = this;
  
  self.person = {
      name: 'Bubba Gump',
      address: '100 1st Ave, New York, NY 10010'
  };

  self.metadata = {
      id: 100,
      description: 'foo'
  };

  self.hashMetadata = function(metadata) {
    let stringToHash = `${metadata.id}${metadata.description.toLowerCase()}`;
    let hash = sha256(stringToHash);
    $log.info(JSON.stringify({str: stringToHash, hash: hash}));
    return hash;
  };

}])
.directive("searchResult", ['$log', function($log) {
    return {
        templateUrl: 'search/searchResult.html',
        replace: true,
        scope: {
            header: '@',
            text: '@',    
            metadata: '=',
            hashFn: '&'        
        }
    };
}]);