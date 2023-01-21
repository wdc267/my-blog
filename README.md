## 博客网站实验报告

### 本人信息

姓名：王德才

学号：0204352

### 网站介绍

名称： wdc的个人博客

主题：用于记录学习过程的博客网站

### 网站设计

#### 内容模块

网站共有7个模块，作用和功能如下

1. 登录页面：在已注册账号的情况下，输入用户id和password(密码)即可登录账号。

2. 注册页面：输入个人信息，表单校验成功后，若用户id不存在，则可注册成功。

3. 网站首页：左侧展示最近发表的博文，可点击博文标题进行查看。右侧展示不同分类的博文

4. 个人中心：用于展示用户的个人信息，用户身份。

5. 我的博客：用于管理自身的博文。用户可以通过路由跳转查看、编辑、删除选中的博文。

6. 发布博客：新增空白博客后，路由跳转至博客编辑系统进行创作，在博客编辑系统中可以修改博文标题和内容，对cell单元格进行上下移动，增加（向上插入、向下插入），删除等操作；cell有markdown、普通文本两种状态（单击cell外框，按'm'键可以进行切换）；网页左侧是博文信息展示。
7. 其它（待完善）

#### 页面组织架构

网站首页分为

1. 左侧路由导航栏
2. 顶部容器：侧边栏折叠按钮、登录注册跳转链接、发布博客按钮（路由跳转至博客编辑系统）、用户操作（退出登录、注销、前往个人中心）、下拉菜单
3. 右侧内容展示区

### 网站内容

#### 主要技术及工具

vue3+vite、js、less、vue-router、vuex、axios、element-plus

#### 主要内容实现方式

  1. 项目搭建：通过vite使用vue3进行项目搭建。
  2. 页面构建：借助第三方框架element-plus进行页面布局，引入element-plus中的组件进行复用，通过less设置css样式，
  3. 登录注册表单表单校验：使用element-plus的自定义验证规则来完成表单的验证，包括设置必填项、对密码进行二次验证。
  4. 组件间通信： 父子间相互通信通过`defineProps` 和 `defineEmits` API实现，任意组件间通信通过vuex实现。
  5. 发送请求：通过对axios进行二次封装发送get、post、put、delete请求。
  6. 路由管理：引入vue-router实现路由间跳转、路由守卫、编程式导航等功能。

#### 设计过程中遇到的各种问题

1. GitHub Pages 上使用 Vite 和 Vue 部署静态站点，刷新部分网站页面时出现 404 Not Found 错误。

   通常情况下，如果想把 Vite + Vue 项目部署到 GitHub Pages 上，需要使用 hash 模式来维护路由状态。这是因为，GitHub Pages 是一个静态文件服务器，它不支持服务器端渲染，因此只能使用前端路由来维护路由状态。

   使用 hash 模式的一个缺点是，URL 地址栏中会出现一个 # 符号和路由路径，例如 <http://example.com/#/about。这可能不太美观，但是对于> GitHub Pages 这种静态文件服务器来说，这是一种可以接受的方案。

2. 在vite+vue项目中用mock模拟数据·，axios向线上mock发送get请求，为什么执行npm run build后Failed to load resource: the server responded with a status of 404 (Not Found)

   当执行 `npm run build` 命令时，Vue 项目会进行生产环境构建。在生产环境构建过程中，Vue 会去除掉一些开发环境中的代码，如 mock 数据。

   因此，在执行 `npm run build` 后，使用 mock 数据的 axios 请求可能会失败，并显示 "Failed to load resource: the server responded with a status of 404 (Not Found)" 的错误信息。

   要解决这个问题，可以考虑在生产环境中使用真实的后端 API 来代替 mock 数据。

3. vite打包报错：块的大小超过限制，Some chunks are larger than 500kb after minification。

   1、加大限制的大小将500kb改成1000kb或者更大：

   2、分解块，将大块分解成更小的块,在vite.config.js当中的build下面进行配置

   ```js
    build: {
       sourcemap: false,
       minify: 'terser',
       chunkSizeWarningLimit: 1500,
       terserOptions: {
         compress: {
           drop_console: true,
           drop_debugger: true
         }
       },
       rollupOptions: {
         output: {
           manualChunks(id) {
             if (id.includes('node_modules')) {
               return id
                 .toString()
                 .split('node_modules/')[1]
                 .split('/')[0]
                 .toString();
             }
           },
           chunkFileNames: (chunkInfo) => {
             const facadeModuleId = chunkInfo.facadeModuleId
               ? chunkInfo.facadeModuleId.split('/')
               : [];
             const fileName =
               facadeModuleId[facadeModuleId.length - 2] || '[name]';
             return `js/${fileName}/[name].[hash].js`;
           }
         }
       }
     },
   ```

4. 携带参数进行路由跳转

   使用query或params方式传参。参考文档:[(79条消息) Vue 之 路由跳转传参方式详解【最全实用总结】_八了个戒的博客-CSDN博客_vue跳转路劲传参转为安全码](https://blog.csdn.net/XH_jing/article/details/118334533?spm=1001.2014.3001.5506)

5. 页面刷新数据丢失

   刷新页面vuex中数据会丢失，通过localStorage临时存储数据。

除此之外，在项目构建过程中因为对vue、git、axios使用不熟悉还遇到许多细节上的问题，在这里不一一总结。

### 总结

大致实现博客网站的功能，用户可以发布、修改、查看自己的博文记录自身学习过程。

在许多细节方面做的还不够完善，部分功能未能实现（如：对博文进行置顶；对博文进行点赞、分享、评论；通过笔记名称来搜索笔记；字体大小，主题模式（至少两种，例如白天、夜间）等）

在未来学习前端的过程中要多实践，在实践中去不断提升自己。同时要掌握好一些基本工具的使用如git，打好前端基础。最后不断学习先进技术来完善自己，让自身更具竞争力。
