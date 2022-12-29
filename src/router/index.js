import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    // {
    //     path: '/',
    //     redirect: '/index',
    // },
    {
        name: '登录',
        path: '/login',
        component: ()=> import('../views/Login.vue'),
    },
    {
        name: '注册',
        path: '/register',
        component: ()=> import('../views/Register.vue'),
    },
    {
        name: '主页',
        path: '/',
        component:()=> import('../views/Home.vue'),
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory('/my-blog/'),
    fallback: 'index.html'
})

export default router