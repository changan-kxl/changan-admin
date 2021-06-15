<template>
  <header class="ant-layout-header">
    <component
      :is="'MenuFoldOutlined'"
      v-if="collapsed"
      class="trigger"
      @click="handleCollapsed(collapsed)"
    />
    <component
      :is="'MenuUnfoldOutlined'"
      v-else
      class="trigger"
      @click="handleCollapsed(collapsed)"
    />
    <div class="ant-layout-breadcrumb" style="flex: 1">
      <a-breadcrumb separator="">
        <a-breadcrumb-item>工作台</a-breadcrumb-item>
        <template v-for="item in breadcrumbList" :key="item.name">
          <a-breadcrumb-separator v-if="item.title">/</a-breadcrumb-separator>
          <a-breadcrumb-item>{{ item.title }}</a-breadcrumb-item>
        </template>
      </a-breadcrumb>
    </div>
    <div class="right-box">
      <div class="full-screen-icon">
        <component :is="fullscreenIcon" :style="{ fontSize: '20px' }" @click="toggleFullScreen" />
      </div>
      <a-dropdown>
        <div class="header-avatar">
          <span class="avatar ant-avatar-sm ant-avatar">
            <img src="https://z3.ax1x.com/2021/05/18/ghV5RI.png" />
          </span>
          <span class="name">changan</span>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;" @click="loginout">退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </header>
  <!-- 页签 -->
  <div>
    <tags-nav></tags-nav>
  </div>
</template>
<script>
import { computed, reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import TagsNav from '../tags-nav';

export default {
  name: 'Header',
  components: { TagsNav },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:collapsed'],
  setup(props, context) {
    const state = reactive({
      fullscreenIcon: 'FullscreenOutlined'
    });
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const breadcrumbList = computed(() => {
      const list =
        route.matched &&
        route.matched.map((item) => {
          return {
            name: item.name,
            path: item.path,
            title: item.meta.title
          };
        });
      return list;
    });
    function handleCollapsed(value) {
      context.emit('update:collapsed', !value);
    }
    async function loginout() {
      await store.commit('login/loginout');
      router.push('/login');
    }

    // 切换全屏图标
    const toggleFullscreenIcon = () =>
      (state.fullscreenIcon =
        document.fullscreenElement !== null ? 'FullscreenExitOutlined' : 'FullscreenOutlined');
    // 监听全屏切换事件
    document.addEventListener('fullscreenchange', toggleFullscreenIcon);
    function toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }

    return {
      ...toRefs(state),
      handleCollapsed,
      breadcrumbList,
      loginout,
      toggleFullScreen
    };
  }
};
</script>
<style lang="less" scoped>
.ant-layout-breadcrumb {
  display: flex;
  align-items: center;
}
.right-box {
  display: flex;
  align-self: center;
  padding-right: 20px;
  .full-screen-icon {
    margin-right: 10px;
    padding-top: 5px;
  }
}

.header-avatar {
  cursor: pointer;
}
.ant-avatar-sm {
  width: 24px;
  height: 24px;
  line-height: 24px;
  margin-right: 8px;
  border-radius: 50%;
}

.ant-avatar > img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.header-avatar .name {
  font-weight: 500;
}
</style>
