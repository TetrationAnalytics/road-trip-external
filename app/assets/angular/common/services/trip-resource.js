'use strict';

(function() {

  angular
    .module('services.tripResource', [
      'ngResource'
    ])
    .factory('TripResource', Resource);

  Resource.$inject = [
    '$resource'
  ];

  function Resource($resource) {
    return $resource(
      '/api/trips/:id.json',
      { id: '@id' },
      {

      }
    );
  }

})();
