<style lang="less">
  @import "./common.less";
  [lang*="en-"] .ivu-progress-show-info .ivu-progress-outer {
    padding-right: 75px;
    margin-right: -75px;
  }
</style>
<template>
  <div :lang="$i18n.locale">
    <Card :title="$t('uploadPDF.title')">
      <Row>
        <Upload action="" :before-upload="handleBeforeUpload" accept=".pdf">
          <Button icon="ios-cloud-upload-outline" :loading="uploadLoading" @click="handleUploadFile">{{ $t('uploadPDF.upload_file') }}</Button>
        </Upload>
      </Row>
      <Row>
        <div class="ivu-upload-list-file" v-if="file !== null">
          <Icon type="ios-stats"></Icon>
            {{ file.name }}
          <Icon v-show="showRemoveFile" type="md-trash" class="ivu-upload-list-remove" @click.native="handleRemove()"></Icon>
        </div>
      </Row>
      <Row>
        <transition name="fade">
          <Progress v-if="showProgress" :percent="progressPercent" :stroke-width="2">
            <div v-if="progressPercent == 100">
              <Icon type="ios-checkmark-circle"></Icon>
              <span> {{ $t('uploadExcel.success') }}</span>
            </div>
          </Progress>
        </transition>
      </Row>
    </Card>
    <Row class="margin-top-10">
      <iframe :src="pdfBase64" v-if="pdfSrc != ''"></iframe>
    </Row>
  </div>
</template>
<script>
import { PDFDocument } from 'pdf-lib'

export default {
  name: 'upload-pdf',
  data () {
    return {
      uploadLoading: false,
      progressPercent: 0,
      showProgress: false,
      showRemoveFile: false,
      file: null,
      tableData: [],
      tableTitle: [],
      tableLoading: false,
      pdfSrc: ''
    }
  },
  computed: {
    pdfBase64 () {
      return 'data:application/pdf;base64,' + btoa(String.fromCharCode(...this.pdfSrc))
    }
  },
  methods: {
    initUpload () {
      this.file = null
      this.pdfSrc = ''
      this.showProgress = false
      this.loadingProgress = 0
      this.tableData = []
      this.tableTitle = []
    },
    handleUploadFile () {
      this.initUpload()
    },
    handleRemove () {
      this.initUpload()
      this.$Message.info(this.$t('uploadPDF.messages.info.file_deleted'))
    },
    handleBeforeUpload (file) {
      const fileExt = file.name.split('.').pop().toLocaleLowerCase()
      if (fileExt === 'pdf') {
        this.readFile(file)
        this.file = file
      } else {
        this.$Notice.warning({
          title: this.$t('uploadPDF.messages.error.file_type'),
          desc: this.$t('uploadPDF.messages.error.no_pdf', { name: file.name })
        })
      }
      return false
    },
    // 读取文件
    async readFile (file) {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadstart = e => {
        this.uploadLoading = true
        this.tableLoading = true
        this.showProgress = true
      }
      reader.onprogress = e => {
        this.progressPercent = Math.round(e.loaded / e.total * 100)
      }
      reader.onerror = e => {
        this.$Message.error(this.$t('uploadPdf.messages.error.reading'))
      }
      reader.onload = e => {
        this.$Message.info(this.$t('uploadPdf.messages.success.read'))
        this.$nextTick().then(() => {
          const data = e.target.result
          PDFDocument.create().then((pdfDoc) => {
            PDFDocument.load(data).then((pdf) => {
              pdfDoc.copyPages(pdf, pdf.getPageIndices()).then((copiedPages) => {
                copiedPages.forEach((page) => {
                  pdfDoc.addPage(page)
                })
                pdfDoc.save().then((pdfBytes) => {
                  this.pdfSrc = pdfBytes
                  this.uploadLoading = false
                  this.tableLoading = false
                  this.showRemoveFile = true
                })
              })
            })
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
<style>
  iframe {
    width: 100%;
    height: 600px;
  }
</style>
