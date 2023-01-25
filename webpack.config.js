const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isInDevMode = true;
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: isInDevMode ? 'development' : 'production',
  entry: './dev/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/build'),
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [new HTMLWebpackPlugin({
    template: './public/index.html',
    inject: 'body',
    favicon: './public/favicon.ico'
  })],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, '/dev'), 'node_modules']
  },
  devServer: {
    static: path.resolve(__dirname, '/dev'),
    compress: true,
    port: 9900,
    historyApiFallback: true,
  },
}