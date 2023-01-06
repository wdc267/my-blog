import { createStore } from 'vuex'
export default createStore({
    state: {
        isCollapse: true,
        currentMenu:null
    },
    mutations: {
        updateIsCollapse(state, payload) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            // 判断
            val.name == 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
        }
    }
})