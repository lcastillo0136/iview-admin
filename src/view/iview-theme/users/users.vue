<template>
  <div>
    <Row :gutter="10">
      <i-col span="24">
        <i-table :columns="columns" :data="groups" border :loading="loading">
          <template slot-scope="{ row, index }" slot="available_online">
            <i-switch v-model="row.available_online" @on-change="updateGroup(row)"></i-switch>
          </template>
          <template slot-scope="{ row, index }" slot="actions">
            <div>
              <Button type="primary" size="small" icon="md-create" @click.prevent="updateUserGroup(row)"></Button>
              <Divider type="vertical"></Divider>
              <Button type="error" size="small" icon="md-trash" @click.prevent="borrarUserGroup(row)"></Button>
            </div>
          </template>
        </i-table>
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page :total.sync="pagination.total" :current.sync="pagination.page" @on-change="changePage({})" @on-page-size-change="changePage({ limit: $event })" show-sizer show-total></Page>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'users',
  data () {
    return {
      groups: [],
      columns: [{
        title: this.$t('users.table.name'),
        key: 'name'
      }, {
        title: this.$t('users.table.description'),
        key: 'description'
      }, {
        title: this.$t('users.table.available_online'),
        slot: 'available_online',
        width: 150
      }, {
        title: '  ',
        slot: 'actions',
        width: 120
      }],
      pagination: {
        total: 0,
        page: 1,
        limit: 10
      },
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
