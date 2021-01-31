<template>
  <div>
    <Form label-position="top">
      <FormItem :label="$t('userGroups.add.name')">
        <Input v-model="UserGroupModel.name" />
      </FormItem>
      <FormItem :label="$t('userGroups.add.description')">
        <Input v-model="UserGroupModel.description"/>
      </FormItem>
      <FormItem :label="$t('userGroups.add.available_online')">
        <i-switch v-model="UserGroupModel.available_online"></i-switch>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ModalUserGroup',
  props: {
    UserGroupModel: Object
  },
  data () {
    return {
    }
  },
  computed: {},
  methods: {
    ...mapActions([
    ])
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="less">
</style>
