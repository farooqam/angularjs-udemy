'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  var nameServiceMock;
  var scopeMock;

  beforeEach(module(function($provide) {
    nameServiceMock = {
      getName: function() {},
      setName: function(name) {}      
    };

    scopeMock = {
      $watch: function() {}
    }

    $provide.value('nameService', nameServiceMock);
    $provide.value('$scope', scopeMock);
    
  }));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});