const WebpackMd5Hash = require('webpack-md5-hash')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BabelRelayPlugin = require('./babelPluginRelay')
const webpack = require('webpack')
const { resolve } = require('path')


module.exports = {
  entry: {
    main: './src/client/index.js',
    vendor: ['react', 'react-redux',
             'redux', 'redux-thunk',
             'redux-promise', 'react-dom', 'react-router', 'react-tap-event-plugin']
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[chunkhash].[id].[name].js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              optimizationLevel: 1,
              interlaced: false,
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'] // Specify the common bundle's name.
    }),
    new WebpackMd5Hash(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/server/views/template.html',
      filename: 'index.html',
      favicon: './favicon.ico'
    })
  ]
}