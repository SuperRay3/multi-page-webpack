const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    'daliy-report': path.resolve(__dirname, './src/pages/daliy-report/index.js'),
    'weekly-report': path.resolve(__dirname, './src/pages/weekly-report/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]/[name]-bundle.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/daliy-report/daliy-report.html'),
      filename: 'daliy-report.html',
      chunks: ['daliy-report']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/weekly-report/weekly-report.html'),
      filename: 'weekly-report.html',
      chunks: ['weekly-report']
    })
  ]
}