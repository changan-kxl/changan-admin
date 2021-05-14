<template>
  <header class="ant-layout-header">
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
    <div class="ant-layout-breadcrumb" style="flex: 1">
      <a-breadcrumb separator="">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <template v-for="item in breadcrumbList" :key="item.name">
          <a-breadcrumb-separator v-if="item.title">/</a-breadcrumb-separator>
          <a-breadcrumb-item>{{ item.title }}</a-breadcrumb-item>
        </template>
      </a-breadcrumb>
    </div>
    <div class="right-box">
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          Hover me
        </a>
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
  <div>
    <tags-nav></tags-nav>
  </div>
  <!-- <a-layout-header>
  </a-layout-header> -->
</template>
<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import TagsNav from '../tags-nav'

export default {
  name: 'Header',
  components: { TagsNav },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
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
    async function loginout() {
      await store.commit("login/loginout")
      router.push("/login")
    }
    return {
      handleCollapsed,
      breadcrumbList,
      loginout
    }
  }
}
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
}
</style>
