import Vue from 'vue'
import Router from 'vue-router'


const Rate = r => require.ensure([], () => r(require('./pages/views/page-Rate')), 'page-Rate')

Vue.use(Router)

const routes = [
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
    redirect: '/page-Rate',
    component: Rate,
    meta: {
      title: '星星评分'
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