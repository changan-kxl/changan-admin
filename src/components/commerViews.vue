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
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'CommerViews',
  setup() {
    const store = useStore();
    const notCacheName = computed(() => [
      this.$route.meta && this.$route.meta.notCache ? this.$route.name : ''
    ]);
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
      cacheList,
      notCacheName
    };
  }
};
</script>
