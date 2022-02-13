import {createRouter, createWebHistory} from 'vue-router'
import Login from '../components/login.vue'
import Signup from '../components/signup.vue'
import Dashboard from '../components/dashboard.vue'

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;