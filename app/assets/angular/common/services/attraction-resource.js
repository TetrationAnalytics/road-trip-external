'use strict';

(function() {

  angular
    .module('services.attractionResource', [
      'ngResource'
    ])
    .factory('AttractionResource', Resource);

  Resource.$inject = [
    '$resource'
  ];

  function Resource($resource) {
    return $resource(
      '/api/attractions/:id.json',
      { id: '@id' },
      {

      }
    );
  }

})();
