import Vue from 'vue'
import Router from 'vue-router'


const rain01 = r => require.ensure([], () => r(require('./pages/rain01')), 'rain01')



Vue.use(Router)

const routes = [
  {
    path: '/rain01',
    name: 'rain01',
    component: rain01,
    meta: {
      title: '雨滴01'
    }
  },
  {
    path: '*',
    redirect: '/rain01',
    component: rain01,
    meta: {
      title: '雨滴'
    }
  }

]

const router = new Router({
  routes,
  mode: 'hash'
})

router.afterEach((to, from) => {
  window.console.log(from)
  document.title = to.meta.title
})

export default router