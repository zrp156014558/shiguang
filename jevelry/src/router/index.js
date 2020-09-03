import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// ***********************************
  const routes = [
  {
    path: "/about/:four_id",
    component: ()=>import("../views/About")
  },
  {
    path: "/login",
    component: () => import("../views/Login"),
  },
  {
    path: "/productlist/:aid/:name", //
    component: () => import("../views/List"),
  },
  {
    path: "/productdetail/:jewelry_id/:aid/:name/:subject", //
    component: () => import("../views/Detail"),
  },
  {
    path: '/',
    component: ()=>import("../views/Index")
  },
  {
    path: "/register",
    component: () => import("../views/Register"),
  },
  
]
// ***********************************
const router = new VueRouter({
  routes
})

export default router
