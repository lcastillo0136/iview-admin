<template>
  <Row :gutter="10">
    <i-col span="12">
      <Card>
        <div class="update-paste-con">
          <paste-editor v-model="pasteDataArr" @on-success="handleSuccess" @on-error="handleError"/>
        </div>
        <div class="update-paste-btn-con">
          <span class="paste-tip">{{ $t('pasteTable.paste_tip') }}</span>
          <Button type="primary" style="float: right;" @click="handleShow">{{ $t('pasteTable.show_data') }}</Button>
        </div>
      </Card>
    </i-col>
    <i-col span="12">
      <Card>
        <Table :height="400" :columns="columns" :data="tableData"/>
      </Card>
    </i-col>
  </Row>
</template>

<script>
import PasteEditor from '_c/paste-editor'
import { getTableDataFromArray } from '@/libs/util'
export default {
  name: 'update_paste_page',
  components: {
    PasteEditor
  },
  data () {
    return {
      pasteDataArr: [],
      columns: [],
      tableData: [],
      validated: true,
      errorIndex: 0
    }
  },
  methods: {
    handleSuccess () {
      this.validated = true
    },
    handleError (index) {
      this.validated = false
      this.errorIndex = index
    },
    handleShow () {
      if (!this.validated) {
        this.$Notice.error({
          title: this.$t('pasteTable.messages.error.irregular'),
          desc: this.$t('pasteTable.messages.error.row_irregular', { errorIndex: this.errorIndex + 1 })
        })
      } else {
        let { columns, tableData } = getTableDataFromArray(this.pasteDataArr, true)
        this.columns = columns
        this.tableData = tableData
      }
    }
  }
}
</script>

<style lang="less">
.update-paste{
  &-con{
    height: 350px;
  }
  &-btn-con{
    box-sizing: content-box;
    height: 30px;
    padding: 15px 0 5px;
  }
}
.paste-tip{
  color: #19be6b;
}
</style>
