import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 'House',
              url: 'Home'
            },
            {
              path: '/user',
              name: 'user',
              label: '个人中心',
              icon: 'user',
              url: 'User'
            },
            {
              path: '/blogs',
              name: 'blogs',
              label: '我的博客',
              icon: 'Collection',
              url: 'Blogs'
            },
            {
              label: '其它',
              icon: 'location',
              path: '/other',
              children: [
                {
                  path: '/page1',
                  name: 'page1',
                  label: '用户管理',
                  icon: 'setting',
                  url: '/Page1'
                },
                {
                  path: '/page2',
                  name: 'page2',
                  label: '博客管理',
                  icon: 'setting',
                  url: '/Page2'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: '/',
              name: 'home',
              label: '首页',
              icon: 'House',
              url: 'Home'
            },
            {
              path: '/user',
              name: 'user',
              label: '个人中心',
              icon: 'user',
              url: 'User'
            },
            {
              path: '/blogs',
              name: 'blogs',
              label: '我的博客',
              icon: 'Collection',
              url: 'Blogs'
            },
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}