//= require_tree .

'use strict';

(function() {

  angular.
    module('RoadTripApp', [
      'ui.bootstrap',
      'ui.router',
      'header',
      'templates',
      'tourism',
      'postcards',
      'expenses'
    ])
    .run(run)
    .config(httpConfig)
    .config(stateConfig);

  run.$inject = [
    '$rootScope',
    '$state',
    '$stateParams',
  ];
  function run($rootScope,
               $state,
               $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }

  httpConfig.$inject = [
    '$provide',
    '$httpProvider'
  ];
  function httpConfig($provide, $httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');

    // manually encode ; in url query parameters since it's not done by default see:
    // * http://stackoverflow.com/questions/26797964/angular-does-not-encode-the-semi-colon-character-in-an-url
    $provide.decorator('$httpBackend', ['$delegate', function($delegate) {
      return function(method, url, post, callback, headers, timeout, withCredentials, responseType) {
        url = url.replace(/;/g, '%3B');
        $delegate(method, url, post, callback, headers, timeout, withCredentials, responseType);
      };
    }]);
  }

  stateConfig.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];
  function stateConfig($stateProvider) {

  }

})();
