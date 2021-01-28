<template>
  <div>
    <Row :gutter="10">
      <i-col span="24">
        <List border>
          <ListItem v-for="(resource, etiqueta) in resources" :key="etiqueta">
            <template>
              <div style="flex: 1 0 auto">
                {{ etiqueta }}
              </div>
              <template slot="action">
                <!-- <span v-for="(grupo, igroup) in resource['*']" :key="igroup">
                  <Tooltip :content="groupName(igroup)">
                    <i-switch v-model="resource['*'][igroup]" true-color="#13ce66" @on-change="updatePermission($event, igroup, '', etiqueta )" :disabled="saving"></i-switch>
                  </Tooltip>
                  <Divider type="vertical" />
                </span> -->
                <span>
                  <Button shape="circle" icon="md-open" @click.prevent="choosePermissions({ actions: resource, label: etiqueta})">
                    Permissions
                  </Button>
                </span>
              </template>
            </template>
          </ListItem>
        </List>

        <!-- <List>
            <ListItem v-for="(ruta, index) in resource" :key="index">
              <template v-if="index != '*'">
                <div style="flex: 1 0 auto">
                  {{ etiqueta }}/<b>{{ index }}</b>
                </div>
                <template slot="action">
                  <span v-for="(grupo, igroup) in ruta" :key="igroup">
                    <Tooltip :content="groupName(igroup)">
                      <i-switch v-model="ruta[igroup]" true-color="#13ce66" @on-change="updatePermission($event, igroup, index, etiqueta )" :disabled="saving"></i-switch>
                    </Tooltip>
                    <Divider type="vertical" />
                  </span>
                </template>
              </template>
            </ListItem>
          </List> -->

      </i-col>
    </Row>

    <Modal width="90%" v-model="openPermissionsModal" title="Choose Permissions" @on-ok="okUserGroup()">
      <i-table :columns="columns" :data="table_resources" :loading="loading">
        <template slot-scope="{ row, index }" slot="name">
          <span>{{ row.parent }}/<b>{{ row.name == '*' ? '[All]' : row.name }}</b></span>
        </template>
        <template slot-scope="{ row , index, column }" slot="group">
          <i-switch v-model="resources[row.parent][row.name][column.group]" true-color="#13ce66" @on-change="updatePermission($event, column.group, row.name, row.parent )" :disabled="saving"></i-switch>
        </template>
        <!-- <template slot-scope="{ row, index }" slot="actions">
          <Tooltip :content="groupName(igroup)">
            <i-switch v-model="ruta[igroup]"  ></i-switch>
          </Tooltip>
          <Divider type="vertical" />
        </template> -->
      </i-table>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PermissionList',
  props: {
    groups: Array
  },
  data () {
    return {
      resources: [],
      table_resources: [],
      saving: false,
      openPermissionsModal: false,
      columns: [{
        title: 'Name',
        slot: 'name',
        fixed: 'left'
      }, {
        title: '   ',
        slot: 'actions'
      }],
      loading: false
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'getPermissionList',
      'savePermission'
    ]),
    loadData () {
      this.getPermissionList().then((data) => {
        this.resources = data
      }).catch((err) => {
        this.$Notice.error({
          title: 'Error getting the info',
          desc: err.toString()
        })
      })
    },
    groupName (id) {
      return (this.groups.find(f => f.id === parseInt(id)) || { name: 'Guest' }).name
    },
    updatePermission (value, group_id, action, controller) {
      if (!this.saving) {
        this.saving = true
        let data = {
          group_id: group_id,
          controller: controller,
          action: action === '*' ? null : action,
          access: value
        }

        if (group_id === 'guest') {
          data.group_id = ''
          data.guest = value
          data.access = false
        }
        this.savePermission(data).then((data) => {
          this.saving = false
        }).catch((err) => {
          this.resources[controller][action][group_id] = !value
          this.saving = false
          this.$Notice.error({
            title: 'Save Error',
            desc: 'Unable to update the permission list:' + (err && (err.message || err.toString()))
          })
        })
      }
    },
    choosePermissions (resource) {
      this.openPermissionsModal = true
      this.columns = [{
        title: 'Name',
        slot: 'name',
        width: 280,
        fixed: 'left'
      }].concat([{
        title: 'Guest',
        group: 'guest',
        slot: 'group',
        width: 120
      }]).concat(this.groups.map(g => Object({
        title: g.name,
        group: g.id,
        slot: 'group',
        width: 120
      })))
      this.table_resources = Object.keys(resource.actions).map(o => Object({
        name: o,
        parent: resource.label,
        actions: resource.actions[o]
      }))
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="less">
.ivu-card {
  margin: 10px;
}
</style>
