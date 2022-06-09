import { createRouter, createWebHistory } from "vue-router"
import Home from "@/components/Home.vue"
import Join from "@/components/Join.vue"
import Login from "@/components/Login.vue"
import List from "@/components/List.vue"
import NotFound from "@/components/NotFound.vue"

const routes = [
  {path: "/", name: "Home", component: Home, alias:"/main"},
  {path: "/join", name: "Join", component: Join},
  {path: "/login", name: "Login", component: Login},
  {path: "/list", name: "List", component: List},
  {path: "/portfolio", name:"NotFound", component: NotFound},
  {path: "/:catchAll(.*)", component: NotFound},
]

const router = createRouter({
  history: createWebHistory(), routes,
})

export default router
