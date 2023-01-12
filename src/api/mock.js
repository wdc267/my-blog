import Mock from 'mockjs'
import userApi from './mockData/user'
import userAdminApi from './mockData/userAdmin'
import permissionApi from './mockData/permission'
// 拦截请求
Mock.mock('/user/getData', userApi.getUserData)
// 本地获取user的数据
Mock.mock(/userAdmin\/getUser/, 'get', userAdminApi.getUserList)
Mock.mock(/userAdmin\/add/, 'post', userAdminApi.createUser)
Mock.mock(/userAdmin\/edit/, 'post', userAdminApi.updateUser)
Mock.mock(/userAdmin\/delete/, 'get', userAdminApi.deleteUser)
Mock.mock(/permission\/getMenu/, 'post', permissionApi.getMenu)