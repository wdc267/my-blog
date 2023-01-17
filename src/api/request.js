import axios from 'axios'
import config from '../config'
import { ElMessage } from 'element-plus'
// import { options } from 'less'

const NETWORK_ERROR = '网络请求异常，请稍后再试.....'
// 创建一个axios实例对象
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 5000 // 请求超时时间
})
// 在请求之前做一些事情
service.interceptors.request.use((res) => {
    return res
})

// 在请求之后做一些事情
service.interceptors.response.use((res) => {
    
    if (res.status == 200 || 201) {
        return res
    } else {
        // 网络请求错误
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

// 封装的核心函数
function request(options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() == 'get') {
        options.params = options.data
    }
    // 对mock的处理(单独处理)，如果单独定义的mock有定义忽略总的mock
    let isMock = config.mock
    if (typeof options.mock !== 'undefined') {
        isMock = options.mock
    }
    // 对线上环境做处理
    if (config.env == 'prod') {
        // 不给你用到mock的机会
        service.defaults.baseURL = config.baseApi
    } else {
        // 
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }
    return service(options)
}

export default request