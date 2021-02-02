<template>
  <div>
    <Row :gutter="10">
      <i-col span="24">
        El pinche godzilla
      </i-col>
    </Row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'settings',
  data () {
    return {
      loading: false
    }
  },
  components: {
  },
  computed: {},
  methods: {
    ...mapActions([
    ])
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="less">
</style>
