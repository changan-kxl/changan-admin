<template>
  <slot></slot>
  <a-menu
    theme="dark"
    mode="inline"
    v-model:selectedKeys="selectedKeys"
    @click="clickSMItem"
  >
    <template v-for="item in routes">
      <template v-if="!item.meta.hideInMenu">
        <!-- submenu -->
        <template v-if="item.children && item.children.length > 1">
          <side-menu-item :parent-item="item" :key="item.path"></side-menu-item>
        </template>
        <!-- menu-item -->
        <template v-else>
          <a-menu-item
            :key="`${item.path}/${item.children[0].path}`"
            v-if="item.children"
          >
            <component :is="$antIcons[item.children[0].meta.icon]" />
            <span>
              {{ item.children[0].meta.title }}
            </span>
          </a-menu-item>
        </template>
      </template>
    </template>
  </a-menu>
</template>
<script>
import SideMenuItem from "./side-menu-item";
import routesList from "@/router/routes.js";
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  components: {
    SideMenuItem,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const routes = computed(() => routesList);
    const openKeys = ref([]);
    let selectedKeys = computed(() => {
      if (route.meta.mode) {
        return [route.name];
      }
      return [route.path];
    });

    const methods = {
      clickSMItem(e) {
        const { keyPath, key } = e;
        // 多级菜单跳转
        if (keyPath.length > 1) {
          const fullPath = keyPath.reverse().join("/");
          router.push({ path: fullPath }, () => {});
          store.dispatch("tag/addNavItem", {
            key,
            path: fullPath,
            meta: route.meta,
          });
        } else {
          // 一级菜单跳转
          router.push({ path: key }, () => {});
          store.dispatch("tag/addNavItem", {
            key,
            path: key,
            meta: route.meta,
          });
        }
      },
    };

    return {
      ...methods,
      routes,
      selectedKeys,
      openKeys,
    };
  },
};
</script>
<style lang="less" scoped></style>
