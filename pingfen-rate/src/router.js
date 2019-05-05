import Vue from 'vue'
import Router from 'vue-router'


const rate = r => require.ensure([], () => r(require('./pages/rate')), 'rate')

Vue.use(Router)

const routes = [

  {
    path: '/rate',
    name: 'rate',
    component: rate,
    meta: {
      title: '星星评分'
    }
  },
  {
    path: '*',
    redirect: '/rate',
    component: rate,
    meta: {
      title: '星星评分'
    }
  }

]

const router = new Router({
  routes,
  mode: 'hash'
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router