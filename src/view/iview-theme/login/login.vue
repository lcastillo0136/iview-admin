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
        userName: 'super_admin',
        password: ''
      }
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
            password: this.form.password
          }).then(res => {
            this.getUserInfo().then(res => {
              this.$Spin.hide()
              this.$router.push({
                name: this.$config.homeName
              })
            }).catch(err => {
              this.$Spin.hide()
              this.$Message.error(err.toString())
            })
          }).catch((err) => {
            this.$Spin.hide()
            this.$Message.error(err.toString())
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
