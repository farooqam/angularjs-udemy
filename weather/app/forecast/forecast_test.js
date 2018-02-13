'use strict';

describe('weatherApp.forecast module', function() {

  beforeEach(module('weatherApp.forecast'));
  beforeEach(module('ngResource'));
  
  describe('forecast controller', function(){

    var _controller;

    beforeEach(inject(function($controller, $httpBackend, ForecastService) {
      spyOn(ForecastService, 'getCity').and.returnValue('foo');
      spyOn(ForecastService, 'getForecast').and.returnValue('bar');      
      _controller = $controller('ForecastController');
    }));

    it('should be defined', function() {
      expect(_controller).toBeDefined();
    });

    it('should get the forecast city', function() {
      expect(_controller.city).toEqual('foo');
    });

    it('should get the forecast', function() {
      expect(_controller.forecast).toEqual('bar');
    });

  });

  describe('forecast service', function() {

    var _forecastService, _http;

    beforeEach(inject(function(ForecastService, $httpBackend){
      _forecastService = ForecastService;
      _http = $httpBackend;
    }));

    it('should get the forecast', function() {
      let city = 'Seattle';
      _http.expectGET(new RegExp('.*')).respond(200, {temp: 100});

      var forecast = _forecastService.getForecast(city);
      _http.flush();

      expect(forecast.temp).toBe(100);
    });

    afterEach(function() {
      _http.verifyNoOutstandingExpectation();
      _http.verifyNoOutstandingRequest();      
    });
  });
});