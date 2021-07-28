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
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
  name: 'CommerViews',
  setup() {
    const route = useRoute()
    const store = useStore()
    const notCacheName = computed(() => [
      route.meta && route.meta.notCache ? route.name : ''
    ])
    const tagNavList = computed(() => store.state.tagNav.tagsList)
    const cacheList = computed(() => {
      const list = [
        ...(tagNavList.value.length
          ? tagNavList.value
              .filter((item) => !(item.meta && item.meta.notCache))
              .map((item) => item.name)
          : [])
      ]
      return list
    })
    return {
      tagNavList,
      cacheList,
      notCacheName
    }
  }
}
</script>
