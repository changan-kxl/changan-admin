<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheList">
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
    cacheList() {
      const list = [
        ...(this.tagNavList.length
          ? this.tagNavList
              .filter((item) => !(item.meta && item.meta.notCache))
              .map((item) => item.name)
          : [])
      ];
      return list;
    }
  }
};
</script>

<style scoped></style>
