import Mock from 'mockjs'
import userApi from './mockData/user'
// 拦截请求
Mock.mock('/user/getData', userApi.getUserData)