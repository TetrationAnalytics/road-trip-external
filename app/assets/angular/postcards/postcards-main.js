'use strict';

(function() {

  angular
    .module('postcards', [
      'ui.router',
      'services.postcardResource'
    ])
    .config(config)
    .controller('PostcardsCtrl', Controller);

  config.$inject = [
    '$stateProvider'
  ];
  function config($stateProvider) {
    $stateProvider
      .state('urlPostcards', {
        url: '/postcards',
        templateUrl: 'postcards/postcards-main.tpl.html',
        data: {
          pageTitle: 'Postcards'
        }
      });
  }

  Controller.$inject = [
    'PostcardResource'
  ];
  function Controller(PostcardResource) {
    var vm = this;

    vm.create = create;

    activate();


    //////////////////////////


    function activate() {
      fetch();
    }

    function fetch() {
      vm.postcards = PostcardResource.query();
    }

    function create() {
      PostcardResource.save().$promise.then(function() { fetch(); });
    }
  }

})();
