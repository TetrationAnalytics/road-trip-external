module.exports = {
  test: /\.html$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'raw-loader'
    }
  ]
};
