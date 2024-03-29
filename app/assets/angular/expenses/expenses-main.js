'use strict';

(function () {
  angular
    .module('expenses', [
      'ui.router',
      'services.userResource',
      'services.expenseResource',
    ])
    .config(config)
    .controller('ExpensesCtrl', Controller);

  config.$inject = ['$stateProvider'];
  function config($stateProvider) {
    $stateProvider.state('urlExpenses', {
      url: '/expenses',
      templateUrl: 'expenses/expenses-main.tpl.html',
      data: {
        pageTitle: 'Expenses',
      },
    });
  }

  Controller.$inject = ['UserResource', 'ExpenseResource'];
  function Controller(UserResource, ExpenseResource) {
    var vm = this;

    activate();

    //////////////////////////

    function activate() {
      fetch();
    }

    function fetch() {
      vm.users = UserResource.query();
    }
  }
})();
