import { createApp } from 'vue'
import './assets/less/index.less'
import App from './App.vue'
import router from '@/router'
import '@/assets/icon/iconfont.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index.js'
import api from './api/api'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$api = api
// 路由守卫
function checkRouter(path) {
    let hashCheck = router.getRoutes().filter(route => route.path == path).length
    if (hashCheck) {
        return  true
    } else {
        return false
    }
}
// router.beforeEach((to, from, next) => {
//     if (!localStorage.getItem('userInfo') && to.name !== 'login' && to.name !== 'register'){
//         next({name: 'login'})
//     } else if (!checkRouter(to.path)) { 
//         next({name: 'home'})
//     } else {
//         next()
//     }
// })
app.use(router).use(store);
app.mount('#app')
