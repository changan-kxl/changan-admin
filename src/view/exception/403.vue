<template>
  <exception-page home-route="/home" :style="`min-height: 100%`" type="403" />
</template>

<script>
import ExceptionPage from '@/components/exception/ExceptionPage.vue'
export default {
  name: 'Exp403',
  components: {ExceptionPage},
}
</script>

<style scoped lang="less">
</style>