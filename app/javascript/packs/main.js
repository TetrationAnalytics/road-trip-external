// // stylesheets
require('../src/application.scss');

require('bootstrap');

require('angular-bootstrap');
require('angular-ui-router');
require('angular-resource');
require('lodash');

const ngContext = require.context('../../assets/angular', true, /\.(js|erb)$/);

ngContext.keys().forEach(ngContext);
