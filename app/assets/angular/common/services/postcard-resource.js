'use strict';

(function() {

  angular
    .module('services.postcardResource', [
      'ngResource'
    ])
    .factory('PostcardResource', Resource);

  Resource.$inject = [
    '$resource'
  ];

  function Resource($resource) {
    return $resource(
      '/api/postcards/:id.json',
      { id: '@id' }
    );
  }

})();
