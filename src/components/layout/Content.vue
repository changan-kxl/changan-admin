<template>
  <a-layout-content>
    <router-view v-slot="{ Component }">
      <transition name="zoom-fade" mode="out-in" appear>
        <keep-alive :include="cacheList">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </a-layout-content>
</template>
<script>
export default {
  computed: {
    tagNavList() {
      return this.$store.state.tagNav.tagsList;
    },
    cacheList() {
      const list = [
        ...(this.tagNavList.length
          ? this.tagNavList
              .filter((item) => !(item.meta && item.meta.notCache))
              .map((item) => item.name)
          : [])
      ];
      console.log(list);
      return list;
    }
  },
  mounted() {
    console.log(this.cacheList);
  }
};
</script>
<style lang="less"></style>
