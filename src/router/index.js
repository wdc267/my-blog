import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Blogs from '../views/Blogs.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Write from '../views/Write.vue'
import View from '../views/View.vue'

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
        name: 'write',
        path: '/write',
        component: Write
    },
    {
        name: 'view',
        path: '/view',
        component: View
    },
    {
        path: '/',
        component: Main,
        name:'home1',
        redirect:'/home',
        children: [
            {
                name: 'home',
                path: '/home',
                component: Home
            },
            {
                name: 'user',
                path: '/user',
                component: User
            },
            {
                name: 'blogs',
                path: '/blogs',
                component: Blogs
            },
            {
                name: 'page1',
                path: '/page1',
                component: Page1
            },
            {
                name: 'page2',
                path: '/page2',
                component: Page2
            },
        ]
        // children: []
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory('/my-blog/'),
    fallback: 'index.html'
})

export default router