import Vue from 'vue'
import Router from 'vue-router'


const Rate = r => require.ensure([], () => r(require('./pages/views/page-Rate')), 'page-Rate')
const Index = r => require.ensure([], () => r(require('./pages/index')), 'Index')

Vue.use(Router)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      title: '常用组件首页'
    }
  },
  {
    path: '/page-Rate',
    name: 'page-Rate',
    component: Rate,
    meta: {
      title: '星星评分'
    }
  },
  {
    path: '*',
    redirect: '/index',
    component: Index,
    meta: {
      title: '常用组件首页'
    }
  },


]

const router = new Router({
  routes,
  mode: 'hash'
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router