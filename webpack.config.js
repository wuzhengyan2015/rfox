const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: {
    app: path.join(__dirname, 'src/index.tsx')
  },
  output: {
    filename: '[name].js',
    path: path.resolve('build')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    })
  ],

  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        use: ['babel-loader'], 
        include: path.resolve('src') 
      }
    ]
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
}