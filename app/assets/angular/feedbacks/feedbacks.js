import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';
import Feedbacks from '../../react/feedbacks';

angular
  .module('feedbacks', ['ui.router', UI_ROUTER_REACT_HYBRID])
  .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider.state('urlFeedbacks', {
    url: '/feedbacks',
    data: {
      pageTitle: 'Feedbacks',
    },
    component: Feedbacks,
  });
}
Controller.$inject = ['_', '$scope'];

function Controller(_, $scope) {
  const vm = this;

  vm.testState = 'testing';
}
