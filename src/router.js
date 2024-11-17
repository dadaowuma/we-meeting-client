import { createMemoryHistory, createWebHashHistory, createRouter } from 'vue-router'

import Index from './pages/Index.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Meeting from './pages/Meeting.vue'
import About from './pages/About.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/meeting', component: Meeting },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;