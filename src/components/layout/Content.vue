<template>
  <a-layout-content>
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </a-layout-content>
</template>
<script>
import PageToggleTransition from '../transition/PageToggleTransition'

export default {
  components: {
    PageToggleTransition
  },
  data() {
    return {
      animate: { disabled: false, name: 'lightSpeed', direction: 'left' }
    }
  },
  computed: {
    tagNavList() {
      return this.$store.state.tagNav.tagsList
    },
    cacheList() {
      const list = [
        ...(this.tagNavList.length
          ? this.tagNavList
              .filter((item) => !(item.meta && item.meta.notCache))
              .map((item) => item.name)
          : [])
      ]
      return list
    }
  }
}
</script>
<style lang="less"></style>
