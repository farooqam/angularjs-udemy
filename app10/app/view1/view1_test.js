'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  var nameServiceMock;
  var scopeMock;

  beforeEach(module(function($provide) {
    nameServiceMock = {
      getName: function() { return 'foo'},
      setName: function(name) {}      
    };

    scopeMock = {
      $watch: function() {}
    }

    $provide.value('nameService', nameServiceMock);
    $provide.value('$scope', scopeMock);
    
  }));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

    it('should initialize text property', inject(function($controller) {
      //spec body
      spyOn(nameServiceMock, 'getName');
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl.text).toBe('foo');
    }));

  });
});