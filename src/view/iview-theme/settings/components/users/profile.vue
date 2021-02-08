<template>
  <v-card flat>
    <v-card-text>
      <div class="text-h4 font-weight-black">Profile</div>
      <Row :gutter="30">
        <i-col span="8">
          <Card shadow class="elevation-4 rounded-lg mt-4 card-profile" :class="{'card-profile-2': card_active}">
            <div style="text-align:center" slot="title" class=" pt-4">
              <v-avatar class="mb-3 transition-swing" color="grey" size="110" @click="card_active=!card_active">
                <v-img :src="profile.avatar"></v-img>
              </v-avatar>
              <div class="text-h5">{{ profile.title }} {{ profile.first_name }} {{ profile.last_name }}</div>
              <span class="blue-grey--text text--lighten-1 font-weight-bold d-block mb-3 mt-1">{{ profile.profesion }}</span>
              <Button type="primary" shape="circle" icon="md-person-add" ghost class="mb-3">Follow</Button>
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
          <Card shadow class="elevation-4 rounded-lg mt-4 pt-3">
            <p slot="title">Personal Information</p>
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
                    {{ profile.phone | phone }}
                  </FormItem>
                </i-col>
              </Row>
              <Row :gutter="20">
                <i-col span="12">
                  <FormItem label="Gender" class="gender-field">
                    <Select v-model="profile.gender">
                      <Option value="Female">
                        Female
                      </Option>
                      <Option value="Male">
                        Male
                      </Option>
                      <Option value="Not sure">
                        Not sure
                      </Option>
                      <Option value="Rather not say">
                        Rather not say
                      </Option>
                      <Option value="Other">
                        Others (please state)
                      </Option>
                    </Select>
                    <FormItem label="Other" v-if="profile.gender == 'Other'">
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
                    <Input v-model="profile.tel_oficina"></Input>
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
              <Row :gutter="20">
                <i-col span="24">
                  <FormItem label="Biography">
                    <editor ref="editor" :value.sync="profile.biography" :cache="false" :menu="editoMenu" />
                  </FormItem>
                </i-col>
              </Row>
              <!-- <Row :gutter="20">
                <i-col span="12" offset="12">
                  <FormItem label="Active">
                    <i-switch />
                  </FormItem>
                </i-col>
              </Row> -->
            </Form>
          </Card>
        </i-col>
      </Row>
    </v-card-text>
    <v-speed-dial v-model="fab" :bottom="true" :right="true" direction="top" transition="slide-y-reverse-transition">
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" fab>
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-chevron-up
          </v-icon>
        </v-btn>
      </template>
      <v-btn fab small color="green">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn fab small color="indigo">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab small color="red">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex'
import Editor from '_c/editor'

export default {
  name: 'UsersAddSettings',
  props: {
    groups: Array
  },
  data () {
    return {
      profile: {
        id: null,
        first_name: 'Sierra',
        last_name: 'Brooks',
        profesion: 'Project Manager',
        skills: [
          {
            name: 'Workload',
            percentage: 45
          }
        ],
        avatar: 'https://designrevision.com/demo/shards-dashboard-lite-vue/img/0.73476783.jpg',
        user_group_id: -1,
        active: true,
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
        password: ''
      },
      loading: false,
      fab: false,
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
      }
    }
  },
  components: {
    Editor
  },
  watch: {},
  computed: {},
  methods: {
    ...mapActions([]),
    notify (message) {
      this.$Notice.error({
        title: 'Logout Error',
        desc: this.$t('logout.messages.error.' + message)
      })
    }
  },
  created () {},
  mounted () {}
}

</script>
<style lang="less">
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

.card-profile {
  .ivu-card-body {
    padding: 0;
    .ivu-list-item {
      padding: 16px
    }
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
    transform: translate(-50%, -31.4%);
    border-radius: 0;
    z-index: 0;
    opacity: 0.4;
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

</style>
