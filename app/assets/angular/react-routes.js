import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';

import Feedbacks from 'react/feedbacks';
import ContactInfo from 'react/contact-info';

angular
  .module('roadtrip.react', ['ui.router', UI_ROUTER_REACT_HYBRID])
  .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('urlFeedbacks', {
      url: '/feedbacks',
      data: {
        pageTitle: 'Feedbacks',
      },
      component: Feedbacks,
    })
    .state('urlContactInfo', {
      url: '/contact-info',
      data: {
        pageTitle: 'Contact Info',
      },
      component: ContactInfo,
    });
}
