/*
*整个Api的管理
*/

import request from './request'
export default {
    // // user组件左侧数据
    // getTableData(params) {
    //     return request({
    //             url: '/user/getTableData',
    //             method: 'get',
    //             data: params,
    //             mock: false
    //     })
    // },
    // getCountData() {
    //     return request({
    //         url: '/user/getCountData',
    //         method: 'get',
    //         mock: false
    //     })
    // },
    // getUserData(params) {
    //     return request({
    //         url: '/userAdmin/getUser',
    //         method: 'get',
    //         mock: false,
    //         data: params
    //     })
    // },
    // addUser(params) {
    //     return request({
    //         url: '/userAdmin/add',
    //         method: 'post',
    //         mock: false,
    //         data: params
    //     })
    // },
    // editUser(params) {
    //     return request({
    //         url: '/userAdmin/edit',
    //         method: 'post',
    //         mock: false,
    //         data: params
    //     })
    // },
    // deleteUser(params) {
    //     return request({
    //         url: '/userAdmin/delete',
    //         method: 'get',
    //         mock: false,
    //         data: params
    //     })
    // },
    // // 根据用户名不同 返回不一样的菜单列表
    // getMenu(params) {
    //     return request({
    //         url: '/permission/getMenu',
    //         method: 'post',
    //         mock: false,
    //         data: params
    //     })
    // }
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
    }
}