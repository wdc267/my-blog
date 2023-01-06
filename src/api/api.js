/*
*整个Api的管理
*/

import request from './request'
export default {
    // user组件左侧数据
    getTableData(params) {
        return request({
                url: '/user/getTableData',
                method: 'get',
                data: params,
                mock: true
        })
    },
    getCountData() {
        return request({
            url: '/user/getCountData',
            method: 'get',
            mock: true
        })
    },
    getUserData(params) {
        return request({
            url: '/userAdmin/getUser',
            method: 'get',
            mock: false,
            data: params
        })
    }
}