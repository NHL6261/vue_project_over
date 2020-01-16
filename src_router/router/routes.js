// 管理路由
import Mister from '../pages/Mister/mister'
import Search from '../pages/Search/search'
import Order from '../pages/Order/order'
import Profile from '../pages/Profile/profile'

export default [
  {
    path: '/mister',
    component: Mister
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    redirect: '/mister'
  }
]
