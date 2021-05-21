import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
//  引用mock
import { viteMockServe } from 'vite-plugin-mock';

const { resolve } = require('path');

export default defineConfig(({ command }) => {
  const prodMock = true;
  return {
    base: '/', // 开发或生产环境服务的公共基础路径。
    resolve: {
      extensions: ['.js', '.vue', '.json'], //导入忽略后缀
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
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
              return `ant-design-vue/es/${name}/style/css`;
            }
          }
        ]
      })
    ],
    server: {
      port: 3000,
      open: false,
      proxy: {
        '/api': {
          target: 'http://rap2api.taobao.org/app/mock/273476/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  };
});
