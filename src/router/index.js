import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstPage from '../pages/firstPage'
import secondPage from '../pages/secondPage'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'first',
      component: firstPage
    },
    {
      path: '/second',
      name: 'second',
      component: secondPage
    }
  ]
})
