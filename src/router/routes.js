import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/search'
import Order from '../pages/Order/order'
import Profile from '../pages/Profile/profile'
import Login from '../pages/Login/login'
import Shop from '../pages/Shop/Shop'
import Good from '../pages/Shop/Good/Good'
import Rating from '../pages/Shop/Rating/Rating'
import Info from '../pages/Shop/Info/Info'
export default [
  // {
  //   path: '路由路径',
  //   component: 路由组件
  // }
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/good',
        component: Good
      },
      {
        path: 'rating',
        component: Rating
      },
      {
        path: 'info',
        component: Info
      },
      {
        path: '/shop',
        redirect: '/shop/good'
      }
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
