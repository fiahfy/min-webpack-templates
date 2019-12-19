const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  context: `${__dirname}/src`,
  entry: './index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
