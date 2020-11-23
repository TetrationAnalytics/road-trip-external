import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';
import Feedback from '../../react/feedback';

angular
  .module('feedback', ['ui.router', UI_ROUTER_REACT_HYBRID])
  .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider.state('urlFeedback', {
    url: '/feedback',
    data: {
      pageTitle: 'Feedback',
    },
    component: Feedback,
  });
}
Controller.$inject = ['_', '$scope'];

function Controller(_, $scope) {
  const vm = this;

  vm.testState = 'testing';
}
