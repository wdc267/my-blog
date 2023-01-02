import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [vue(),
    AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
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