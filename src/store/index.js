import { createStore } from 'vuex'
import Cookie from 'js-cookie'
export default createStore({
    state: {
        isCollapse: true,
        isHomePage: true,
        currentMenu: null,
        currentBook: 0,
        bookList: [
            {
                id: '001',
                index: 0,
                title: "第一个笔记",
                bookInfo: [
                    { id: '001', index: 0, text: '吃饭', iscurrent: true, isfocus: false, ismarked: false },
                    { id: '002', index: 1, text: '睡觉', iscurrent: false, isfocus: false, ismarked: false },
                    { id: '003', index: 2, text: '打豆豆', iscurrent: false, isfocus: false, ismarked: false },
                ],
                tag: "vue",
                createTime: "",
                updateTime: "2022-12-12",
                isActive: true,
                writer: "wdc",
            },
            {
                id: '002',
                index: 1,
                title: "第二个笔记",
                bookInfo: [
                    { id: '001', index: 0, text: '吃饭了', iscurrent: true, isfocus: false, ismarked: false },
                    { id: '002', index: 1, text: '睡觉了', iscurrent: false, isfocus: false, ismarked: false },
                    { id: '003', index: 2, text: '打豆豆了', iscurrent: false, isfocus: false, ismarked: false },
                ],
                tag: "react",
                createTime: "",
                updateTime: "2022-12-13",
                isActive: false,
                writer: "wdc1",
            },
            {
                id: '002',
                index: 1,
                title: "第二个笔记",
                bookInfo: [
                    { id: '001', index: 0, text: '吃饭了', iscurrent: true, isfocus: false, ismarked: false },
                    { id: '002', index: 1, text: '睡觉了', iscurrent: false, isfocus: false, ismarked: false },
                    { id: '003', index: 2, text: '打豆豆了', iscurrent: false, isfocus: false, ismarked: false },
                ],
                tag: "react",
                createTime: "",
                updateTime: "2022-12-13",
                isActive: false,
                writer: "wdc1",
            },
            {
                id: '002',
                index: 1,
                title: "第二个笔记",
                bookInfo: [
                    { id: '001', index: 0, text: '吃饭了', iscurrent: true, isfocus: false, ismarked: false },
                    { id: '002', index: 1, text: '睡觉了', iscurrent: false, isfocus: false, ismarked: false },
                    { id: '003', index: 2, text: '打豆豆了', iscurrent: false, isfocus: false, ismarked: false },
                ],
                tag: "react",
                createTime: "",
                updateTime: "2022-12-13",
                isActive: false,
                writer: "wdc1",
            },
            {
                id: '002',
                index: 1,
                title: "第二个笔记",
                bookInfo: [
                    { id: '001', index: 0, text: '吃饭了', iscurrent: true, isfocus: false, ismarked: false },
                    { id: '002', index: 1, text: '睡觉了', iscurrent: false, isfocus: false, ismarked: false },
                    { id: '003', index: 2, text: '打豆豆了', iscurrent: false, isfocus: false, ismarked: false },
                ],
                tag: "react",
                createTime: "",
                updateTime: "2022-12-13",
                isActive: false,
                writer: "wdc1",
            },
            {
                id: '002',
                index: 1,
                title: "第二个笔记",
                bookInfo: [
                    { id: '001', index: 0, text: '吃饭了', iscurrent: true, isfocus: false, ismarked: false },
                    { id: '002', index: 1, text: '睡觉了', iscurrent: false, isfocus: false, ismarked: false },
                    { id: '003', index: 2, text: '打豆豆了', iscurrent: false, isfocus: false, ismarked: false },
                ],
                tag: "react",
                createTime: "",
                updateTime: "2022-12-13",
                isActive: false,
                writer: "wdc1",
            },
            {
                id: '002',
                index: 1,
                title: "第二个笔记",
                bookInfo: [
                    { id: '001', index: 0, text: '吃饭了', iscurrent: true, isfocus: false, ismarked: false },
                    { id: '002', index: 1, text: '睡觉了', iscurrent: false, isfocus: false, ismarked: false },
                    { id: '003', index: 2, text: '打豆豆了', iscurrent: false, isfocus: false, ismarked: false },
                ],
                tag: "react",
                createTime: "",
                updateTime: "2022-12-13",
                isActive: false,
                writer: "wdc1",
            },
        ],
    },
    getters: {
        nowIndex(state) {
            let a = 0//当前有current类的cell的下标
            for (let i = 0; i < state.bookList[state.currentBook].bookInfo.length; i++) {
                if (state.bookList[state.currentBook].bookInfo[i].iscurrent || state.bookList[state.currentBook].bookInfo[i].isfocus) {
                    a = i;
                    break;
                }
            }
            return a;
        }
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
        // 登录清除数据
        cleanData(state) {
            // state.menu = []
            localStorage.removeItem('userInfo')
        },
    }
})