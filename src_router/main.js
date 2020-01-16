import Vue from 'vue'
// 适配
import 'lib-flexible/flexible'
import App from './App.vue'
// 安装 路由器
import router from './router'
// 将生产模式提醒关掉
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
  
