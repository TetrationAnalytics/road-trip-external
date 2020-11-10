'use strict';

(function() {

  angular
    .module('services.expenseResource', [
      'ngResource'
    ])
    .factory('ExpenseResource', Resource);

  Resource.$inject = [
    '$resource'
  ];

  function Resource($resource) {
    return $resource(
      '/api/expenses/:id.json',
      { id: '@id' }
    );
  }

})();
