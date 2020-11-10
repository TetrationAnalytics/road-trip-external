const minimatch = require('minimatch');
const { some } = require('lodash');

require('../../app/javascript/packs/main');
require('angular-mocks');

// const vendorContext = require.context('./vendor', true, /\.js$/);
// vendorContext.keys().forEach(vendorContext);

function getSpecs() {
  // Rather than run all of the tests, you can run a specific grep of tests by
  // setting the KARMA_SPECS environment variable.
  // KARMA_SPECS="**/scored_dashboard/**/*.spec.js" npm run test-headless
  const envSpecs = process.env.KARMA_SPECS;

  if (envSpecs) {
    return envSpecs.split(',').map(spec => spec.trim());
  }
  return ['**/*.spec.js'];
}

const specs = getSpecs();
const isMatch = fileName =>
  some(specs, spec => minimatch(fileName.slice(2), spec));

const specContext = require.context('./unit', true, /\.js$/);

specContext
  .keys()
  .filter(isMatch)
  .forEach(specContext);
