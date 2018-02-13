'use strict';

describe('weatherApp.forecast module', function() {

  beforeEach(module('weatherApp.forecast'));

  describe('forecast controller', function(){

    var _controller, _forecastService;

    beforeEach(inject(function($controller, ForecastService) {
      _controller = $controller('ForecastController');
      _forecastService = ForecastService;
    }));

    it('should be defined', function() {
      expect(_controller).toBeDefined();
    });

    it('should get the forecast', inject(function($controller, ForecastService) {
      let city = 'Seattle';
      spyOn(ForecastService, 'getCity').and.returnValue(city);
      let controller = $controller('ForecastController');
      expect(controller.city).toEqual(city);
    }));

  });

  describe('forecast service', function() {

    var _forecastService;

    beforeEach(inject(function(ForecastService){
      _forecastService = ForecastService;
    }));

    it('should get the forecast', function() {
      let city = 'Seattle';
      _forecastService.getForecast(city);
      expect(_forecastService.getCity()).toEqual(city);
    });
  });
});