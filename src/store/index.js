import { createStore } from 'vuex'
import Cookie from 'js-cookie'
export default createStore({
    state: {
        isCollapse: true,
        currentMenu: null,
        menu: [],
        token:''
    },
    mutations: {
        updateIsCollapse(state, payload) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            // 判断
            val.name == 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
        },
        // 实现不同用户登录，不同菜单的展示
        setMenu(state, val) {
            state.menu = val
            localStorage.setItem('menu', JSON.stringify(val))
        },
        // 实现数据持久化
        addMenu(state, router) {
            if (!localStorage.getItem('menu')) {
                return
            }
            const menu = JSON.parse(localStorage.getItem('menu'))
            state.menu = menu

            const menuArray = []

            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        let url = `../views/${item.url}.vue`
                        item.component = () => import(url)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    let url = `../views/${item.url}.vue`
                    item.component = () => import(url)
                    menuArray.push(item)
                }
            })
            menuArray.forEach(item => {
                router.addRoute('home1', item);
            })
        },
        // 登录清除数据
        cleanMenu(state) {
            state.menu = []
            localStorage.removeItem('menu')
        },
        setToken(state, val) {
            state.token = val
            Cookie.set('token',val)
        },
        clearToken(state) {
            state.token = ''
            Cookie.remove('token')
        },
        getToken(state) {
            state.token = state.token || Cookie.get('token')
        }
    }
})