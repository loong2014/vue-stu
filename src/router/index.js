import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

const _import = file => require('@/views/' + file + '.vue').default

// 全局路由
const globalRoutes = [
  {
    path: '/404',
    component: _import('common/404'),
    name: '404',
    meta: {
      title: '404未找到'
    }
  },
  {
    path: '/login',
    component: _import('common/login'),
    name: 'login',
    meta: {
      title: '登录'
    }
  }
]

// 主入口路由
const mainRoute = {
  path: '/main',
  component: _import('main'),
  name: 'main',
  redirect: { name: 'home' },
  meta: { title: '主入口' },
  children: [
    {
      path: '/home',
      component: _import('common/home'),
      name: 'home',
      meta: {
        title: '首页'
      }
    }
  ]
}

export default new Router({
  routes: globalRoutes.concat(mainRoute)
})
