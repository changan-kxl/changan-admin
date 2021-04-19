<template>
  <a-layout-content>
    <!-- 面包屑 -->
    <a-breadcrumb separator="">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <template v-for="item in breadcrumbList" :key="item.name">
        <a-breadcrumb-separator v-if="item.title">/</a-breadcrumb-separator>
        <a-breadcrumb-item>{{ item.title }}</a-breadcrumb-item>
      </template>
    </a-breadcrumb>
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheList">
        <component :is="Component" />
      </keep-alive>
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
          : []),
      ];
      return list;
    },
    breadcrumbList() {
      const list =
        this.$route.matched &&
        this.$route.matched.map((item) => {
          return {
            name: item.name,
            path: item.path,
            title: item.meta.title,
          };
        });
      return list;
    },
  },
};
</script>
<style lang="less" scoped>
.ant-breadcrumb {
  margin-bottom: 20px;
}
</style>
