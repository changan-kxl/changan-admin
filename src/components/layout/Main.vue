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
    <a-layout>
      <Header v-model:collapsed="collapsed" />
      <Content />
    </a-layout>
  </a-layout>
</template>
<script>
import SideMenu from "./side-menu";
import Content from "./Content";
import Header from "./Header";
import { ref } from "vue";

export default {
  components: {
    SideMenu,
    Content,
    Header,
  },
  setup() {
    return {
      collapsed: ref(false),
    };
  },
};
</script>
<style lang="less">
@import "./index.less";
</style>
