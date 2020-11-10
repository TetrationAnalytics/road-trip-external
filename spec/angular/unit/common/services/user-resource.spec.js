'use strict';

describe('UserResource', function() {
  var mockResource, $httpBackend;

  beforeEach(angular.mock.module('services.userResource'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    mockResource = $injector.get('UserResource');
  }));

  describe('query', function() {
    it('should get url', function() {
      $httpBackend
        .expectGET('/api/users.json')
        .respond(200, [{}]);

      mockResource.query();
      $httpBackend.flush();
    });
  });
});
