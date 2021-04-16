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
            <router-link :to="`${item.path}/${item.children[0].path}`">
              <component :is="$antIcons[item.children[0].meta.icon]" />
              <span>
                {{ item.children[0].meta.title }}
              </span>
            </router-link>
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
export default {
  components: {
    SideMenuItem,
  },
  setup() {
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
        const { keyPath } = e;
        if (keyPath.length > 1) {
          const fullPath = keyPath.reverse().join("/");
          router.push({ path: fullPath }, () => {});
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
