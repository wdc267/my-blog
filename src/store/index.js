import { createStore, storeKey } from 'vuex'
import { nanoid } from 'nanoid'
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
                createTime: "2022-12-12",
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
        ],
    },
    getters: {
        nowIndex(state, getters) {
            let a = 0//当前有current类的cell的下标
            for (let i = 0; i < state.bookList[getters.nowBook].bookInfo.length; i++) {
                if (state.bookList[getters.nowBook].bookInfo[i].iscurrent || state.bookList[getters.nowBook].bookInfo[i].isfocus) {
                    a = i;
                    break;
                }
            }
            return a;
        },
        nowBook(state) {
            let a = 0;
            for (let i = 0; i < state.bookList.length; i++) {
                if (state.bookList[i].isActive === true) {
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
        // 创建一个新的book
        addBook(state) {
            // 修改状态
            for (let i = 0; i < state.bookList.length; i++) {
                state.bookList[i].isActive = false;
            }
            let nowdate = new Date();
            let year = nowdate.getFullYear();
            let month = nowdate.getMonth() + 1;
            let date = nowdate.getDate();
            let createTime = year + '-' + month + '-' + date;
            let userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const newBook = {
                id: nanoid(),
                index: state.bookList.length,
                title: '',
                bookInfo: [{ id: nanoid(), index: 0, text: '123', iscurrent: true, isfocus: false, ismarked: false },],
                tag: '',
                createTime: createTime,
                updateTime: createTime,
                isActive: true,
                writer: userInfo.id
            }
            state.bookList.push(newBook);
        },
        // 改变blog编辑转态
        changeBookActive(state,index) {
            for (let i = 0; i < state.bookList.length; i++) {
                state.bookList[i].isActive = false;
            }
            state.bookList[index].isActive = true;
        },
    }
})