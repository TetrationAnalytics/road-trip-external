const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const BowerResolvePlugin = require('bower-resolve-webpack-plugin');

const { environment } = require('@rails/webpacker');

const customConfig = {
  resolve: {
    alias: {
      // MaxM: Provide angular as an export for amd/commonjs imports in deps
      angular: require.resolve('../../app/assets/javascripts/angular-shim.js'),
    },
    plugins: [new BowerResolvePlugin()],
    descriptionFiles: ['package.json'],
    mainFields: ['module', 'main', 'browser'],
    modules: [
      path.resolve(process.cwd(), 'node_modules/@bower_components'), // MaxM: bower components dir
      'node_modules',
    ],
  },
};

environment.config.merge(customConfig);

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    'window.jQuery': 'jquery',
    angular: 'angular',
  })
);

environment.plugins.prepend(
  'Define',
  new webpack.DefinePlugin({ 'process.env': { LATER_COV: false } })
);

const erb = require('./loaders/erb');

environment.loaders.append('erb', erb);

const html = require('./loaders/html');

environment.loaders.append('html', html);

// MaxM: allow shorthand imports in scss|sass
const sassLoader = environment.loaders
  .get('sass')
  .use.find((el) => el.loader === 'sass-loader');
sassLoader.options.includePaths = (
  sassLoader.options.includePaths || []
).concat(path.resolve('app/assets/stylesheets'));
sassLoader.options.precision = 9;

environment.loaders
  .get('moduleSass')
  .use.find((el) => el.loader === 'css-loader').options.localsConvention =
  'camelCase';

environment.loaders.delete('nodeModules');

const typescript = require('./loaders/typescript');
environment.loaders.prepend('typescript', typescript);
module.exports = environment;
