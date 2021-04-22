<template>
  <div class="common-layout">
    <div class="content"><slot></slot></div>
    <page-footer :link-list="linkList" :copyright="copyright"></page-footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import PageFooter from './footer/PageFooter'
export default {
  name: 'CommonLayout',
  components: { PageFooter },
  setup() {
    const linkList = ref('https://github.com/changan-kxl/changanAdmin')
    const copyright = ref('2021 常安出品')
    return {
      linkList,
      copyright
    }
  }
}
</script>

<style scoped lang="less">
.common-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background-color: #f0f2f5;
  background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 110px;
  background-size: 100%;
  .content {
    padding: 32px 0;
    flex: 1;
    @media (min-width: 768px) {
      padding: 112px 0 24px;
    }
  }
}
</style>
