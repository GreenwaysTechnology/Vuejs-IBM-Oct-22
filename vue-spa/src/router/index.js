import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/review',
      name: 'reivew',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ReviewVue.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../views/UsersDetailsView.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/MoviesView.vue'),
      children: [
        {
          path: 'action',
          component: () => import('../views/ActionView.vue'),
        },
        {
          path: 'drama',
          component: () => import('../views/DramaView.vue'),
        },
        {
          path: 'horror',
          component: () => import('../views/HorrorView.vue'),
        }
      ]
    }
  ]
})

export default router
