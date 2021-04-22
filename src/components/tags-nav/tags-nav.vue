<template>
  <div class="tabs-head">
    <a-tabs
      hide-add
      v-model:activeKey="activeKey"
      type="editable-card"
      @edit="onEdit"
      @tabClick="onTabClick"
    >
      <template v-for="(pageItem, index) in tagsNavList" :key="pageItem.path">
        <a-tab-pane>
          <template #tab>
            <!-- 右键操作栏 -->
            <a-dropdown :trigger="['contextmenu']">
              <div style="display: inline-block">
                {{ pageItem.meta.title }}
              </div>
              <template #overlay>
                <a-menu style="user-select: none">
                  <a-menu-item
                    key="close-left"
                    :disabled="index === 0"
                    @click="closeLeft(pageItem, index)"
                  >
                    <vertical-right-outlined />
                    关闭左侧
                  </a-menu-item>
                  <a-menu-item
                    key="close-right"
                    :disabled="index === tagsNavList.length - 1"
                    @click="closeRight(pageItem, index)"
                  >
                    <vertical-left-outlined />
                    关闭右侧
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item
                    key="close-other"
                    :disabled="tagsNavList.length === 1"
                    @click="closeOther(pageItem)"
                  >
                    <column-width-outlined />
                    关闭其他
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
        </a-tab-pane>
      </template>
    </a-tabs>
  </div>
</template>
<script>
import { ref, computed, watch, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  created() {},
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const tagsNavList = computed(() => store.state.tagNav.tagsList);
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
      const { path } = route;
      if (path === targetKey) return;
      router.push(targetKey);
    };

    const closeLeft = (item, index) => {
      store.commit("tagNav/closeLeftTabs", item);
      activeKey.value = item.key;
      router.replace(item.key);
    };

    const closeRight = (item, index) => {
      store.commit("tagNav/closeRightTabs", item);
      activeKey.value = item.key;
      router.replace(item.key);
    };

    const closeOther = (item) => {
      store.commit("tagNav/closeAnthorTabs", item);
      activeKey.value = item.key;
      router.replace(item.key);
    };

    return {
      activeKey,
      onEdit,
      tagsNavList,
      onTabClick,
      closeLeft,
      closeRight,
      closeOther,
    };
  },
};
</script>
<style lang="less">
@import "./index.less";
</style>
