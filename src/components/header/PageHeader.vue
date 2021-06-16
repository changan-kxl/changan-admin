<template>
  <div class="page-header">
    <div class="page-header-wide">
      <div class="detail">
        <div class="main">
          <div class="row">
            <h1 v-if="title" class="title">{{ title }}</h1>
            <div class="action"><slot name="action"></slot></div>
          </div>
          <div class="row">
            <div class="content">
              <div v-if="avatar" class="avatar"><img :src="avatar" :size="72" /></div>
              <div style="margin-left: 24px">
                <div class="message">
                  <slot name="message"></slot>
                </div>
                <div class="desc"><slot name="desc"></slot></div>
              </div>
            </div>
            <div v-if="$slots.extra" class="extra"><slot name="extra"></slot></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: [String, Boolean],
      required: false,
      default: ''
    },
    breadcrumb: {
      type: Array,
      required: false,
      default: () => []
    },
    logo: {
      type: String,
      required: false,
      default: ''
    },
    avatar: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {}
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
