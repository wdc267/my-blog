import axios from 'axios'
import { ElMessage } from 'element-plus'

const NETWORK_ERROR = '网络请求异常，请稍后再试.....'
// 创建一个axios实例对象
const service = axios.create({
    baseURL: "https://db-api.amarea.cn",
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
    service.defaults.baseURL = "https://db-api.amarea.cn"
    return service(options)
}

export default request