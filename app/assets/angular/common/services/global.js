'use strict';

angular
  .module('lodash', [])
  .factory('_', function() {
    return window._;
  });

angular
  .module('d3', [])
  .factory('d3', function() {
    return d3;
  });