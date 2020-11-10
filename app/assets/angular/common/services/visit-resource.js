'use strict';

(function() {

  angular
    .module('services.visitResource', [
      'ngResource'
    ])
    .factory('VisitResource', Resource);

  Resource.$inject = [
    '$resource'
  ];

  function Resource($resource) {
    return $resource(
      '/api/visits/:id.json',
      { id: '@id' },
      {

      }
    );
  }

})();
