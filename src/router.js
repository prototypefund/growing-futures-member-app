import Vue from 'vue'
import Router from 'vue-router'

import FeedbackView from '@/views/FeedbackView.vue'
import HouseholdView from '@/views/HouseholdView.vue'
import LoginView from '@/views/LoginView.vue'
import PreferenceView from '@/views/PreferenceView.vue'
import ShareView from '@/views/ShareView.vue'
import ShopView from '@/views/ShopView.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/share'
    },
    {
      path: '/household',
      name: 'household',
      component: HouseholdView
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: PreferenceView
    },
    {
      path: '/share',
      name: 'share',
      component: ShareView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('GROWING-FUTURES:USER')
  if (to.path === '/login' || isAuthenticated) {
    next()
  } 
  else next('/login')
});

export default router