<template>
  <div style="">
    <Tabs value="permissions_manage" type="card" :animated="false">
      <TabPane label="Groups" name="groups_manage" icon="md-people">
        <GroupsList ref="group_list" @savedGroup="reloadPermissions($event)"></GroupsList>
      </TabPane>
      <TabPane label="Permission List" name="permissions_manage" icon="md-list-box">
        <PermissionList ref="permissions_list" :groups="groups"></PermissionList>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PermissionList from './components/permission-list/permission-list'
import GroupsList from './components/groups-list/groups-list'
import UsersList from './components/users-list/users-list'

export default {
  name: 'users-groups',
  data () {
    return {
      resources: [],
      groups: []
    }
  },
  components: {
    PermissionList,
    GroupsList,
    UsersList
  },
  computed: {},
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
}
</style>
