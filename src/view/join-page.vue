<template>
  <div class="bg">
    this is 首页
    <button @click="handleClick" v-has="'sys:arch:add'">Click Me</button>
    <a-button type="primary" v-has="'sys:index:vol'">
      Primary
    </a-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$router.push(`/detail/130/detail`)
    }
  }
}
</script>
<style lang="less" scoped>
.bg {
  background: #fff;
}
</style>
