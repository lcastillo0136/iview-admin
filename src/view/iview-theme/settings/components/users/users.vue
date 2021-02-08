<template>
  <v-card flat>
    <v-card-text>
      <div class="text-h4 font-weight-black">User List</div>
      <Row class="mt-6">
        <i-col span="2" class="grey--text"><span class="ivu-tag-color-success">431</span> users</i-col>
        <i-col span="2" class="grey--text"><span class="ivu-tag-color-success">22</span> projects</i-col>
        <i-col span="2" class="grey--text"><span class="ivu-tag-color-success">33</span> roles</i-col>

        <i-col span="3" class="grey--text" offset="9">Project</i-col>
        <i-col span="3" class="grey--text">Date Added</i-col>
        <i-col span="3" class="grey--text">Role</i-col>
      </Row>
      <v-divider class="mt-1 mb-10"></v-divider>
      <Row :gutter="10">
        <i-col span="24">
          <Row type="flex" class=" ml-1 mr-1" :gutter="18">
            <i-col class="text-center">
              <Avatar icon="md-account" class="visible-false">
              </Avatar>
            </i-col>
            <i-col span="4">
              <div class="text-caption font-weight-light grey--text text--darken-1 mb-1" @click.prevent="toggleSort('first_name')">
                NAME
                <template v-if="sort.column == 'first_name'">
                  <span >
                    <v-icon small v-if="sort.type=='asc'">
                      mdi-sort-ascending
                    </v-icon>
                    <v-icon small v-if="sort.type=='desc'">
                      mdi-sort-descending
                    </v-icon>
                  </span>
                </template>
              </div>
              <span class="font-weight-medium">
              </span>
            </i-col>
            <i-col span="4">
              <div class="text-caption font-weight-light grey--text text--darken-1 mb-1" @click.prevent="toggleSort('username')">
                LOGIN
                <template v-if="sort.column == 'username'">
                  <span >
                    <v-icon small v-if="sort.type=='asc'">
                      mdi-sort-ascending
                    </v-icon>
                    <v-icon small v-if="sort.type=='desc'">
                      mdi-sort-descending
                    </v-icon>
                  </span>
                </template>
              </div>
              <span class="font-weight-medium">
              </span>
            </i-col>
            <i-col span="3">
              <div class="text-caption font-weight-light grey--text text--darken-1 mb-1"></div>
              <span class="font-weight-medium">
              </span>
            </i-col>

            <i-col span="4">
              <div class="text-caption font-weight-light grey--text text--darken-1 mb-1" @click.prevent="toggleSort('role')">
                ROLE
                <template v-if="sort.column == 'role'">
                  <span >
                    <v-icon small v-if="sort.type=='asc'">
                      mdi-sort-ascending
                    </v-icon>
                    <v-icon small v-if="sort.type=='desc'">
                      mdi-sort-descending
                    </v-icon>
                  </span>
                </template>
              </div>
              <span class="font-weight-medium">
              </span>
            </i-col>
            <i-col span="3">
              <div class="text-caption font-weight-light grey--text text--darken-1 mb-1" @click.prevent="toggleSort('active')">
                STATUS
                <template v-if="sort.column == 'active'">
                  <span >
                    <v-icon small v-if="sort.type=='asc'">
                      mdi-sort-ascending
                    </v-icon>
                    <v-icon small v-if="sort.type=='desc'">
                      mdi-sort-descending
                    </v-icon>
                  </span>
                </template>
              </div>
              <span class="font-weight-medium">
              </span>
            </i-col>
            <i-col span="4">
              <div class="text-caption font-weight-light grey--text text--darken-1 mb-1" @click.prevent="toggleSort('last_login')">
                LAST LOGIN
                <template v-if="sort.column == 'last_login'">
                  <span >
                    <v-icon small v-if="sort.type=='asc'">
                      mdi-sort-ascending
                    </v-icon>
                    <v-icon small v-if="sort.type=='desc'">
                      mdi-sort-descending
                    </v-icon>
                  </span>
                </template>
              </div>
              <span class="font-weight-medium">
              </span>
            </i-col>
          </Row>
        </i-col>
      </Row>
      <Row :gutter="10">
        <i-col span="24">
          <!-- Using a dynamic class -->
          <v-hover v-for="user in users_list" :key="user.id" class="user__list">
            <template v-slot:default="{ hover }">
              <v-card :elevation="hover ? 7 : 2" class="transition-swing">
                <v-card-text>
                  <Row type="flex" class="" :gutter="18">
                    <i-col class="text-center">
                      <Avatar :src="user.avatar">
                        {{ user.first_name | avatar }}
                      </Avatar>
                    </i-col>
                    <i-col span="4">
                      <div class="text-caption font-weight-light text--disabled mb-1">Name</div>
                      <span class="font-weight-medium">
                        {{ user.first_name }} {{ user.last_name }}
                      </span>
                    </i-col>
                    <i-col span="4">
                      <div class="text-caption font-weight-light text--disabled mb-1">Login</div>
                      <span class="font-weight-medium">
                        {{ user.username }}
                      </span>
                    </i-col>
                    <i-col span="3">
                      <div class="text-caption font-weight-light text--disabled mb-1"></div>
                      <span class="font-weight-medium">
                      </span>
                    </i-col>

                    <i-col span="4">
                      <div class="text-caption font-weight-light text--disabled mb-1">Role</div>
                      <span class="font-weight-medium">
                        {{ user.Role.name }}
                      </span>
                    </i-col>
                    <i-col span="3">
                      <div class="text-caption font-weight-light text--disabled mb-1">Status</div>
                      <span class="font-weight-medium">
                        <Tag color="success" v-if="user.active">Active</Tag>
                        <Tag color="error" v-if="!user.active">Disabled</Tag>
                      </span>
                    </i-col>
                    <i-col span="4">
                      <div class="text-caption font-weight-light text--disabled mb-1">Last Login</div>
                      <span class="font-weight-medium">
                        <Time :time="user.last_login" />
                      </span>
                    </i-col>
                  </Row>
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
        </i-col>
      </Row>
    </v-card-text>
    <v-btn color="blue darken-2" fab fixed bottom right @click="navigateAdd()">
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'UsersSettings',
  props: {
    groups: Array
  },
  data () {
    return {
      users: [],
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
      sort: {
        column: 'first_name',
        type: 'asc'
      },
      loading: false,
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
        }
        return 0
      })
    }
  },
  methods: {
    ...mapActions([
      'getUsersList'
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
