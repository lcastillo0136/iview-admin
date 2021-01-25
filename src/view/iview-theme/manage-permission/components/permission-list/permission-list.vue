<template>
  <div>
    <Row :gutter="10" v-for="(resource, etiqueta) in resources" :key="etiqueta">
      <i-col span="24">
        <Card>
          <p slot="title">
            {{ etiqueta }}
          </p>
          <template slot="extra">
            <span v-for="(grupo, igroup) in resource['*']" :key="igroup">
              <Tooltip :content="groupName(igroup)">
                <i-switch v-model="resource['*'][igroup]" true-color="#13ce66" @on-change="updatePermission($event, igroup, '', etiqueta )" :disabled="saving"></i-switch>
              </Tooltip>
              <Divider type="vertical" />
            </span>
          </template>
          <List>
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
          </List>
        </Card>
      </i-col>
    </Row>
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
      saving: false
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
          action: action,
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
