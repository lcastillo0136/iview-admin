<template>
  <v-card flat>
    <v-card-text>
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
      <md-button @click.prevent="addUserGroup()" class="md-fab md-primary" style="position: fixed;bottom: 1%;right: 1%;">
        <md-icon>add</md-icon>
      </md-button>
      <Modal v-model="openModal" :title="titleModal" @on-visible-change="modalChange($event)" @on-ok="okUserGroup()">
        <div class="mb10">
          <ModalUserRole :UserGroupModel="userGroupModel"></ModalUserRole>
        </div>
      </Modal>
      <Modal v-model="deleteModal" width="360">
        <p slot="header" style="color:#f60;text-align:center">
          <Icon type="ios-information-circle"></Icon>
          <span>{{ $t('usersRoles.delete.title') }}</span>
        </p>
        <div style="text-align:center">
          <p>{{ $t('usersRoles.delete.content') }}</p>
        </div>
        <div slot="footer">
          <Button type="error" size="large" long @click="deleteOkUserGroup()">{{ $t('usersRoles.delete.button') }}</Button>
        </div>
      </Modal>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex'
import ModalUserRole from './components/modal-role/modal-role'

export default {
  name: 'RolesSettings',
  data () {
    return {
      resources: [],
      groups: [],
      columns: [{
        title: this.$t('usersRoles.table.name'),
        key: 'name'
      }, {
        title: this.$t('usersRoles.table.description'),
        key: 'description'
      }, {
        title: this.$t('usersRoles.table.available_online'),
        slot: 'available_online',
        width: 150
      }, {
        title: '  ',
        slot: 'actions',
        width: 120
      }],
      addModal: false,
      editModal: false,
      deleteModal: false,
      userGroupModel: {
        name: '',
        description: '',
        available_online: false,
        id: -1
      },
      pagination: {
        total: 0,
        page: 1,
        limit: 10
      },
      loading: false
    }
  },
  components: {
    ModalUserRole
  },
  computed: {
    titleModal () {
      return this.addModal ? this.$t('usersRoles.add.title') : this.$t('usersRoles.edit.title')
    },
    openModal: {
      get: function () {
        return this.addModal || this.editModal
      },
      set: function (visible) {
        // this.addModal = this.editModal = visible
      }
    }
  },
  methods: {
    ...mapActions([
      'getUsersGroups',
      'saveUserGroup',
      'deleteUserGroup'
    ]),
    loadData () {
      const _this = this
      this.loading = true
      return new Promise((resolve, reject) => {
        this.getUsersGroups(this.pagination).then(({ data, pagination }) => {
          this.groups = data
          this.pagination = {
            total: parseInt(pagination.rows) || 0,
            page: parseInt(pagination.current) || 1,
            limit: pagination.limit
          }
          this.loading = false
          this.$emit('on-load', this.groups)
          resolve(data)
        }).catch((err) => {
          this.$Notice.error({
            title: _this.$t('usersRoles.errors.load_data'),
            desc: err.toString()
          })
          this.loading = false
          reject(err)
        })
      })
    },
    updateGroup (row) {
      const _this = this
      this.userGroupModel.name = row.name
      this.userGroupModel.description = row.description
      this.userGroupModel.available_online = row.available_online
      this.userGroupModel.id = row.id

      this.saveUserGroup(this.userGroupModel).catch((err) => {
        this.$Notice.error({
          title: _this.$t('usersRoles.errors.update_switch'),
          desc: err.toString()
        })
      })
    },
    updateUserGroup (row) {
      this.editModal = true
      this.userGroupModel.name = row.name
      this.userGroupModel.description = row.description
      this.userGroupModel.available_online = row.available_online
      this.userGroupModel.id = row.id
    },
    addUserGroup () {
      this.addModal = true
      this.userGroupModel.name = ''
      this.userGroupModel.description = ''
      this.userGroupModel.available_online = false
      this.userGroupModel.id = -1
    },
    modalChange (visible) {
      if (!visible) {
        this.addModal = false
        this.editModal = false
      }
    },
    okUserGroup () {
      const _this = this
      if (this.userGroupModel.name.trim() === '') {
        this.$Notice.error({
          title: this.addModal ? this.$t('usersRoles.errors.add_error') : this.$t('usersRoles.errors.edit_error'),
          desc: this.$t('usersRoles.errors.name.empty_group_name')
        })
      } else {
        this.saveUserGroup(this.userGroupModel).then((data) => {
          this.loadData().then((loadedData) => {
            this.$emit('savedGroup', loadedData)
          })
        }).catch((err) => {
          let err_desc = err.message || err.toString()
          if (err.data) {
            err_desc = ''
            err_desc += Object.keys(err.data).map(e => err.data[e].map(d => this.$t(`usersRoles.errors.${e}.${d}`))).reduce((e, e1) => e.concat(e1), []).join('<br>')
            err_desc += ''
          } else {
            err_desc = _this.$t(`usersRoles.errors.${err_desc}`)
          }

          this.$Notice.error({
            title: _this.$t('usersRoles.errors.title'),
            desc: err_desc
          })
        })
      }
    },
    borrarUserGroup (row) {
      this.userGroupModel.name = row.name
      this.userGroupModel.description = row.description
      this.userGroupModel.available_online = row.available_online
      this.userGroupModel.id = row.id

      this.deleteModal = true
    },
    deleteOkUserGroup () {
      const _this = this
      this.deleteModal = false
      this.deleteUserGroup(this.userGroupModel).then((data) => {
        this.loadData().then((loadedData) => {
          this.$emit('savedGroup', loadedData)
        })
      }).catch((err) => {
        debugger
        this.$Notice.error({
          title: _this.$t('usersRoles.errors.delete_error'),
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
    this.loadData()
  }
}
</script>

<style lang="less">
</style>
