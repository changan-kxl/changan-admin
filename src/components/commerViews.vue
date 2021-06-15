<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheList" :exclude="notCacheName">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'CommerViews',
  computed: {
    tagNavList() {
      return this.$store.state.tagNav.tagsList;
    },
    notCacheName() {
      console.log(
        'notCacheName' + [this.$route.meta && this.$route.meta.notCache ? this.$route.name : '']
      );
      return [this.$route.meta && this.$route.meta.notCache ? this.$route.name : ''];
    },
    cacheList() {
      console.log([
        'CommerViews',
        ...(this.tagNavList.length
          ? this.tagNavList
              .filter((item) => !(item.meta && item.meta.notCache))
              .map((item) => item.name)
          : [])
      ]);
      return [
        'CommerViews',
        ...(this.tagNavList.length
          ? this.tagNavList
              .filter((item) => !(item.meta && item.meta.notCache))
              .map((item) => item.name)
          : [])
      ];
    }
  }
};
</script>
