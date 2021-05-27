<template>
  <page-layout page-title="按钮权限" page-type="white">
    <h3>下面按钮根据当前用户的权限来显示隐藏：</h3>
    <p>当前用户角色： "{{ permissions }}"</p>
    <p>没权限按钮：<a-button type="primary">查看</a-button></p>
    <p>
      需要 ["管理员"]：<a-button v-has="'admin'" type="primary" plain size="medium">添加</a-button>
    </p>
    <p>
      需要 ["超级管理员"]：<a-button v-has="'superAdmin'" type="danger" plain size="medium"
        >删除</a-button
      >
    </p>
  </page-layout>
</template>

<script>
import { useStore } from 'vuex';
import PageLayout from '@/components/layout/pageLayout.vue';
import { computed } from 'vue';

export default {
  components: {
    PageLayout
  },
  setup() {
    const store = useStore();

    const permissions = computed(() => JSON.parse(store.state.user.role).user);
    return {
      permissions
    };
  }
};
</script>
