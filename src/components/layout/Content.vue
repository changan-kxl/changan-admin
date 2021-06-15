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
// import { computed } from 'vue';
export default {
  // setup() {
  //   const tagNavList = computed(() => this.$store.state.tagNav.tagsList);
  //   const cacheList = computed(() => {
  //     const list = [
  //       ...(this.tagNavList.length
  //         ? this.tagNavList
  //             .filter((item) => !(item.meta && item.meta.notCache))
  //             .map((item) => item.name)
  //         : [])
  //     ];
  //     return list;
  //   });
  //   return {
  //     tagNavList,
  //     cacheList
  //   };
  // }
  computed: {
    tagNavList() {
      return this.$store.state.tagNav.tagsList;
    },
    cacheList() {
      // const list = [
      //   'CommerViews',
      //   ...(this.tagNavList.length
      //     ? this.tagNavList
      //         .filter((item) => !(item.meta && item.meta.notCache))
      //         .map((item) => item.name)
      //     : [])
      // ];
      // console.log(list);
      return ['tables'];
    }
  }
};
</script>
