import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import GameDetails from "./views/GameDetails.vue";
import Browse from "./views/Browse.vue";
import Login from "./views/Login.vue";
import Signup from "./views/SignUp.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },

         {
            path: "/game/:id",
            name: "GameDetails",
            component: GameDetails,
        },
        {
            path: "/browse",
            name: "Browse",
            component: Browse,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/browse",
            name: "Browse",
            component: Browse,
        },
        {
            path: "/signup",
            name: "Signup",
            component: Signup,
        },
    ]
})
export default router