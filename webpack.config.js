const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const { NODE_ENV } = process.env;
if (NODE_ENV !== 'production' && NODE_ENV !== 'development') {
  throw new Error('Must set NODE_ENV to either production or development.');
}

const IS_PROD = NODE_ENV === 'production';

const cssLoaders = (other) => ExtractTextPlugin.extract({
  use: [{
    loader: 'css-loader',
    options: {
      sourceMap: true,
      // Enable CSS Modules to scope class names
      modules: true,
      minimize: IS_PROD,
      importLoaders: 1 + other.length
    }
  }, {
    // Adjust URLs in CSS files so that they are relative to the source file rather than the output file
    loader: 'resolve-url-loader'
  }, ...other],
  // Do not extract in development mode for hot reloading
  fallback: 'style-loader'
});

const jsLoaders = (other) => [{
  loader: 'babel-loader'
}, ...other];

module.exports = {
  // Allow TypeScript files to be treated as normal JS
  resolve: {
    extensions: [
    '.js', '.jsx', '.ts', '.tsx'
  ]},

  // plugins: [new TsconfigPathsPlugin({ baseUrl: "types" })],

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
      test: /\.css$/,
      use: cssLoaders([])
    }, {
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
    // Actually output extracted CSS
    new ExtractTextPlugin({
      filename: 'main.css',
      disable: !IS_PROD
    }),
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
