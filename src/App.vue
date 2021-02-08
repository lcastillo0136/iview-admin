<template>
  <div id="app" class="v-application">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
.ivu-notice {
  .ivu-notice-with-normal {
    padding: 16px;
    position: relative;
  }
  .ivu-notice-with-icon {
    padding: 16px;
    position: relative;
    text-shadow: 0px 0px 1px #212121;
    &.ivu-notice-with-error {
      background: #ed4014;
    }
    &.ivu-notice-with-success {
      background: #19be6b;
    }
    &.ivu-notice-with-info {
      background: #2db7f5;
    }
    &.ivu-notice-with-warning {
      background: #ff9900;
    }
    .ivu-notice-icon { color: #fff; top: 13px; }

    .ivu-notice-title { color: #fff; }

    .ivu-notice-desc { color: #fff; }
  }

  .ivu-notice-notice {
    padding: 0px;
  }
  .ivu-notice-notice-close i {
    color: #fff;
    text-shadow: 0 0 1px #040404;
  }
}

</style>
