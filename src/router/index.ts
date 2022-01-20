import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import More from '../views/MoreView.vue'
import About from '../views/AboutWebsite.vue'
import NotFoundView from '../views/_NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    name: 'nfp',
    component: NotFoundView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/more',
    name: 'more',
    component: More
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
