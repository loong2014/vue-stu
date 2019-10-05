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

const helloWorldRoute = {
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
}

export default new Router({
  routes: globalRoutes.concat(helloWorldRoute)
})
