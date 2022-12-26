import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/my-blog/',
  // 后端配置
  // server: {
  //   hmr: true,
  //   port: 3001,
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8081/',
  //       secure: false,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/api',
  //       },
  //     }
  //   }
  // },
  
  resolve: {
    alias: {
      // 配置路径别名
      '@': path.resolve(__dirname, './src'),
    }
  },
})
