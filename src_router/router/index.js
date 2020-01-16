// 生成路由器
import Vue from 'vue'
import VueRouter from 'vue-router'
//将路由交给路由器管理
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes
  })
  
  export default router

