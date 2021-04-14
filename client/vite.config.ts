import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';


export default defineConfig({
  root: 'client',
  plugins: [vue(), styleImport({
    libs: [
      {
        libraryName: 'element-plus',
        resolveStyle: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      },
    ],
  }),],
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://localhost:2333/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/graphql': {
        target: 'http://localhost:2333/graphql',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: '../app/client'
  }
})

