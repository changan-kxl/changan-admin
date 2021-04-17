<template>
  <div class="tabs-head">
    <a-tabs
      hide-add
      :class="['tabs-container', 'affixed', 'fixed-header', 'collapsed']"
      v-model:activeKey="activeKey"
      type="editable-card"
      @edit="onEdit"
      @tabClick="onTabClick"
    >
      <a-tab-pane
        v-for="pane in tagNavList"
        :key="pane.path"
        :tab="pane.meta.title"
        closable="false"
      >
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const tagNavList = ref([]);
    let activeKey = ref("");
    watch(
      () => route.path,
      () => {
        activeKey.value = route.path;
        tagNavList.value = store.state.tag.tagsList;
      }
    );

    const newTabIndex = ref(0);

    const add = () => {
      activeKey.value = `newTab${++newTabIndex.value}`;
      panes.value.push({
        title: "New Tab",
        content: "Content of new Tab",
        key: activeKey.value,
      });
    };

    const remove = (targetKey) => {
      let index = tagNavList.value.findIndex((item) => item.key === targetKey);
      store.dispatch("tag/removeNavItem", { targetKey });
      index =
        index >= tagNavList.value.length ? tagNavList.value.length - 1 : index;
      let activePage = "";
      if (tagNavList.value.length === 0) {
        store.dispatch("tag/addNavItem", {
          key: "/home/home",
          path: "/home/home",
          meta: {
            title: "首页",
          },
        });
        activePage = "/home/home";
      } else {
        activePage = tagNavList.value[index].path;
      }
      router.push(activePage);
    };

    const onEdit = (targetKey, action) => {
      if (action === "add") {
        add();
      } else {
        remove(targetKey);
      }
    };

    const onTabClick = (targetKey) => {
      const { path } = route;
      if(path === targetKey) return;
      router.push(targetKey);
    };

    return {
      activeKey,
      onEdit,
      tagNavList,
      onTabClick,
    };
  },
};
</script>
<style lang="less">
@import "./index.less";
</style>
