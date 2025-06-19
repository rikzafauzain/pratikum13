import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import UserList from '../pages/UserList.vue'
import UserDetail from '../pages/UserDetail.vue'
import CreateUser from '../pages/CreateUser.vue'

const routes = [
  { path: '/', component: UserList },
  { path: '/users/:id', component: UserDetail },
  { path: '/create', component: CreateUser },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
