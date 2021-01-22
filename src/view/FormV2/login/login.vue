<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <form class="login100-form validate-form">
          <span class="login100-form-title p-b-26">
            Welcome
          </span>
          <span class="login100-form-title p-b-48">
            <i class="zmdi zmdi-font"></i>
          </span>
          <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
            <FormItem prop="userName">
              <div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                <input class="input100" type="text" v-model="form.userName" :class="{'has-val': hasValue(form.userName)}">
                <span class="focus-input100" data-placeholder="Email"></span>
              </div>
            </FormItem>

            <FormItem prop="password">
              <div class="wrap-input100 validate-input" data-validate="Enter password">
                <span class="btn-show-pass" @click="isPassword=!isPassword">
                  <i class="zmdi zmdi-eye" v-if="isPassword"></i>
                  <i class="zmdi zmdi-eye-off" v-if="!isPassword"></i>
                </span>
                <input class="input100" :type="isPassword ? 'password':'text'" v-model="form.password" :class="{'has-val': hasValue(form.password)}">
                <span class="focus-input100" data-placeholder="Password"></span>
              </div>
            </FormItem>

            <Alert closable type="error" show-icon ref="fallback" v-if="error">...</Alert>

            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn"></div>
                <Button @click="handleSubmit" class="login100-form-btn">{{$t('login.form.login')}}</Button>
              </div>
            </div>
          </Form>
          <div class="text-center p-t-115">
            <span class="txt1">
              Don’t have an account?
            </span>

            <a class="txt2" href="#">
              Sign Up
            </a>
          </div>
        </form>
      </div>
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
          { required: true, message: this.$t('login.messages.error.username'), trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value.trim().match(/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return callback(new Error('generic error'))
              }
              return true
            },
            message: this.$t('login.messages.error.email'),
            trigger: 'blur'
          }
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
        userName: '',
        password: '',
        rememberme: false
      },
      isPassword: true,
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
    hasValue (value) {
      value = value.trim()
      if (value && value !== '') {
        return true
      }
      return false
    },
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$Spin.show()
          this.handleLogin({
            user: this.form.userName,
            password: this.form.password,
            remember: this.form.rememberme
          }).then(res => {
            this.$Spin.hide()
            this.$router.push({
              name: this.$config.homeName
            })
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
  }
}
</script>

<style>
</style>
