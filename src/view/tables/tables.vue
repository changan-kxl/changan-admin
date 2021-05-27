<template>
  <page-layout page-title="表格" page-type="white">
    <a-table row-key="key" bordered :data-source="tableData.list" :columns="columns">
      <template #action>
        <a-button type="primary" @click="router.push(`/tables/detail`)">详情</a-button>
      </template>
    </a-table>
  </page-layout>
</template>

<script>
import PageLayout from '@/components/layout/pageLayout.vue';
import { onBeforeMount, reactive } from 'vue';
import { getUserList } from '@/request/services/api.js';
import { useRouter } from 'vue-router';
export default {
  components: {
    PageLayout
  },
  setup() {
    const tableData = reactive({
      list: []
    });
    const router = useRouter();
    onBeforeMount(() => {
      getUserList().then((res) => {
        tableData.list = res.data.list;
      });
    });

    return {
      router,
      tableData,
      columns: [
        {
          title: '姓名',
          dataIndex: 'username',
          key: 'username'
        },
        {
          title: '角色',
          dataIndex: 'role',
          key: 'role'
        },
        {
          title: '密码',
          dataIndex: 'password',
          key: 'password'
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          slots: {
            customRender: 'action'
          }
        }
      ]
    };
  }
};
</script>
