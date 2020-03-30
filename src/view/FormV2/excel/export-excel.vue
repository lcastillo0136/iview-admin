<style lang="less">
    @import "./common.less";
</style>
<template>
  <div>
    <Card :title="$t('exportExcel.title')">
      <Row>
        <Button icon="md-download" :loading="exportLoading" @click="exportExcel">{{ $t('exportExcel.export_file') }}</Button>
      </Row>
    </Card>
    <Row class="margin-top-10">
      <Table :columns="tableTitle" :data="tableData"></Table>
    </Row>
  </div>
</template>
<script>
import excel from '@/libs/excel'
export default {
  name: 'export-excel',
  data () {
    return {
      exportLoading: false,
      tableData: [
        {
          category1: 1,
          category2: 2,
          category3: 3
        },
        {
          category1: 4,
          category2: 5,
          category3: 6
        },
        {
          category1: 7,
          category2: 8,
          category3: 9
        }
      ]
    }
  },
  computed: {
    tableTitle () {
      return [
        {
          title: this.$t('exportExcel.example.columns.primary'),
          key: 'category1'
        },
        {
          title: this.$t('exportExcel.example.columns.secondary'),
          key: 'category2'
        },
        {
          title: this.$t('exportExcel.example.columns.tertiary'),
          key: 'category3'
        }
      ]
    }
  },
  methods: {
    exportExcel () {
      if (this.tableData.length) {
        this.exportLoading = true
        const params = {
          title: [this.$t('exportExcel.example.columns.primary'), this.$t('exportExcel.example.columns.secondary'), this.$t('exportExcel.example.columns.tertiary')],
          key: ['category1', 'category2', 'category3'],
          data: this.tableData,
          autoWidth: true,
          filename: this.$t('exportExcel.example.result')
        }
        excel.export_array_to_excel(params)
        this.exportLoading = false
      } else {
        this.$Message.info(this.$t('exportExcel.messages.error.empty'))
      }
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
