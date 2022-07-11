// 引入基础配置文件
const webpackBase = require("./webpack.config.base");
// 引入 webpack-merge 插件
const { merge } = require("webpack-merge");
const path = require('path')

module.exports = merge(webpackBase,{
  mode: 'development',
  // 配置 webpack-dev-server
  devServer:{
    static: {
      directory: path.resolve(__dirname, '../dist')
    },
    // 错误、警告展示设置
    client: {
      overlay:{
        errors:true,
        warnings:true
      }
    }
  }
});