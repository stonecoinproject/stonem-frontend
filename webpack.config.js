const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const { NODE_ENV } = process.env;
if (NODE_ENV !== 'production' && NODE_ENV !== 'development') {
  throw new Error('Must set NODE_ENV to either production or development.');
}

const IS_PROD = NODE_ENV === 'production';

const jsLoaders = (other) => [{
  loader: 'babel-loader'
}, ...other];

module.exports = {
  // Allow TypeScript files to be treated as normal JS
  resolve: {
    extensions: [
    '.js', '.jsx', '.ts', '.tsx'
  ]},

  // Enable source maps
  devtool: IS_PROD ? 'source-map' : 'inline-source-map',

  entry: [
    // HMR for React
    'react-hot-loader/patch',

    // Main entrypoint
    './src/index.tsx'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: jsLoaders([])
    }, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: jsLoaders([{
        loader: 'ts-loader'
      }])
    }, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'tslint-loader',
      // Force TSLint before other loaders
      enforce: 'pre',
      options: {
        fix: true
      }
    }, {
      test: /\.(woff2?|png|svg|tiff?|jpe?g)$/,
      use: [{
        // Include files as data urls
        loader: 'url-loader',
        options: {
          // Only embed small files
          limit: 10000
        }
      }]
    }]
  },
  plugins: [...[
    // Generate an HTML-file to include all bundle outputs
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      inject: 'body'
    }),
    // Inject proper value for NODE_ENV into build
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    })
  ], ...(IS_PROD ? [
    // Minify JS
    new UglifyWebpackPlugin({
      sourceMap: true,
      uglifyOptions: {
        ecma: 8,
        safari10: true
      }
    })
  ] : [
    // Enable HMR
    new webpack.HotModuleReplacementPlugin(),
    // More readable module names in HMR
    new webpack.NamedModulesPlugin()
  ])],

  devServer: {
    port: 5678,
    // Serve index.html instead of 404
    historyApiFallback: true,
    // Enable Hot Module Reloading
    hotOnly: true,
    publicPath: '/'
  }
};
