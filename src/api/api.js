/*
*整个Api的管理
*/

import request from './request'
export default {
    getUserData(username) {
        return request({
                url: `/users/${username}`,
                method: 'get',
                mock: false
        })
    },
    addUser(params) {
        return request({
            url: '/users',
            method: 'post',
            mock: false,
            data: params,
        })
    },
    // 删除一个用户
    delUser(username) {
        return request({
            url: `/users/${username}`,
            method: 'delete',
        })
    },
    // // 添加一个新的book
    addBookInfo(id) {
        return request({
            url: `/notes`,
            method: 'post',
            mock: false,
            data: { id: id, bookList: []},
        })
    },
    // 获取book内容
    getBookInfo(username) {
        return request({
            url: `/notes/${username}`,
            method: 'get',
        })
    },
    // 更新book的内容
    updateBookList(username,params) {
        return request({
            url: `/notes/${username}`,
            method: 'put',
            mock: false,
            data: { bookList: params }
        })
    },
    // 删除一个Booklist
    delBookList(username) {
        return request({
            url: `/notes/${username}`,
            method: 'delete',
        })
    },

}