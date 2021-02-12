<template>
  <div class="settings-content">
    <Card shadow :title="$t('settings.title')">
      <v-tabs vertical>
        <v-tab>
          <row class="w-full">
            <i-col span="6" class="text-center">
              <v-icon>
                mdi-application
              </v-icon>
            </i-col>
            <i-col span="18" class="p-t-4">
              {{ $t('settings.options.general') }}
            </i-col>
          </row>
        </v-tab>
        <v-tab>
          <row class="w-full">
            <i-col span="6" class="text-center">
              <v-icon>
                mdi-account
              </v-icon>
            </i-col>
            <i-col span="18" class="p-t-4">
              {{ $t('settings.options.users') }}
            </i-col>
          </row>
        </v-tab>
        <v-tab>
          <row class="w-full">
            <i-col span="6" class="text-center">
              <v-icon>
                mdi-account-key
              </v-icon>
            </i-col>
            <i-col span="18" class="p-t-4">
              {{ $t('settings.options.groups') }}
            </i-col>
          </row>
        </v-tab>
        <v-tab-item>
          <GeneralSettings></GeneralSettings>
        </v-tab-item>
        <v-tab-item>
          <UsersSettings :groups="groups"></UsersSettings>
        </v-tab-item>
        <v-tab-item>
          <RolesSettings ref="group_list" @on-load="rolesReady($event)"></RolesSettings>
        </v-tab-item>
      </v-tabs>
    </Card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import GeneralSettings from './components/general/general'
import UsersSettings from './components/users/users'
import RolesSettings from './components/roles/roles'

export default {
  name: 'settings',
  data () {
    return {
      resources: [],
      groups: [],
      loading: false
    }
  },
  components: {
    GeneralSettings,
    UsersSettings,
    RolesSettings
  },
  computed: {},
  methods: {
    ...mapActions([
    ]),
    rolesReady (groups) {
      this.groups = groups
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="less">
.settings-content {
  .ivu-card-body {
    padding: 0
  }
  .v-tabs > .v-slide-group.v-tabs-bar {
    background: #fafafa;
  }
  .v-tab.v-tab.v-tab--active {
    background: #515a6e;
    color: #fff;
  }
}
</style>
