<template>
  <div>
    <Button size="large" type="text" @click="backHome">{{ $t(`error.${code}.go_home`) }}</Button>
    <Button size="large" type="text" @click="backPrev">{{ $t(`error.${code}.go_back`) }}({{ second }}s)</Button>
  </div>
</template>

<script>
import './error.less'
export default {
  name: 'backBtnGroup',
  data () {
    return {
      second: 5,
      timer: null
    }
  },
  props: {
    code: String
  },
  methods: {
    backHome () {
      this.$router.replace({
        name: this.$config.homeName
      }).catch(() => {})
    },
    backPrev () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.second--
      if (this.second < 0) this.second = 5
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
