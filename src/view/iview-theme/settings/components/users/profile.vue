<template>
  <v-card flat class="user-profile-page">
    <v-card-text class="p-b-70">
      <div class="text-h4 font-weight-black">Profile</div>
      <Row :gutter="30">
        <i-col span="8">
          <Card shadow class="elevation-4 rounded-lg mt-4 card-profile" :class="{'card-profile-2': card_active}">
            <div style="text-align:center" slot="title" class=" pt-4">
              <Button type="primary" shape="circle" icon="md-camera" class="upload-picture" @click="uploadProfileModal=true"></Button>
              <v-avatar class="mb-3 transition-swing" color="grey" size="110" @click="card_active=!card_active">
                <v-img :src="profile.avatar"></v-img>
              </v-avatar>
              <div class="text-h5">{{ profile.title }} {{ profile.first_name }} {{ profile.last_name }}</div>
              <span class="blue-grey--text text--lighten-1 font-weight-bold d-block mb-3 mt-1">{{ profile.profesion }}</span>
              <!-- <Button type="primary" shape="circle" icon="md-person-add" ghost class="mb-3">Follow</Button> -->
            </div>
            <List>
              <ListItem v-for="skill in profile.skills" :key="skill.name">
                <div class="flex-fill">
                  <span class="fs-16 blue-grey--text text--lighten-1 font-weight-bold d-block">
                    {{ skill.name }}
                    <span class="fs-10 font-weight-light float-right">{{ skill.percentage }} %</span>
                  </span>
                  <Progress :percent="skill.percentage" status="active" hide-info />
                </div>
              </ListItem>
              <ListItem>
                <div class="flex-fill">
                  <span class="fs-16 mb-2 blue-grey--text text--lighten-1 font-weight-bold d-block">
                    Description
                  </span>
                  <span v-html="profile.biography"></span>
                </div>
              </ListItem>
            </List>
          </Card>
        </i-col>

        <i-col span="16">
          <Card shadow class="elevation-4 rounded-lg mt-4 user-data">
            <v-tabs class="rounded-lg">
              <v-tab>
                Personal Information
              </v-tab>
              <v-tab>
                Account Information
              </v-tab>
              <v-tab-item>
                <Form :model="profile" label-position="top">
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem label="First Name">
                        <Input v-model="profile.first_name">
                          <Select v-model="profile.title" slot="prepend" style="width: 80px">
                            <Option value="Dr.">
                              Dr. (Doctor)
                            </Option>
                            <Option value="Esq.">
                              Esq. (Esquire)
                            </Option>
                            <Option value="Hon.">
                              Hon. (Honorable)
                            </Option>
                            <Option value="Jr.">
                              Jr. (Junior)
                            </Option>
                            <Option value="Mr.">
                              Mr.
                            </Option>
                            <Option value="Mrs.">
                              Mrs.
                            </Option>
                            <Option value="Ms.">
                              Ms.
                            </Option>
                            <Option value="Msgr.">
                              Msgr. (Monsignor)
                            </Option>
                            <Option value="Prof.">
                              Prof. (Professor)
                            </Option>
                            <Option value="Rev.">
                              Rev. (Reverend)
                            </Option>
                            <Option value="Rt. Hon.">
                              Rt. Hon. (Right Honorable)
                            </Option>
                            <Option value="Sr.">
                              Sr. (Senior)
                            </Option>
                            <Option value="St.">
                              St. (Saint)
                            </Option>
                          </Select>
                        </Input>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem label="Last Name">
                        <Input v-model="profile.last_name"></Input>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem label="Email">
                        <Input v-model="profile.email"></Input>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem label="Phone">
                        <Input v-model="profile.phone"></Input>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem label="Gender" class="gender-field">
                        <Select v-model="profile.gender">
                          <Option value="female">
                            Female
                          </Option>
                          <Option value="male">
                            Male
                          </Option>
                          <Option value="not_sure">
                            Not sure
                          </Option>
                          <Option value="rather_not_say">
                            Rather not say
                          </Option>
                          <Option value="other">
                            Others (please state)
                          </Option>
                        </Select>
                        <FormItem label="Other" v-if="profile.gender === 'other'">
                          <Input v-model="other_gender"></Input>
                        </FormItem>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem label="Birthday">
                        <DatePicker type="date" :options="bday_options" placeholder="Select date" v-model="profile.bday" :format="$t('i.datepicker.format')" style="width: 100%"></DatePicker>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Divider></Divider>
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem label="RFC">
                        <Input v-model="profile.rfc"></Input>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem label="Work Phone">
                        <Input v-model="profile.tel_oficina"></Input>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Row :gutter="20">
                    <!-- <i-col span="12">
                      <FormItem label="License Number">
                        <Input v-model="profile.no_licencia"></Input>
                      </FormItem>
                    </i-col> -->
                    <i-col span="12">
                      <FormItem label="Professional license">
                        <Input v-model="profile.no_licencia"></Input>
                      </FormItem>
                    </i-col>
                    <i-col span="6">
                      <FormItem label="Profession">
                        <Input v-model="profile.profesion"></Input>
                      </FormItem>
                    </i-col>
                    <i-col span="6">
                      <FormItem label="Speciality">
                        <Input v-model="profile.especialidad"></Input>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Divider></Divider>
                  <Row :gutter="20">
                    <i-col span="24">
                      <FormItem label="Biography">
                        <editor ref="editor" :value.sync="profile.biography" :cache="false" :menu="editoMenu" />
                      </FormItem>
                    </i-col>
                  </Row>
                </Form>
              </v-tab-item>
              <v-tab-item>
                <Form :model="profile" label-position="top">
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem label="Role">
                        <Select v-model="profile.user_group_id">
                          <Option :value="group.id.toString()" v-for="group in groups" :key="group.id">
                            {{ group.name }}
                          </Option>
                        </Select>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem label="Active">
                        <i-switch v-model="profile.active" />
                      </FormItem>
                    </i-col>
                  </Row>
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem label="Account ID">
                        <Input v-model="profile.username"></Input>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem label="Status">
                        <Tag color="success" v-if="profile.email_verified">Verified</Tag>
                        <Tooltip v-else content="Resend verification email" placement="bottom">
                          <Tag color="warning">No Verified</Tag>
                        </Tooltip>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Divider></Divider>
                  <Row :gutter="20">
                    <i-col span="6">
                      <FormItem label="Account password">
                        <Input :type="pasword_type" v-model="profile.password" :icon="password_icon" @on-click="togglePasswordVisible('password')" autocomplete="new-password"></Input>
                      </FormItem>
                    </i-col>

                    <i-col span="6">
                      <FormItem label="Confirm account password">
                        <Input :type="pasword_confirm_type" v-model="profile.confirm_password" :icon="password_confirm_icon" @on-click="togglePasswordVisible('confirm_password')" autocomplete="new-password"></Input>
                      </FormItem>
                    </i-col>
                  </Row>
                </Form>
              </v-tab-item>
            </v-tabs>
          </Card>
        </i-col>
      </Row>
    </v-card-text>
    <v-speed-dial :bottom="true" :right="true" direction="top" transition="slide-y-reverse-transition" class="m-r-30" v-if="!loading">
      <template v-slot:activator>
        <v-btn color="green darken-2" fab @click.prevent="saveUser">
          <v-icon>
            mdi-content-save
          </v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
    <Modal v-model="uploadProfileModal" width="360" footer-hide>
      <Row :gutter="20" type="flex">
        <i-col span="8">
          <v-avatar class="mb-3 transition-swing" color="grey" size="110" @click="card_active=!card_active">
            <v-img :src="profile.avatar"></v-img>
          </v-avatar>
        </i-col>
        <i-col span="1">
          <Divider type="vertical" class="h-full" ></Divider>
        </i-col>
        <i-col span="16">
        </i-col>
      </Row>
    </Modal>
    <Spin fix v-if="loading">
      <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
      <div>Loading</div>
    </Spin>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex'
import Editor from '_c/editor'
import { decrypt } from '@/libs/util'

export default {
  name: 'UsersAddSettings',
  props: {
  },
  data () {
    return {
      profile: {
        id: null,
        first_name: '',
        last_name: '',
        profesion: '',
        skills: [],
        avatar: '',
        user_group_id: -1,
        active: false,
        bday: new Date(),
        biography: null,
        cedula_profesional: null,
        email: '',
        phone: '',
        email_verified: false,
        end_working: null,
        especialidad: null,
        gender: '',
        last_login: null,
        matricula_profesional: null,
        no_licencia: null,
        rfc: null,
        start_working: null,
        tel_oficina: null,
        terms_and_conditions: false,
        title: null,
        username: '',
        password: '',
        confirm_password: ''
      },
      loading: false,
      card_active: false,
      other_gender: '',
      bday_options: {
        disabledDate (date) {
          return date && date.valueOf() > Date.now()
        }
      },
      editoMenu: {
        'fontName': false,
        'image': false,
        'video': false,
        'code': false
      },
      groups: [],
      password: {
        visible: false,
        visible_confirm: false
      },
      uploadProfileModal: false
    }
  },
  components: {
    Editor
  },
  watch: {},
  computed: {
    password_icon () {
      return this.password.visible ? 'ios-eye-outline' : 'ios-eye-off-outline'
    },
    password_confirm_icon () {
      return this.password.visible_confirm ? 'ios-eye-outline' : 'ios-eye-off-outline'
    },
    pasword_type () {
      return this.password.visible ? 'text' : 'password'
    },
    pasword_confirm_type () {
      return this.password.visible_confirm ? 'text' : 'password'
    }
  },
  methods: {
    ...mapActions([
      'getUsersGroups',
      'getUserById',
      'saveUserData'
    ]),
    notify (message) {
      this.$Notice.error({
        title: 'Logout Error',
        desc: this.$t('logout.messages.error.' + message)
      })
    },
    loadGroups () {
      return new Promise(resolve => {
        this.getUsersGroups({ 'pages': false }).then(({ data, pagination }) => {
          this.groups = data
          resolve()
        })
      })
    },
    togglePasswordVisible (target) {
      if (target === 'password') {
        this.password.visible = !this.password.visible
      } else {
        this.password.visible_confirm = !this.password.visible_confirm
      }
    },
    loadUser (id) {
      return new Promise((resolve, reject) => {
        if (!this.$route.params.profile) resolve(false)
        this.getUserById(id).then(data => {
          this.profile.active = data.active
          this.profile.avatar = data.avatar
          this.profile.bday = this.$moment(data.bday).toDate()
          this.profile.biography = data.biography
          this.profile.cedula_profesional = data.cedula_profesional
          this.profile.email = data.email
          this.profile.email_verified = data.email_verified
          this.profile.end_working = data.end_working
          this.profile.especialidad = data.especialidad
          this.profile.first_name = data.first_name
          this.profile.gender = data.gender
          this.profile.id = data.id
          this.profile.last_name = data.last_name
          this.profile.matricula_profesional = data.matricula_profesional
          this.profile.no_licencia = data.no_licencia
          this.profile.phone = data.phone
          this.profile.profesion = data.profesion
          this.profile.rfc = data.rfc
          this.profile.start_working = data.start_working
          this.profile.tel_oficina = data.tel_oficina
          this.profile.terms_and_conditions = data.terms_and_conditions
          this.profile.title = data.title
          this.profile.user_group_id = data.user_group_id
          this.profile.username = data.username

          resolve()
        })
      })
    },
    saveUser () {
      this.saveUserData({ ...this.profile, ...{ bday: this.$moment(this.profile.bday).format('YYYY-MM-DD') } }).then((response) => {
        this.$Notice.success({
          title: 'Update success',
          desc: this.$t('user.messages.success.update')
        })
        this.loadUser(this.profile.id)
      }).catch((err) => {
        this.$Notice.error({
          title: 'Update success',
          desc: this.$t('user.messages.success.' + err.message)
        })
      })
    }
  },
  created () {},
  mounted () {
    this.loading = true
    Promise.all([
      this.loadGroups(),
      this.loadUser(decrypt(this.$route.params.profile))
    ]).then(() => {
      this.loading = false
    }).catch(() => {
      this.loading = false
    })
  }
}

</script>
<style lang="less">
.user-profile-page {
  .v-card>.v-speed-dial {
    position: fixed;
  }

  .v-card .v-btn--floating {
    position: relative;
  }

  .ivu-btn-ghost.ivu-btn-primary {
    color: #2d8cf0;
    &:hover {
      color: #fff;
      background: #57a3f3;
    }
  }

  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }

  .card-profile {
    .ivu-card-body {
      padding: 0;
      .ivu-list-item {
        padding: 16px
      }
    }
    .upload-picture {
      position: absolute;
      z-index: 10
    }
  }
  .card-profile-2 {
    .ivu-card-head {
      position: relative;
      height: 210px;
      padding: 50px 16px;

      > div > * {
        z-index: 1;
        position: relative;
      }
    }
    .v-avatar {
      height: 100% !important;
      width: 100% !important;
      position: absolute !important;
      // transform: translate(-50%, -31.4%);
      border-radius: 0;
      z-index: 0;
      opacity: 0.4;
      left: 0;
      top: 0;
    }
  }

  .ivu-select-dropdown-list {
    text-align: left
  }

  .gender-field {
    .ivu-form-item-content {
      display: flex;
      .ivu-form-item {
        margin-top: -32px;
        flex: 0 0 50%;
        .ivu-form-item-label {
          padding: 0;
        }
      }
    }
  }

  .user-data {
    .ivu-card-body {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
    }
    .v-window__container {
      padding: 16px;
    }
    .v-tabs-bar {
      border-bottom: solid 1px #ededed;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
</style>
