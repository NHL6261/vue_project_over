const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37.5  //将设计稿设计成10等分
})
module.exports = {
  runtimeCompiler: true,
  lintOnSave: false, // 关闭enlint语法检查
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    port: 8787,//运行端口号
    open: true, // 自动打开浏览器
    quiet: true, // 限制日志输出
    // 利用代理解决跨域问题
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}
