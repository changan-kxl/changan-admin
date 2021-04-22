<template>
  <div class="footer">
    <div class="links">
      <a target="_blank" :href="linkList"> <GithubOutlined /></a>
    </div>
    <div class="copyright">Copyright<CopyrightCircleOutlined />{{ copyright }}</div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  props: ['linkList', 'copyright']
}
</script>

<style lang="less" scoped>
.footer {
  padding: 48px 16px 24px;
  /*margin: 48px 0 24px;*/
  text-align: center;
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    i {
      margin: 0 4px;
    }
  }
  .links {
    margin-bottom: 8px;
    a:not(:last-child) {
      margin-right: 40px;
    }
    a {
      color: rgba(0, 0, 0, 0.45);
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }
  }
}
</style>
