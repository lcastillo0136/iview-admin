<template>
  <v-card flat>
    <v-card-text>
      <div class="text-h4 font-weight-black">{{ $t('users.title_list') }}</div>
      <Row class="mt-6">
        <i-col span="2" class="grey--text"><span class="ivu-tag-color-success">{{ users_list.length }}</span> {{ $t('users.user_count') }}</i-col>
      </Row>
      <v-divider class="mt-1 mb-10"></v-divider>
      <Row :gutter="10">
        <i-col span="24">
          <i-table :columns="columns" :data="users_list" border :loading="loading">
            <template slot-scope="{ row, index }" slot="avatar">
              <Avatar :src="row.avatar" class="dis-block mx-md-auto">
                {{ row.first_name | avatar }}
              </Avatar>
            </template>
            <template slot-scope="{ row, index }" slot="name">
              {{ row.title }} {{ row.first_name }} {{ row.last_name }}
            </template>
            <template slot-scope="{ row, index }" slot="role">
              {{ row.Role.name }}
            </template>
            <template slot-scope="{ row, index }" slot="active" >
              <Tag color="success" v-if="row.active">{{ $t('users.status.active') }}</Tag>
              <Tag color="error" v-if="!row.active">{{ $t('users.status.disabled') }}</Tag>
            </template>
            <template slot-scope="{ row, index }" slot="last_login">
              <span class="font-weight-medium" v-if="row.last_login">
                <Time :time="row.last_login" />
              </span>
              <span class="font-weight-medium" v-else>
                ----
              </span>
            </template>
            <template slot-scope="{ row, index }" slot="actions">
              <div>
                <Button type="primary" size="small" icon="md-create" @click.prevent="openUser(row)"></Button>
                <Divider type="vertical"></Divider>
                <Button type="error" size="small" icon="md-trash" @click.prevent="borrarUser(row)"></Button>
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
    </v-card-text>
    <v-btn color="blue darken-2" fab fixed bottom right @click="navigateAdd()">
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
    <Modal v-model="deleteModal" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>{{ $t('users.delete.title') }}</span>
      </p>
      <div style="text-align:center">
        <p>{{ $t('users.delete.content', { username: selected_user.username }) }}</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="deleteOkUserGroup()">{{ $t('users.delete.button') }}</Button>
      </div>
    </Modal>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex'
import { encrypt } from '@/libs/util'

export default {
  name: 'UsersSettings',
  props: {
    groups: Array
  },
  data () {
    return {
      users: [],
      columns: [{
        title: '  ',
        slot: 'avatar',
        width: 64
      }, {
        title: this.$t('users.table.name'),
        slot: 'name',
        sortable: true,
        renderHeader: (h, props) => {
          return h('span', {
            domProps: {
              innerHTML: this.$t('users.table.name')
            }
          })
        }
      }, {
        title: this.$t('users.table.username'),
        key: 'username',
        sortable: true,
        renderHeader: (h, props) => {
          return h('span', {
            domProps: {
              innerHTML: this.$t('users.table.username')
            }
          })
        }
      }, {
        title: this.$t('users.table.role'),
        slot: 'role',
        sortable: true,
        renderHeader: (h, props) => {
          return h('span', {
            domProps: {
              innerHTML: this.$t('users.table.role')
            }
          })
        }
      }, {
        title: this.$t('users.table.active'),
        slot: 'active',
        sortable: true,
        renderHeader: (h, props) => {
          return h('span', {
            domProps: {
              innerHTML: this.$t('users.table.active')
            }
          })
        }
      }, {
        title: this.$t('users.table.last_login'),
        slot: 'last_login',
        sortable: true,
        renderHeader: (h, props) => {
          return h('span', {
            domProps: {
              innerHTML: this.$t('users.table.last_login')
            }
          })
        }
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
      sort: {
        column: 'first_name',
        type: 'asc'
      },
      loading: false,
      deleteModal: false,
      fab: false
    }
  },
  components: {
  },
  watch: {
  },
  computed: {
    users_list () {
      return (this.users || []).sort((u, u1) => {
        switch (this.sort.column) {
          case 'first_name':
            if (this.sort.type === 'asc') {
              return u.first_name < u1.first_name ? 1 : -1
            } else {
              return u1.first_name < u.first_name ? 1 : -1
            }
          case 'username':
            if (this.sort.type === 'asc') {
              return u.username < u1.username ? 1 : -1
            } else {
              return u1.username < u.username ? 1 : -1
            }
          case 'role':
            if (this.sort.type === 'asc') {
              return u.Role.name < u1.Role.name ? 1 : -1
            } else {
              return u1.Role.name < u.Role.name ? 1 : -1
            }
          case 'active':
            if (this.sort.type === 'asc') {
              return u.active < u1.active ? 1 : -1
            } else {
              return u.active > u1.active ? 1 : -1
            }
          case 'last_login':
            if (this.sort.type === 'asc') {
              return u.last_login < u1.last_login ? 1 : -1
            } else {
              return u1.last_login < u.last_login ? 1 : -1
            }
        }
        return 0
      })
    },
    selected_user () {
      return this.users.find(f => f.selected) || {}
    }
  },
  methods: {
    ...mapActions([
      'getUsersList',
      'deleteUser'
    ]),
    loadData () {
      return new Promise((resolve, reject) => {
        this.getUsersList('').then((result) => {
          this.users = result
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    notify (message) {
      this.$Notice.error({
        title: 'Logout Error',
        desc: this.$t('logout.messages.error.' + message)
      })
    },
    toggleSort (column) {
      if (this.sort.column !== column) {
        this.sort.column = column
        this.sort.type = 'asc'
      } else {
        this.sort.type = this.sort.type === 'asc' ? 'desc' : 'asc'
      }
    },
    navigateAdd () {
      this.$router.push({
        path: '/users/add'
      }).catch(() => {})
    },
    openUser (user) {
      this.$router.push({
        name: 'profile_page',
        params: {
          profile: encrypt(user.id)
        }
      }).catch(() => {})
    },
    borrarUser (user) {
      this.deleteModal = true

      if (this.selected_user.id) this.selected_user.selected = false

      this.$set(this.users.find(f => f.id === user.id), 'selected', true)
    },
    deleteOkUserGroup () {
      this.deleteModal = false
      this.deleteUser(this.selected_user.id).then((data) => {
        this.loadData().then((loadedData) => {
        })
      }).catch((err) => {
        this.$Notice.error({
          title: _this.$t('users.errors.delete_error'),
          desc: err.toString()
        })
      })
    },
    changePage (pagination) {
      if (pagination.limit) this.pagination.limit = pagination.limit
      this.loadData()
    }
  },
  created () {
  },
  mounted () {
    this.loadData().then((result) => {}).catch((err) => {
      this.notify((err && err.data && err.data.message) || (err.message) || err.toString())
    })
  }
}
</script>

<style lang="less">
.user__list{
  .v-card__text {
    background: #FFF;
  }
}
.v-card > .v-speed-dial {
  position: fixed;
}

.v-card .v-btn--floating {
  position: relative;
}
</style>
