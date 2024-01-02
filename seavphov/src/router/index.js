import { createRouter, createWebHistory } from 'vue-router'
import Home from "../view/Home.vue"
import BookDetail from "../view/BookDetail.vue"
import Login from "../view/Login.vue"
import Signup from "../view/Signup.vue"
import Profile from "../view/Profile.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/signup",
            name: "signup",
            component: Signup,
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile,
        },
        {
            path: "/home",
            name: "home",
            component: Home,
        },
        {
            path: '/home/:id',
            name: 'BookDetail',
            component: BookDetail,
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: '/signup'
        }

    ], scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
})


export default router
