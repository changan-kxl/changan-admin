<template>
  <a-sub-menu :key="parentItem.path">
    <template #title>
      <component :is="$antIcons[parentItem.meta.icon]" />
      <span>{{ parentItem.meta.title }}</span>
    </template>
    <template v-for="item in children">
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <component :is="$antIcons[item.meta.icon]" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <side-menu-item :key="item.path" :parent-item="item"></side-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  name: "SideMenuItem",
  props: {
    parentItem: {
      type: Object,
      default: () => {},
    },
    menuData: {
      type: Object,
      default: () => [],
    },
  },
  computed: {
    children() {
      return this.parentItem.children;
    },
  },
};
</script>
