<template>
  <div>
    <Row>
      <i-col span="12">
        <Card>
          <div class="cropper-example cropper-first">
            <cropper
              :src="exampleImageSrc"
              :crop-button-text="$t('cropper.button')"
              @on-crop="handleCroped"
            ></cropper>
          </div>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Cropper from '@/components/cropper'
import { uploadImg } from '@/api/data'
export default {
  name: 'cropper_page',
  components: {
    Cropper
  },
  data () {
    return {
      exampleImageSrc: ''
    }
  },
  methods: {
    handleCroped (blob) {
      const formData = new FormData()
      formData.append('croppedImg', blob)
      uploadImg(formData).then(() => {
        this.$Message.success(this.$t('cropper.messages.success.upload'))
      })
    }
  }
}
</script>

<style lang="less">
.cropper-example{}
</style>
