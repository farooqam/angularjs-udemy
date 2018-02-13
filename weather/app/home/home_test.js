'use strict';

describe('weatherApp.home module', function() {

  beforeEach(module('weatherApp.home'));
  beforeEach(module('weatherApp.forecast'));
  beforeEach(module('ngResource'));

  describe('home controller', function(){

    var _controller, _forecastService;

    beforeEach(inject(function($controller, ForecastService) {
      _controller = $controller('HomeController');
      _forecastService = ForecastService;
    }));

    it('should be defined', function() {
      expect(_controller).toBeDefined();
    });

    it('should set city initial value', function(){
      expect(_controller.city).toBe('');
    });

    it('should get the forecast', function() {
      spyOn(_forecastService, 'getForecast').and.returnValue('foo');
      _controller.getForecast('Seattle');

      expect(_forecastService.getForecast.calls.count()).toEqual(1);

    });
  });
});