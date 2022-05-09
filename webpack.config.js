const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  watchOptions: {
    ignored: '**/node_modules',
  },
  entry: {
    entry: './src/index.js',
  },

  devServer: {
    static: './dist',
    hot: 'only',
    watchFiles: ['src/*'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[hash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Virtual Keyboard',
      scriptLoading: 'module',
      template: './src/index.html',
      favicon: './src/assets/img/favicon.ico',
      hash: 'true',
      inject: 'body',
    }),

  ],
  output: {
    publicPath: '',
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],

      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
