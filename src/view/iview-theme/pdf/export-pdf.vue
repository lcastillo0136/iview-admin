<style lang="less">
    @import "./common.less";
</style>
<template>
  <div>
    <Card :title="$t('exportPDF.title')">
      <Row>
        <Button icon="md-download" :loading="exportLoading" @click="exportPDF">{{ $t('exportPDF.export_file') }}</Button>
      </Row>
    </Card>
    <Row class="margin-top-10">
      <iframe :src="pdfBase64" v-if="pdfSrc != ''"></iframe>
    </Row>
  </div>
</template>
<script>
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
// import download from 'downloadjs'

export default {
  name: 'export-pdf',
  data () {
    return {
      exportLoading: false,
      pdfSrc: ''
    }
  },
  computed: {
    pdfBase64 () {
      return 'data:application/pdf;base64,' + btoa(String.fromCharCode(...this.pdfSrc))
    }
  },
  methods: {
    async exportPDF () {
      const pdfDoc = await PDFDocument.create()

      // Embed the Times Roman font
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

      // Add a blank page to the document
      const page = pdfDoc.addPage()

      // Get the width and height of the page
      const { height } = page.getSize()

      // Draw a string of text toward the top of the page
      const fontSize = 30
      page.drawText('Creating PDFs in JavaScript is awesome!', {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71)
      })

      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()
      this.pdfSrc = pdfBytes

      // Trigger the browser to download the PDF document
      // download(pdfBytes, 'pdf-lib_creation_example.pdf', 'application/pdf')
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
