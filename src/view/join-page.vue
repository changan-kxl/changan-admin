<template>
  <div class="bg">
    this is 首页
    <button @click="handleClick">Click Me</button>
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
