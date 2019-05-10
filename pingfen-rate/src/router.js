import Vue from 'vue'
import Router from 'vue-router'


const Rate = r => require.ensure([], () => r(require('./pages/page-Rate')), 'page-Rate')

const pageYY = r => require.ensure([], () => r(require('./pages/tian-YY')), 'page-YY')

Vue.use(Router)

const routes = [
  {
    path: '/page-YY',
    name: '/page-YY',
    component: pageYY,
    meta: {
      title: '文字动画'
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