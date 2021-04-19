<template>
  <div class="tabs-head">
    <!-- <contextmenu :itemList="menuItemList" :visible="menuVisible" /> -->
    <a-tabs
      hide-add
      class="tabs-container"
      v-model:activeKey="activeKey"
      type="editable-card"
      @edit="onEdit"
      @tabClick="onTabClick"
    >
      <a-tab-pane
        v-for="pane in tagsNavList"
        :key="pane.path"
        :tab="pane.meta.title"
        closable="false"
      >
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { ref, computed, watch, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Contextmenu from "./Contextmenu.vue";

export default {
  components: {
    Contextmenu,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const tagsNavList = computed(() => store.state.tagNav.tagsList);
    const menuItemList = computed(() => [
      { key: "1", icon: "vertical-right", text: 111 },
      { key: "2", icon: "vertical-left", text: 222 },
      { key: "3", icon: "close", text: 333 },
      { key: "4", icon: "sync", text: 444 },
    ]);
    let menuVisible = ref(false);
    let activeKey = ref("/home");
    function setTagNavList() {
      store.commit("tagNav/setTagNavList", [
        {
          name: "home",
          key: "/home",
          path: "/home",
          name: "home",
          meta: {
            title: "控制台",
          },
        },
      ]);
    }
    onMounted(() => {
      setTagNavList();
      router.push("/home");
    });
    watch(
      () => route.path,
      () => {
        activeKey.value = route.path;
        tagsNavList.value = store.state.tagNav.tagsList;
      }
    );

    const remove = (targetKey) => {
      let index = tagsNavList.value.findIndex((item) => item.key === targetKey);
      store.dispatch("tagNav/removeNavItem", { targetKey });
      index =
        index >= tagsNavList.value.length
          ? tagsNavList.value.length - 1
          : index;
      let activePage = "";
      if (tagsNavList.value.length === 0) {
        setTagNavList();
        activePage = "/home";
      } else {
        activePage = tagsNavList.value[index].path;
      }
      router.push(activePage);
    };

    const onEdit = (targetKey, action) => {
      if (action === "add") {
      } else {
        remove(targetKey);
      }
    };

    const onTabClick = (targetKey) => {
      menuVisible.value = true;
      const { path } = route;
      if (path === targetKey) return;
      router.push(targetKey);
    };

    const handleMenuClick = (e) => {
      switch (e.key) {
        // 关闭当前页
        case "close-curr":
          break;
        // 关闭其他标签
        case "close-other":
          break;
        // 关闭所有标签
        case "close-all":
          break;
        default:
          break;
      }
    };

    return {
      activeKey,
      onEdit,
      tagsNavList,
      onTabClick,
      handleMenuClick,
      menuVisible,
      menuItemList,
    };
  },
};
</script>
<style lang="less">
@import "./index.less";
.tabs-container {
  position: relative;
}
</style>
