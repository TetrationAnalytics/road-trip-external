'use strict';

describe('visitor-stats-service', function () {
  var _VisitorStats, $httpBackend;

  beforeEach(angular.mock.module('tourism.visitorStats'));
  beforeEach(angular.mock.module('lodash'));
  beforeEach(angular.mock.module('services.userResource'));
  beforeEach(angular.mock.module('services.visitResource'));
  beforeEach(angular.mock.module('services.attractionResource'));
  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    _VisitorStats = $injector.get('VisitorStats');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('#visitorsByAttraction', function() {
    var mockUsers = [
      {id: 'u1', first_name: 'John', last_name: 'Doe', member: true},
      {id: 'u2', first_name: 'Bob', last_name: 'Jones', member: true},
      {id: 'u3', first_name: 'Carl', last_name: 'Smith', member: true}
    ];

    var mockAttractions = [
      {id: 'a1', name: 'Yosemite'},
      {id: 'a2', name: 'Lake Tahoe'}
    ];

    var mockVisits = [
      {ts: 1475535038, user_id: 'u1', attraction_id: 'a1'},
      {ts: 1475535038, user_id: 'u2', attraction_id: 'a1'},
      {ts: 1475621397, user_id: 'u1', attraction_id: 'a2'},
      {ts: 1475621222, user_id: 'u2', attraction_id: 'a1'}
    ];

    var expectedResults = [
      {
        id: 'a1',
        name: 'Yosemite',
        member_visitors: [
          { ts: 1475535038, user_id: 'u1', first_name: 'John', last_name: 'Doe' },
          { ts: 1475535038, user_id: 'u2', first_name: 'Bob', last_name: 'Jones' },
          { ts: 1475621222, user_id: 'u2', first_name: 'Bob', last_name: 'Jones' }
        ]
      },
      {
        id: 'a2',
        name: 'Lake Tahoe',
        member_visitors: [
          { ts: 1475621397, user_id: 'u1', first_name: 'John', last_name: 'Doe' }
        ]
      }
    ];

    describe('success API calls', function() {

    });
  });
});
