<template>
  <div>
    <Card shadow>
      <Row type="flex" align="middle">
        <i-col span="4">
          <Button @click="createTagParams">{{ $t('toolsMethods.add_label') }}</Button>
        </i-col>
        <i-col span="20">
          <p>{{ $t('toolsMethods.dynamic_routing') }}，{{ $t('toolsMethods.add') }}params</p>
        </i-col>
      </Row>
    </Card>
    <Card shadow style="margin-top: 10px;">
      <Row type="flex" align="middle">
        <i-col span="4">
          <Button @click="createTagQuery">{{ $t('toolsMethods.add_label') }}</Button>
        </i-col>
        <i-col span="20">
          <p>{{ $t('toolsMethods.dynamic_routing') }}，{{ $t('toolsMethods.add') }}query</p>
        </i-col>
      </Row>
    </Card>
    <Card shadow style="margin-top: 10px;">
      <Row type="flex" align="middle">
        <i-col span="4">
          <Button @click="handleCloseTag">{{ $t('toolsMethods.close_this') }}</Button>
        </i-col>
        <i-col span="20">
          <p>{{ $t('toolsMethods.close_manually') }}</p>
        </i-col>
      </Row>
    </Card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'tools_methods_page',
  methods: {
    ...mapMutations([
      'closeTag'
    ]),
    createTagParams () {
      const id = parseInt(Math.random() * 100000)
      const route = {
        name: 'params',
        params: {
          id: id,
          title: '{{ toolsMethods.dynamic_routing }}'
        },
        meta: {
          title: '{{ toolsMethods.dynamic_routing }}',
          beforeCloseName: 'before_close_normal'
        }
      }
      this.$router.push(route)
    },
    createTagQuery () {
      const id = parseInt(Math.random() * 100000)
      const route = {
        name: 'query',
        query: {
          id
        },
        meta: {
          title: this.$t('toolsMethods.parameter') + `-${id}`
        }
      }
      this.$router.push(route)
    },
    handleCloseTag () {
      this.closeTag({
        name: 'tools_methods_page'
      })
    }
  }
}
</script>

<style>

</style>
