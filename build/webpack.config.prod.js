//该配置文件用来在生产环境启用，主要用来压缩、合并和抽取 JavaScript 代码，并将项目文件打包至硬盘上的 dist 文件夹中。
// 引入基础配置
const webpackBase = require("./webpack.config.base");
// 引入 webpack-merge 插件
const { merge } = require("webpack-merge");
// 引入 webpack
const webpack = require("webpack"); //虽然在webpack.config.base中引入了但是在这里不可用还是要引入一遍
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// 合并配置文件
module.exports = merge(webpackBase,{
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      minSize: 1,
      cacheGroups: {
        vendors: {
          chunks: 'all',
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,  // 匹配node_modules目录下的文件
          priority: -10,
          reuseExistingChunk: true,
        },
        common: {
          chunks: 'all',
          name: 'common',
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
});