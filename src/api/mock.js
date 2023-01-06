import Mock from 'mockjs'
import userApi from './mockData/user'
import userAdminApi from './mockData/userAdmin'
// 拦截请求
Mock.mock('/user/getData', userApi.getUserData)
// 本地获取user的数据
Mock.mock(/userAdmin\/getUser/, 'get', userAdminApi.getUserList)