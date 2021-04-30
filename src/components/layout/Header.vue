<template>
  <a-layout-header>
    <component
      v-if="collapsed"
      :is="'MenuFoldOutlined'"
      class="trigger"
      @click="handleCollapsed(collapsed)"
    />
    <component
      v-else
      class="trigger"
      @click="handleCollapsed(collapsed)"
      :is="'MenuUnfoldOutlined'"
    />
    <div class="ant-layout-breadcrumb">
      <a-breadcrumb separator="">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <template v-for="item in breadcrumbList" :key="item.name">
          <a-breadcrumb-separator v-if="item.title">/</a-breadcrumb-separator>
          <a-breadcrumb-item>{{ item.title }}</a-breadcrumb-item>
        </template>
      </a-breadcrumb>
    </div>
  </a-layout-header>
</template>
<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
  name: 'Header',
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const route = useRoute()
    const breadcrumbList = computed(() => {
      const list =
        route.matched &&
        route.matched.map((item) => {
          return {
            name: item.name,
            path: item.path,
            title: item.meta.title
          }
        })
      return list
    })
    function handleCollapsed(value) {
      context.emit('update:collapsed', !value)
    }
    return {
      handleCollapsed,
      breadcrumbList
    }
  }
}
</script>
<style lang="less" scoped>
  .ant-layout-breadcrumb{
    display: inline-block;
  }
</style>
