import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        name: '登录',
        path: '/login',
        component: ()=> import('../views/Login.vue'),
    },
    {
        name: '注册',
        path: '/register',
        component: ()=> import('../views/Register.vue'),
    }
];

const router = createRouter({
    routes,
    history: createWebHistory('/my-blog/'),
})

export default router