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
    }
}