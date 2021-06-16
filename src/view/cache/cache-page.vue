<template>
  <p>切换tab标签不会清空输入框内容</p>
  <a-input v-model:value="value" placeholder="Basic usage" />
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'cachePage',
  setup() {
    const value = ref('');
    return {
      value
    };
  }
});
</script>
