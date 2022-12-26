import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        name: '首页',
        path: '/index',
        component: ()=> import('../views/Index.vue'),
    }
];

const router = createRouter({
    routes,
    history: createWebHistory('/my-blog/'),
})

export default router