<template>
  <div>
    <Card>
      {{ $t('errorStore.content1') }}<br>
      {{ $t('errorStore.content2') }}<br>
      {{ $t('errorStore.content3') }}<br>
    </Card>
    <Card style="margin-top: 20px;">
      <Row>
        <i-col span="8">
          <Button @click="click" style="display: block">{{ $t('errorStore.click_test_error') }}</Button>
          <Button @click="ajaxClick" style="margin-top:10px;">{{ $t('errorStore.click_test_ajax_error') }}</Button>
        </i-col>
        <i-col span="16">
          {{ $t('errorStore.ajax_error_404') }}
        </i-col>
      </Row>
    </Card>
  </div>
</template>

<script>
import { errorReq } from '@/api/data'
export default {
  name: 'error_store_page',
  methods: {
    click () {
      console.log(admin)
    },
    ajaxClick () {
      errorReq()
    }
  }
}
</script>

<style>

</style>
