// 获取环境命令，并去除首尾空格 例如：base dev lint prod
const env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/ig,"");
// 根据环境变量引用相关的配置文件
module.exports = require(`./webpack.config.${env}.js`)