<template>
  <a-layout-content class="ant-layout-content" style="overflow: auto">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </a-layout-content>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const tagNavList = computed(() => store.state.tagNav.tagsList);
    const cacheList = computed(() => {
      const list = [
        ...(tagNavList.value.length
          ? tagNavList.value
              .filter((item) => !(item.meta && item.meta.notCache))
              .map((item) => item.name)
          : [])
      ];
      return list;
    });
    return {
      tagNavList,
      cacheList
    };
  }
};
</script>
