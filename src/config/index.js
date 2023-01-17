/**
 * 环境配置文件
 * 一般在企业级项目里面有三个环境
 * 开发环境
 * 测试环境
 * 线上环境
**/
// 当前环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development: {
        baseApi: 'https://db-api.amarea.cn',
        mockApi: 'https://www.fastmock.site/mock/671926fb122a9f47cb3da06315f60136/api',
    },
    test: {
        baseApi: 'https://db-api.amarea.cn',
        mockApi: 'https://www.fastmock.site/mock/671926fb122a9f47cb3da06315f60136/api',
    },
    pro: {
        baseApi: 'https://db-api.amarea.cn',
        mockApi: 'https://www.fastmock.site/mock/671926fb122a9f47cb3da06315f60136/api',
    },
}

export default {
    env,
    // mock的总开关
    mock: false,
    ...EnvConfig[env]
}

