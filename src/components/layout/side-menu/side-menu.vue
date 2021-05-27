<template>
  <slot></slot>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    mode="inline"
    @click="clickSMItem"
  >
    <template v-for="item in routes">
      <template v-if="!(item.meta && item.meta.hideInMenu)">
        <template v-if="item.children && item.children.length > 0">
          <template v-for="c in item.children" :key="c.path">
            <side-menu-item v-if="c.children" :key="c.path" :parent-item="c"></side-menu-item>
            <a-menu-item v-else :key="`${c.path}`">
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
import SideMenuItem from './side-menu-item';
import { computed, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
  components: {
    SideMenuItem
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const routes = computed(() => store.getters['app/addRouters']);
    const openKeys = ref([]);
    let selectedKeys = computed(() => {
      return [route.name];
    });
    watch(
      () => route.path,
      () => {
        const { path, meta, name } = route;
        store.dispatch('tagNav/addNavItem', {
          name,
          key: path,
          path,
          meta
        });
      }
    );

    const methods = {
      clickSMItem(e) {
        const { keyPath, key } = e;
        // 多级菜单跳转
        if (keyPath.length > 1) {
          const reversePath = keyPath.reverse();
          const fullPath = reversePath.join('/');
          router.push({ path: `/${fullPath}` });
        } else {
          // 一级菜单跳转
          router.push({ path: `/${key}` });
        }
      }
    };

    return {
      ...methods,
      routes,
      selectedKeys,
      openKeys
    };
  }
};
</script>
<style lang="less" scoped></style>
