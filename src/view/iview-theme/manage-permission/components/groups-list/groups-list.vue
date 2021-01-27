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
    <md-button @click.prevent="addUserGroup()" class="md-fab md-primary" style="position: fixed;bottom: 1%;right: 1%;">
      <md-icon>add</md-icon>
    </md-button>
    <Modal v-model="openModal" :title="titleModal" @on-visible-change="modalChange($event)" @on-ok="okUserGroup()">
        <div class="mb10">
          <ModalUserGroup :UserGroupModel="userGroupModel"></ModalUserGroup>
        </div>
    </Modal>
    <Modal v-model="deleteModal" width="360">
        <p slot="header" style="color:#f60;text-align:center">
          <Icon type="ios-information-circle"></Icon>
          <span>Delete confirmation</span>
        </p>
        <div style="text-align:center">
          <p>Are you sure you want to delete this?</p>
        </div>
        <div slot="footer">
          <Button type="error" size="large" long @click="deleteOkUserGroup()">Delete</Button>
        </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ModalUserGroup from './components/modal-user-group/modal-user-group'

export default {
  name: 'GroupsList',
  data () {
    return {
      groups: [],
      columns: [{
        title: 'Name',
        key: 'name'
      }, {
        title: 'Description',
        key: 'description'
      }, {
        title: 'Available Online',
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
  computed: {
    titleModal () {
      return this.addModal ? 'Add User Group' : 'Edit User Group'
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
  components: {
    ModalUserGroup
  },
  methods: {
    ...mapActions([
      'getUsersGroups',
      'saveUserGroup',
      'deleteUserGroup'
    ]),
    loadData () {
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
          resolve(data)
        }).catch((err) => {
          this.$Notice.error({
            title: 'GroupList Error',
            desc: err.toString()
          })
          this.loading = false
          reject(err)
        })
      })
    },
    updateGroup (row) {
      this.userGroupModel.name = row.name
      this.userGroupModel.description = row.description
      this.userGroupModel.available_online = row.available_online
      this.userGroupModel.id = row.id

      this.saveUserGroup(this.userGroupModel).catch((err) => {
        this.$Notice.error({
          title: 'Update Switch',
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
      if (this.userGroupModel.name.trim() === '') {
        this.$Notice.error({
          title: (this.addModal ? 'Create' : 'Edit') + ' Error',
          desc: 'Plase input an name for the user group'
        })
      } else {
        this.saveUserGroup(this.userGroupModel).then((data) => {
          this.loadData().then((loadedData) => {
            this.$emit('savedGroup', loadedData)
          })
        }).catch((err) => {
          this.$Notice.error({
            title: 'Save User Group Error',
            desc: err.toString()
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
      this.deleteModal = false
      this.deleteUserGroup(this.userGroupModel).then((data) => {
        this.loadData().then((loadedData) => {
          this.$emit('savedGroup', loadedData)
        })
      }).catch((err) => {
        this.$Notice.error({
          title: 'Delete Group Error',
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
  }
}
</script>

<style lang="less">
.ivu-card {
  margin: 10px;
}
.ivu-tabs {
  overflow: visible;
}
</style>
