'use strict';

(function() {

  angular
    .module('tourism', [
      'ui.router',
      'tourism.visitorStats'
    ])
    .config(config)
    .controller('TourismCtrl', Controller);

  config.$inject = [
    '$stateProvider'
  ];

  function config($stateProvider) {
    $stateProvider
      .state('urlTourism', {
        url: '/tourism',
        templateUrl: 'tourism/tourism-main.tpl.html',
        data: {
          pageTitle: 'Tourism'
        }
      });
  }

  Controller.$inject = [
    'VisitorStats'
  ];

  function Controller(VisitorStats) {

    var ctrlScope = this;
    ctrlScope.fetchError = null;

    activate();

    /////////////////////////

    function activate() {
      ctrlScope.visitorsByAttraction = VisitorStats.visitorsByAttraction();
    }
  }
})();
