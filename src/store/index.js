import { createStore, storeKey } from 'vuex'
// import { getCurrentInstance } from 'vue'
import { nanoid } from 'nanoid'
export default createStore({
    state: {
        isCollapse: true,
        isHomePage: true,
        currentMenu: null,
        currentBook: 0,
        bookList: [
        ],
        userInfo: {},
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
        setUserInfo(state, val) {
            state.userInfo = val
            localStorage.setItem('userInfo', JSON.stringify(val))
        },
        // 数据持久化
        addUserInfo(state) {
            if (!localStorage.getItem('userInfo')) {
                return
            }
            const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            state.userInfo = userInfo;
        },
        // 设置bookList，并保存到localStorage中
        setBook(state, val) {
            state.bookList = val
            localStorage.setItem('bookList', JSON.stringify(val))
        },
        // 数据持久化
        addBookList(state) {
            if (!localStorage.getItem('bookList')) {
                return
            }
            const bookList = JSON.parse(localStorage.getItem('bookList'))
            state.bookList = bookList;
        },
        // 登录清除数据
        cleanData(state) {
            // state.menu = []
            localStorage.removeItem('userInfo')
            localStorage.removeItem('bookList')
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
                title: '',
                bookInfo: [{ id: nanoid(), index: 0, text: '', iscurrent: true, isfocus: false, ismarked: false },],
                tag: 'vue',
                createTime: createTime,
                updateTime: createTime,
                isActive: true,
                writer: userInfo.id
            }
            state.bookList.push(newBook);
            localStorage.setItem('bookList', JSON.stringify(state.bookList));
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