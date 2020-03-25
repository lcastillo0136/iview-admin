<template>
  <div>
    <Card shadow :title="$t('join.title')">
      <row class="join-page" :gutter="32">
        <i-col span="10">
          <img class="qq-group-img" src="../assets/images/icon-qr-qq-wechat.png">
          <row type="flex" justify="center">
            <i-col span="12">
              <p>{{ $t('join.qq_number', {number:621780943}) }}</p>
            </i-col>
            <i-col span="12"></i-col>
          </row>
        </i-col>
        <i-col span="14">
          <div class="join-page-other">
            <Button to="https://zhuanlan.zhihu.com/feview" target="_blank" size="large">
              <img src="../assets/images/icon-social-zhihu.svg" class="join-page-other-icon">
              {{ $t('join.zhihu_column') }}
            </Button>
            <Button to="https://juejin.im/user/56fe494539b0570054f2e032" target="_blank" size="large">
              <img src="../assets/images/icon-social-juejin.svg" class="join-page-other-icon">
              {{ $t('join.juejin') }}
            </Button>
            <Button to="https://live.bilibili.com/1353202" target="_blank" size="large">
              <img src="../assets/images/icon-social-bilibili.svg" class="join-page-other-icon">
              {{ $t('join.bilibili') }}
            </Button>
            <Button to="https://twitter.com/iViewUI" target="_blank" size="large">
              <img src="../assets/images/icon-social-twitter.svg" class="join-page-other-icon">
              {{ $t('join.twitter') }}
            </Button>
          </div>
        </i-col>
      </row>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'join_page',
  data () {
    return {
    }
  }
}
</script>
<style>
  .join-page{
    text-align: center;
  }
  .qq-group-img{
    width: 100%;
  }
  .join-page-other-icon{
    width: 20px;
    vertical-align: middle;
    margin-right: 6px;
  }
  .join-page-other{
    text-align: left;
  }
  .join-page-other .ivu-btn{
    margin-right: 6px;
  }
</style>
