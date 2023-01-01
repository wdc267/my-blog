import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
// import { makeInstaller } from 'element-plus';
const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'home',
        path: '/',
        component: Main,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            }
        ]
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory('/my-blog/'),
    fallback: 'index.html'
})

export default router