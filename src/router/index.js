import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'overview',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CardOverview.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
