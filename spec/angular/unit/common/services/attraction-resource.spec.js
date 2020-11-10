'use strict';

describe('AttractionResource', function() {
  var mockResource, $httpBackend;

  beforeEach(angular.mock.module('services.attractionResource'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    mockResource = $injector.get('AttractionResource');
  }));

  describe('query', function() {
    it('should get url', function() {
      $httpBackend
        .expectGET('/api/attractions.json')
        .respond(200, [{}]);

      mockResource.query();
      $httpBackend.flush();
    });
  });
});
