const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/hello.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.(ts)$/, use: 'ts-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
