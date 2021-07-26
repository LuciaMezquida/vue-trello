import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '@/components/AppHeader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHeader',
      component: AppHeader
    }
  ]
})
