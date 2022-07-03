const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    'daliy-report': path.resolve(__dirname, '../src/pages/daliy-report/index.js'),
    'weekly-report': path.resolve(__dirname, '../src/pages/weekly-report/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name]-bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                ['@babel/preset-env', {
                    targets: "> 0.25%, not dead"
                }]
            ],
          }
        },
        exclude: '/node_modules/'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
        exclude: '/node_modules/'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/pages/daliy-report/daliy-report.html'),
      filename: 'daliy-report.html',
      chunks: ['daliy-report']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/pages/weekly-report/weekly-report.html'),
      filename: 'weekly-report.html',
      chunks: ['weekly-report']
    })
  ]
}