<template>
  <div style="">
    <Tabs value="groups_manage" type="card" :animated="false">
      <TabPane :label="$t('usersRoles.tabs.groups')" name="groups_manage" icon="md-people" v-if="groupsAccess">
        <RoleList ref="group_list" @savedGroup="reloadPermissions($event)"></RoleList>
      </TabPane>
      <TabPane :label="$t('usersRoles.tabs.permissions')" name="permissions_manage" icon="md-list-box" v-if="permissionAccess">
        <PermissionList ref="permissions_list" :groups="groups"></PermissionList>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { validateAccess } from '@/libs/util'

import PermissionList from './components/permission-list/permission-list'
import RoleList from './components/roles-list/roles-list'

export default {
  name: 'users-roles',
  data () {
    return {
      resources: [],
      groups: []
    }
  },
  components: {
    PermissionList,
    RoleList
  },
  computed: {
    ...mapState({
      'permissions': (state) => state.user.permissions
    }),
    groupsAccess () {
      let access = this.permissions.filter(f => f.access !== 'disabled').map(m => `${m.controller}/${m.action}`)

      return validateAccess(access, {
        meta: {
          access: [
            'UserGroups/*',
            'UserGroups/index',
            'UserGroups/get'
          ]
        }
      })
    },
    permissionAccess () {
      let resolve = this.$router.resolve({ name: 'users-roles_page' })
      let access = this.permissions.filter(f => f.access !== 'disabled').map(m => `${m.controller}/${m.action}`)

      return validateAccess(access, resolve.route)
    }
  },
  methods: {
    ...mapActions([
    ]),
    reloadPermissions (loadedData) {
      this.groups = loadedData
      this.$refs.permissions_list.loadData()
    }
  },
  created () {
  },
  mounted () {
    this.$refs.group_list.loadData().then((data) => {
      this.groups = data
    }).catch(() => {}).then(() => {
      this.$refs.permissions_list.loadData()
    })
  }
}
</script>

<style lang="less">
.ivu-tabs-bar {
  margin-bottom: 0;
}
.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
  background: #fff;
  padding: 16px;
  border: 1px solid #dcdee2;
  border-top: none;
}
</style>
