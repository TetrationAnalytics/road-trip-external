'use strict';

(function() {

  angular
    .module('tourism.visitorStats', [
      'lodash',
      'services.userResource',
      'services.attractionResource',
      'services.visitResource'
    ])
    .factory('VisitorStats', factory);

  factory.$inject = [
    '_',
    'UserResource',
    'AttractionResource',
    'VisitResource'
  ];

  function factory(_,
                   UserResource,
                   AttractionResource,
                   VisitResource) {

    var service = {
      visitorsByAttraction: visitorsByAttraction
    };

    /////////////////////////////////

    function visitorsByAttraction() {
      return {test: 123}
    }

    return service;
  }

})();
