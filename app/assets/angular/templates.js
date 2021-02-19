const htmlContext = require.context('.', true, /\.html$/);

angular.module('templates', []).run([
  '$templateCache',
  function ($templateCache) {
    htmlContext
      .keys()
      // Don't include component templates since they're imported directly.
      .filter((file) => !/\.component\.html$/.test(file))
      .forEach((key) => $templateCache.put(key.slice(2), htmlContext(key)));
  },
]);
