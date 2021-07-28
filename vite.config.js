import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
//  引用mock
import { viteMockServe } from 'vite-plugin-mock'

import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const prodMock = true
  return {
    plugins: [
      vue(),
      viteMockServe({
        supportTs: false,
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `
      }),
      styleImport({
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/css`
            }
          }
        ]
      })
    ],
    resolve: {
      extensions: ['.js', '.vue', '.json'], //导入忽略后缀
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
    },
    base: './', // 设置打包路径
    server: {
      port: 3000,
      open: false,
      cors: true // 允许跨域

      // proxy: {
      //   '/api': {
      //     target: 'http://rap2api.taobao.org/app/mock/273476/',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // }
    }
  }
})
