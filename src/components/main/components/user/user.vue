<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge :dot="!!messageUnreadCount">
        <Avatar :src="userAvatar"/>
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="profile">{{ $t('profile.title') }}</DropdownItem>
        <DropdownItem name="message">
          {{ $t('top.message_page.title') }}<Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
        </DropdownItem>
        <DropdownItem name="logout">{{ $t('login.form.logout') }}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
import { mapActions } from 'vuex'
export default {
  name: 'User',
  props: {
    userAvatar: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    logout () {
      this.handleLogOut().then(() => {
        this.$router.push({
          name: 'login'
        }).catch(() => {})
      }).catch((err) => {
        this.notify((err && err.data && err.data.message) || (err.message) || err.toString())
      })
    },
    message () {
      this.$route.name !== 'message_page' && this.$router.push({
        name: 'message_page'
      }).catch(() => {})
    },
    profile () {
      this.$router.push({
        name: 'profile'
      }).catch(() => {})
    },
    handleClick (name) {
      switch (name) {
        case 'logout': this.logout()
          break
        case 'message': this.message()
          break
        case 'profile': this.profile()
          break
      }
    },
    notify (message) {
      this.$Notice.error({
        title: 'Logout Error',
        desc: this.$t('logout.messages.error.' + message)
      })
    }
  }
}
</script>
