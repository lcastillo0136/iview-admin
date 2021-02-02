<template>
  <div>
    <Form label-position="top">
      <FormItem :label="$t('usersRoles.add.name')">
        <Input v-model="UserGroupModel.name" />
      </FormItem>
      <FormItem :label="$t('usersRoles.add.description')">
        <Input v-model="UserGroupModel.description"/>
      </FormItem>
      <FormItem :label="$t('usersRoles.add.available_online')">
        <i-switch v-model="UserGroupModel.available_online"></i-switch>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ModalUserRole',
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
