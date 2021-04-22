<template>
  <slot></slot>
  <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" @click="clickSMItem">
    <template v-for="item in routes">
      <template v-if="!(item.meta && item.meta.hideInMenu)">
        <template v-if="item.children && item.children.length > 1">
          <template v-for="c in item.children" :key="c.path">
            <side-menu-item :parent-item="c" :key="c.path" v-if="c.children"></side-menu-item>
            <a-menu-item :key="`${c.path}`" v-else>
              <component :is="$antIcons[c.meta.icon]" />
              <span>
                {{ c.meta.title }}
              </span>
            </a-menu-item>
          </template>
        </template>
      </template>
    </template>
  </a-menu>
</template>
<script>
import SideMenuItem from './side-menu-item'
import routesList from '@/router/routes.js'
import { computed, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    SideMenuItem
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const routes = computed(() => routesList)
    const openKeys = ref([])
    let selectedKeys = computed(() => {
      if (route.meta.mode) {
        return [route.name]
      }
      return [route.path]
    })

    watch(
      () => route.path,
      () => {
        const { path, meta, name } = route
        store.dispatch('tagNav/addNavItem', {
          name,
          key: path,
          path,
          meta
        })
      }
    )

    const methods = {
      clickSMItem(e) {
        const { keyPath, key } = e
        // 多级菜单跳转
        if (keyPath.length > 1) {
          const reversePath = keyPath.reverse()
          const fullPath = reversePath.join('/')
          router.push({ path: `/${fullPath}` })
        } else {
          // 一级菜单跳转
          router.push({ path: `/${key}` })
        }
      }
    }

    return {
      ...methods,
      routes,
      selectedKeys,
      openKeys
    }
  }
}
</script>
<style lang="less" scoped></style>
