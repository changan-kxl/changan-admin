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
  </a-layout-header>
</template>
<script>
export default {
  name: 'Header',
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    function handleCollapsed(value) {
      context.emit('update:collapsed', !value)
    }
    return {
      handleCollapsed
    }
  }
}
</script>
