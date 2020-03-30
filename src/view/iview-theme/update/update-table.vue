<template>
  <Row :gutter="10">
    <i-col :xlg="6" :lg="9">
      <Card>
        <Upload action="" :before-upload="beforeUpload">
          <Button icon="ios-cloud-upload-outline">{{ $t('uploadTable.upload_csv') }}</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;{{ $t('uploadTable.tip_upload') }}
        </Upload>
        <Checkbox v-model="isHeader" size="large">{{ $t('uploadTable.csv_first_row') }}</Checkbox>
        <Divider />
        <p>{{ $t('uploadTable.utilsjs.tip') }}：</p>
        <p class="update-table-intro"><Icon style="margin-right: 10px;" :size="10" type="md-heart"/><span class="code-high-line">getArrayFromFile</span>：{{ $t('uploadTable.utilsjs.get_array') }}</p>
        <p class="update-table-intro"><Icon style="margin-right: 10px;" :size="10" type="md-heart"/><span class="code-high-line">getTableDataFromArray</span>：{{ $t('uploadTable.utilsjs.get_table') }}</p>
      </Card>
    </i-col>
    <i-col :xlg="18" :lg="15">
      <Table :height="500" :columns="columns" :data="tableData"/>
    </i-col>
  </Row>
</template>

<script>
import { getTableDataFromArray, getArrayFromPapa } from '@/libs/util'
export default {
  name: 'update_table_page',
  data () {
    return {
      columns: [],
      tableData: [],
      isHeader: true
    }
  },
  methods: {
    beforeUpload (file) {
      getArrayFromPapa(file).then(result => {
        let { columns, tableData } = getTableDataFromArray(result.data, this.isHeader)
        this.columns = columns
        this.tableData = tableData
      }).catch(() => {
        this.$Notice.warning({
          title: this.$t('uploadTable.only_csv_files'),
          desc: this.$t('uploadTable.only_csv_files_again')
        })
      })
      return false
    }
  }
}
</script>

<style>
.update-table-intro{
  margin-top: 10px;
}
.code-high-line{
  color: #2d8cf0;
}
</style>
