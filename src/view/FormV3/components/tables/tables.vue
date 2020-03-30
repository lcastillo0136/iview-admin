<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns()" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">{{ $t('table.export_csv') }}</Button>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getTableData } from '@/api/data'
export default {
  name: 'tables_page',
  components: {
    Tables
  },
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    },
    columns () {
      return [
        { title: this.$t('table.columns.name'), key: 'name', sortable: true },
        { title: this.$t('table.columns.email'), key: 'email', editable: true },
        { title: this.$t('table.columns.create_time'), key: 'createTime' },
        {
          title: this.$t('table.columns.handle'),
          key: 'handle',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: vm.$t('table.columns.delete_message')
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              }, [
                h('Button', vm.$t('table.columns.delete_button'))
              ])
            }
          ]
        }
      ]
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res.data
    })
  }
}
</script>

<style>

</style>
