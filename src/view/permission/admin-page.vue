<template>
  <page-layout page-title="admin 可见页" page-type="white">
    <p>当前用户角色： "{{ user }}"</p>
  </page-layout>
</template>

<script>
import PageLayout from '@/components/layout/pageLayout.vue';
import { computed } from 'vue';

export default {
  components: {
    PageLayout
  },
  setup() {
    const user = computed(() => {
      return JSON.parse(localStorage.getItem('userInfo')).user;
    });
    return {
      user
    };
  }
};
</script>
