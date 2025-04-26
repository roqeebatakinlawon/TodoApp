import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ErrorBoundary from '../views/ErrorBoundary.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/error', component: ErrorBoundary },
  { path: '/not-found', component: NotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
