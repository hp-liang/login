import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import index from '@/components/index'
import me from '@/components/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login

    },
    {
      path: '/index',
      name: 'index',
      component: index
    },{
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})
