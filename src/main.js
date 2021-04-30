import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store'
import router from './router'
import App from './App.vue'
import * as antIcons from '@ant-design/icons-vue'
import bootstrap from './bootstrap'

const app = createApp(App)

// 注册icon组件
Object.keys(antIcons).forEach((key) => {
  app.component(key, antIcons[key])
})

// 添加icon组件到全局
app.config.globalProperties.$antIcons = antIcons
app.config.globalProperties.$message = message

app.use(store)
app.use(router)
app.use(Antd)

// 系统启动初始化加载
bootstrap({ router, message, store, app })

app.mount('#app')
