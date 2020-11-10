'use strict';

describe('TripResource', function() {
  var mockResource, $httpBackend;

  beforeEach(angular.mock.module('services.tripResource'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    mockResource = $injector.get('TripResource');
  }));

  describe('query', function() {
    it('should get url', function() {
      $httpBackend
        .expectGET('/api/trips.json')
        .respond(200, [{}]);

      mockResource.query();
      $httpBackend.flush();
    });
  });
});
