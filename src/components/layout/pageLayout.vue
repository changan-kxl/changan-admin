<template>
  <div class="page-layout">
    <page-header
      ref="pageHeader"
      :style="`margin-top: ${multiPage ? 0 : -24}px`"
      :title="pageTitle"
      :logo="logo"
      :avatar="avatar"
    >
      <template #message>{{ message }}</template>
      <template #desc>{{ desc }}</template>
    </page-header>
    <div ref="page" :class="['page-content']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  components: { PageHeader },
  props: {
    pageTitle: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: 'https://z3.ax1x.com/2021/05/18/ghV5RI.png'
    },
    message: {
      type: String,
      default: '欢迎，changan，要不要打一把 DOTA'
    },
    desc: {
      type: String,
      default: '船长 | 海贼草帽团'
    }
  }
};
</script>

<style>
.page-content {
  position: relative;
  padding: 0 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  position: relative;
  background: #f0f2f5;
  border-radius: 2px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
</style>
