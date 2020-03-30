<template>
  <div>
    <Button @click="exportData" type="primary" style="margin: 0 10px 10px 0;">{{ $t('errorLogger.button_export') }}</Button>
    <b>{{ $t('errorLogger.logger_note') }}</b>
    <Table ref="table" :columns="columns" :data="errorList"></Table>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapMutations } from 'vuex'
export default {
  name: 'error_logger_page',
  data () {
    return {}
  },
  computed: {
    errorList () {
      return this.$store.state.app.errorList
    },
    columns () {
      return [
        {
          type: 'index',
          title: this.$t('errorLogger.columns.serial_number'),
          width: 100
        },
        {
          key: 'type',
          title: this.$t('errorLogger.columns.type'),
          width: 100,
          render: (h, { row }) => {
            return (
              <div>
                <icon size={16} type={row.type === 'ajax' ? 'md-link' : 'md-code-working'}></icon>
              </div>
            )
          }
        },
        {
          key: 'code',
          title: this.$t('errorLogger.columns.code'),
          render: (h, { row }) => {
            return (
              <span>{ row.code === 0 ? '-' : row.code }</span>
            )
          }
        },
        {
          key: 'mes',
          title: this.$t('errorLogger.columns.information')
        },
        {
          key: 'url',
          title: this.$t('errorLogger.columns.url')
        },
        {
          key: 'time',
          title: this.$t('errorLogger.columns.time'),
          render: (h, { row }) => {
            return (
              <span>{ dayjs(row.time).format('YYYY-MM-DD HH:mm:ss') }</span>
            )
          },
          sortable: true,
          sortType: 'desc'
        }
      ]
    }
  },
  methods: {
    ...mapMutations([
      'setHasReadErrorLoggerStatus'
    ]),
    exportData () {
      this.$refs.table.exportCsv({
        filename: `${this.$t('errorLogger.file_name')}.csv`
      })
    }
  },
  activated () {
    this.setHasReadErrorLoggerStatus()
  },
  mounted () {
    this.setHasReadErrorLoggerStatus()
  }
}
</script>

<style>

</style>
