<template>
  <exception-page home-route="/home" :style="`min-height: 100%`" type="404" />
</template>

<script>
import ExceptionPage from '@/components/exception/ExceptionPage.vue'
export default {
  name: 'Exp404',
  components: { ExceptionPage }
}
</script>

<style scoped lang="less"></style>
