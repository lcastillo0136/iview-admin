<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="md-log-in" :title="$t('login.form.title')" :bordered="false">
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
            <FormItem prop="userName">
              <Input v-model="form.userName" :placeholder="$t('login.form.username')">
                <span slot="prepend">
                  <Icon :size="16" type="ios-person"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" :placeholder="$t('login.form.password')">
                <span slot="prepend">
                  <Icon :size="14" type="md-lock"></Icon>
                </span>
              </Input>
            </FormItem>
            <Alert closable type="error" show-icon ref="fallback" v-if="error">...</Alert>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>{{$t('login.form.login')}}</Button>
            </FormItem>
          </Form>
          <p class="login-tip">{{ $t('login.tips.bottom')}}</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    userNameRules: {
      type: Array,
      default: function () {
        return [
          { required: true, message: this.$t('login.messages.error.username'), trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: function () {
        return [
          { required: true, message: this.$t('login.messages.error.password'), trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        userName: 'client@mail.com',
        password: 'client321'
      },
      error: false
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    ...mapActions([
      'handleLogin'
    ]),
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$Spin.show()
          this.handleLogin({
            user: this.form.userName,
            password: this.form.password
          }).then(res => {
            this.$Spin.hide()
            this.$router.push({
              name: this.$config.homeName
            }).catch(() => {})
          }).catch((err) => {
            this.$Spin.hide()
            this.message((err.response && err.response.data && err.response.data.message) || err.toString())
          })
        }
      })
    },
    message (message) {
      this.error = true
      this.$nextTick().then(() => {
        this.$refs.fallback.$scopedSlots.default()[0].elm.data = this.$t('login.messages.error.' + message)
        setTimeout(() => { this.error = false }, 5000)
      })
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style>

</style>
