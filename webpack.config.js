const path = require('path');

const PUBLIC_PATH = path.join(__dirname, 'public');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssExtractTextPlugin = new ExtractTextPlugin('style.css');

module.exports = {
  mode: 'development',
  cache: false,
  entry: `${PUBLIC_PATH}/index.tsx`,
  output: {
    path: `${PUBLIC_PATH}/dist`,
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(cssExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?url=false'],
        })),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              name: '[hash].[ext]',
              limit: 8 * 1024,
              context: '',
            },
          },
        ],
      },
      {
        test: /\.t(s|sx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
              forceIsolatedModules: true,
              reportFiles: ['./public/**/*.{ts, tsx}'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    cssExtractTextPlugin,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Mail.Ru',
      template: `${PUBLIC_PATH}/index.html`,
    }),
  ],
  devServer: {
    port: 9002,
    contentBase: `${PUBLIC_PATH}`,
    compress: true,
    watchContentBase: true,
  },
};
