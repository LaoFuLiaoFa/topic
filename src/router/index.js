import Vue from 'vue'
import VueRouter from 'vue-router'
import OnePage from '../views/OnePage.vue'
import axios from 'axios'

Vue.prototype.$http = axios
// 配置URL
axios.defaults.baseURL = 'http://150.158.53.178:9999'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'OnePage',
    component: OnePage
  }
]

const router = new VueRouter({
  routes
})

export default router
