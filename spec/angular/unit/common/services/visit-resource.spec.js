'use strict';

describe('VisitResource', function() {
  var mockResource, $httpBackend;

  beforeEach(angular.mock.module('services.visitResource'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    mockResource = $injector.get('VisitResource');
  }));

  describe('query', function() {
    it('should get url', function() {
      $httpBackend
        .expectGET('/api/visits.json')
        .respond(200, [{}]);

      mockResource.query();
      $httpBackend.flush();
    });
  });
});
