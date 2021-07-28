<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      width="230"
      :style="{ overflow: 'auto', height: '100vh' }"
    >
      <side-menu>
        <div class="logo-con">
          <img v-if="collapsed" src="/favicon.ico" />
          <a v-else>
            <img src="/favicon.ico" />
            <h1>Vue3.0 Admin</h1>
          </a>
        </div>
      </side-menu>
    </a-layout-sider>
    <a-layout class="el-container is-vertical">
      <Header v-model:collapsed="collapsed" />
      <Content />
      <a-layout-footer class="ant-layout-footer">
        <page-footer
          link-list="https://github.com/changan-kxl/changanAdmin"
          copyright="2021 常安出品"
        />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import SideMenu from './side-menu'
import Content from './Content.vue'
import Header from './Header.vue'
import PageFooter from './footer/PageFooter'
import { ref } from 'vue'

export default {
  components: {
    SideMenu,
    Content,
    Header,
    PageFooter
  },
  setup() {
    return {
      collapsed: ref(false)
    }
  }
}
</script>
<style lang="less">
.main-enter,
.main-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.main-enter-active {
  transition: all 0.2s;
}
.main-leave-active {
  position: absolute;
  transition: all 0.3s;
}
@import './index.less';
</style>
