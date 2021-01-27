<template>
  <div>
    <Row :gutter="10">
      <i-col span="12">
        <Select @on-select="loadPermissions($event)" v-model="selected_user" filterable :remote-method="searchUser" :loading="loading">
          <Option v-for="(option, index) in options" :value="option.value" :key="index">{{ option.label }}</Option>
        </Select>
      </i-col>
    </Row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UsersList',
  data () {
    return {
      users_list: [],
      selected_user: '',
      loading: false,
      options: [],
      abortSearch: null
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    ...mapActions([
      'getUsersList'
    ]),
    searchUser (query) {
      if (this.abortSearch) clearTimeout(this.abortSearch)
      if (query !== '' && query.length > 2) {
        this.abortSearch = setTimeout(() => {
          this.loading = true
          this.getUsersList(query).then((result) => {
            function parseName (title, first_name, last_name) {
              return (title ? title + '. ' : '') + (first_name) + (last_name ? ' ' + last_name : '')
            }
            this.options = result.map(r => Object({
              value: r.id,
              label: parseName(r.title, r.first_name, r.last_name),
              extra: r.email
            }))
            this.loading = false
          }).catch(() => {
          })
        }, 1000)
      } else {
        this.options = []
      }
    },
    loadPermissions (dev) {
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="less">
</style>
