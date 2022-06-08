import { createRouter, createWebHashHistory } from "vue-router"
import Home from "@/components/Home.vue"
import Join from "@/components/Join.vue"
import Login from "@/components/Login.vue"
import About from "@/components/About.vue"

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/join", name: "Join", component: Join},
  {path: "/login", name: "Login", component: Login},
  {path: "/about", name: "About", component: About},
  {path: "/portfolio", redirect:"/"},
]

const router = createRouter({
  history: createWebHashHistory(), routes,
})

export default router