'use strict';

(function() {

  angular
    .module('services.userResource', [
      'ngResource'
    ])
    .factory('UserResource', Resource);

  Resource.$inject = [
    '$resource'
  ];

  function Resource($resource) {
    return $resource(
      '/api/users/:id.json',
      { id: '@id' },
      {

      }
    );
  }

})();
