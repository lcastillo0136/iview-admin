<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="limiter">
    <div class="container-login100" style="">
      <div class="wrap-login100">
        <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
          <span class="login100-form-logo">
            <i class="zmdi zmdi-landscape"></i>
          </span>

          <span class="login100-form-title p-b-34 p-t-27">
            Log in
          </span>

          <FormItem prop="userName">
            <div class="wrap-input100 validate-input" data-validate = "Enter username">
              <input class="input100" type="text" v-model="form.userName" :placeholder="$t('login.form.username')">
              <span class="focus-input100" data-placeholder=""></span>
            </div>
          </FormItem>

          <FormItem prop="password">
            <div class="wrap-input100 validate-input" data-validate="Enter password">
              <input class="input100" type="password" v-model="form.password" :placeholder="$t('login.form.password')">
              <span class="focus-input100" data-placeholder=""></span>
            </div>
          </FormItem>

          <div class="contact100-form-checkbox">
            <input class="input-checkbox100" type="checkbox" id="ckb1" v-model="form.rememberme">
            <label class="label-checkbox100" for="ckb1">
              Remember me
            </label>
          </div>
          <Alert closable type="error" show-icon ref="fallback" v-if="error">...</Alert>

          <div class="container-login100-form-btn">
            <Button @click="handleSubmit" type="primary" class="login100-form-btn">{{$t('login.form.login')}}</Button>
          </div>

          <div class="text-center p-t-90">
            <a class="txt1" href="#">
              Forgot Password?
            </a>
          <p class="txt1 login-tip">{{ $t('login.tips.bottom')}}</p>
          </div>
        </Form>
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
        userName: 'super_admin',
        password: '',
        rememberme: false,
        spinShow: true
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
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$Spin.show()
          this.handleLogin({
            user: this.form.userName,
            password: this.form.password,
            remember: this.form.rememberme
          }).then(res => {
            this.getUserInfo().then(res => {
              this.$Spin.hide()
              this.$router.push({
                name: this.$config.homeName
              })
            }).catch(err => {
              this.$Spin.hide()
              this.message(err.toString())
            })
          }).catch((err) => {
            this.$Spin.hide()
            this.message(err.toString())
          })
        }
      })
    },
    message (message) {
      this.error = true
      this.$nextTick().then(() => {
        this.$refs.fallback.$scopedSlots.default()[0].elm.data = message
        setTimeout(() => { this.error = false }, 5000)
      })
    }
  }
}
</script>

<style>
  .ivu-form-item {
    margin-bottom: 0;
  }
  .ivu-form-item-error-tip {
    color: #ffff00
  }
</style>
