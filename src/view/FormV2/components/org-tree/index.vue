<template>
  <Card shadow style="height: 100%;width: 100%;overflow:hidden">
    <div class="department-outer">
      <div class="tip-box">
        <b style="margin-right: 20px;">powered by <a target="blank" href="https://github.com/lison16">Lison</a></b>
        <a target="blank" href="https://github.com/lison16/v-org-tree" style="margin-right: 10px;">v-org-tree {{ $t('orgTree.documentation') }}</a>
      </div>
      <div class="zoom-box">
        <zoom-controller v-model="zoom" :min="20" :max="200"></zoom-controller>
      </div>
      <div class="view-box">
        <org-view
          v-if="data"
          :data="data"
          :zoom-handled="zoomHandled"
          @on-menu-click="handleMenuClick"
        ></org-view>
      </div>
    </div>
  </Card>
</template>

<script>
import OrgView from './components/org-view.vue'
import ZoomController from './components/zoom-controller.vue'
import { getOrgData } from '@/api/data'
import './index.less'

export default {
  name: 'org_tree_page',
  components: {
    OrgView,
    ZoomController
  },
  data () {
    return {
      data: null,
      zoom: 100
    }
  },
  computed: {
    zoomHandled () {
      return this.zoom / 100
    },
    menuDic () {
      return {
        edit: this.$t('orgTree.menu.editorial_department'),
        detail: this.$t('orgTree.menu.view_department'),
        new: this.$t('orgTree.menu.new_sector'),
        delete: this.$t('orgTree.menu.delete_department')
      }
    }
  },
  methods: {
    setDepartmentData (data) {
      data.isRoot = true
      return data
    },
    handleMenuClick ({ data, key }) {
      this.$Message.success({
        duration: 5,
        content: this.$t('orgTree.menu.click', { label: data.label, key: this.menuDic[key] })
      })
    },
    getDepartmentData () {
      getOrgData().then(res => {
        const { data } = res
        this.data = data
      })
    }
  },
  mounted () {
    this.getDepartmentData()
  }
}
</script>

<style>
</style>
