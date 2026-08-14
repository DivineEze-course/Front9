import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "./stores/auth";
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
            component: Home,
            meta: {
        requiresAuth: true
    }
        },

         {
            path: "/game/:id",
            name: "GameDetails",
            component: GameDetails,
            meta: {
        requiresAuth: true
    }
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
            path: "/signup",
            name: "Signup",
            component: Signup,
        },
    ]
})
router.beforeEach(async (to) => {
    const authStore = useAuthStore();

    await authStore.getCurrentUser();

    if (to.meta.requiresAuth && !authStore.user) {
        return "/login";
    }
});
export default router