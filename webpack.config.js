var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),//根路径
  //需要处理的文件的后缀
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  // 入口
  entry: {
    app: './index.tsx',
    appStyles: './css/site.css',
    // 公用库单独打包，便于性能优化 
    // 业务会变， vendor 不变
    vendor: [
      "react",
      "react-dom",
      "react-router",
      "toastr",
      "redux",
      "react-redux",
      "react-thunk"//action提交异步化， action 里有promise
    ],
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
      '../node_modules/toastr/build/toastr.css'
    ],
  },
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack 

      // Using here url-loader and file-loader
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
          test: /\.(png|jpg)$/,
          // 小于100kb 自动转base64格式
          loader: 'url-loader?limit=10000&name=build/[name].[ext]'
      }
    ],
  },
  // For development https://webpack.js.org/configuration/devtool/#for-development 

  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    noInfo: true,
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin 

    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    }),
    // 分离公用块
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor',
      chunks: ['vendor']
  })
  ]
};
