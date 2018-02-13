'use strict';

describe('weatherApp.forecast module', function() {

  beforeEach(module('weatherApp.forecast'));

  describe('forecast controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var forecastController = $controller('ForecastController');
      expect(forecastController).toBeDefined();
    }));

  });
});