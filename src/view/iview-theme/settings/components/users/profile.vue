<template>
  <v-card flat class="user-profile-page">
    <v-card-text class="p-b-90">
      <div class="text-h4 font-weight-black">{{ $t('profile.header') }}</div>
      <Row :gutter="30">
        <i-col span="8">
          <Card shadow class="elevation-4 rounded-lg mt-4 card-profile" :class="{ 'card-profile-2': card_active }">
            <div style="text-align:center" slot="title" class=" pt-4">
              <Upload ref="upload"
                :show-upload-list="false"
                :before-upload="onChange"
                :format="['jpg','jpeg','png']"
                :max-size="2048"
                action=""
                >
                <Button type="primary" shape="circle" icon="md-camera" class="upload-picture"></Button>
              </Upload>
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
                <div class="flex-fill of-hidden">
                  <span class="fs-16 mb-2 blue-grey--text text--lighten-1 font-weight-bold d-block">
                    {{ $t('profile.card.description') }}
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
                {{ $t('profile.personal_info.title') }}
              </v-tab>
              <v-tab>
                {{ $t('profile.account_info.title') }}
              </v-tab>
              <v-tab-item>
                <Form ref="profile_form" :model="profile" label-position="top" :rules="profile_rules">
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem :label="$t('profile.personal_info.first_name')" prop="first_name">
                        <Input v-model="profile.first_name">
                          <Select v-model="profile.title" slot="prepend" style="width: 80px">
                            <Option value="Dr.">
                              {{ $t('profile.personal_info.name_title.dr') }}
                            </Option>
                            <Option value="Esq.">
                              {{ $t('profile.personal_info.name_title.esq') }}
                            </Option>
                            <Option value="Hon.">
                              {{ $t('profile.personal_info.name_title.hon') }}
                            </Option>
                            <Option value="Jr.">
                              {{ $t('profile.personal_info.name_title.jr') }}
                            </Option>
                            <Option value="Mr.">
                              {{ $t('profile.personal_info.name_title.mr') }}
                            </Option>
                            <Option value="Mrs.">
                              {{ $t('profile.personal_info.name_title.mrs') }}
                            </Option>
                            <Option value="Ms.">
                              {{ $t('profile.personal_info.name_title.ms') }}
                            </Option>
                            <Option value="Msgr.">
                              {{ $t('profile.personal_info.name_title.msgr') }}
                            </Option>
                            <Option value="Prof.">
                              {{ $t('profile.personal_info.name_title.prof') }}
                            </Option>
                            <Option value="Rev.">
                              {{ $t('profile.personal_info.name_title.rev') }}
                            </Option>
                            <Option value="Rt. Hon.">
                              {{ $t('profile.personal_info.name_title.rt_hon') }}
                            </Option>
                            <Option value="Sr.">
                              {{ $t('profile.personal_info.name_title.sr') }}
                            </Option>
                            <Option value="St.">
                              {{ $t('profile.personal_info.name_title.st') }}
                            </Option>
                          </Select>
                        </Input>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem :label="$t('profile.personal_info.last_name')">
                        <Input v-model="profile.last_name"></Input>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem :label="$t('profile.personal_info.email')" prop="email">
                        <Input v-model="profile.email"></Input>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem :label="$t('profile.personal_info.phone')" prop="phone">
                        <Input v-model="profile.phone"></Input>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem :label="$t('profile.personal_info.gender')" class="gender-field" prop="gender">
                        <Select v-model="profile.gender">
                          <Option value="female">
                            {{ $t('profile.personal_info.female') }}
                          </Option>
                          <Option value="male">
                            {{ $t('profile.personal_info.male') }}
                          </Option>
                          <Option value="not_sure">
                            {{ $t('profile.personal_info.not_sure') }}
                          </Option>
                          <Option value="rather_not_say">
                            {{ $t('profile.personal_info.rather_not_say') }}
                          </Option>
                          <Option value="other">
                            {{ $t('profile.personal_info.other_pleasestate') }}
                          </Option>
                        </Select>
                        <FormItem :label="$t('profile.personal_info.gender_other')" v-if="profile.gender === 'other'">
                          <Input v-model="other_gender"></Input>
                        </FormItem>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem :label="$t('profile.personal_info.bday')" prop="bday">
                        <DatePicker type="date" :options="bday_options" :placeholder="$t('profile.personal_info.bday_placeholder')" v-model="profile.bday" :format="$t('i.datepicker.format')" style="width: 100%"></DatePicker>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Divider></Divider>
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem :label="$t('profile.personal_info.rfc')" prop="rfc">
                        <Input v-model="profile.rfc"></Input>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem :label="$t('profile.personal_info.tel_oficina')" prop="tel_oficina">
                        <Input v-model="profile.tel_oficina"></Input>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Row :gutter="20">
                    <!-- <i-col span="12">
                      <FormItem :label="$t('profile.personal_info.no_licencia')">
                        <Input v-model="profile.no_licencia"></Input>
                      </FormItem>
                    </i-col> -->
                    <i-col span="12">
                      <FormItem :label="$t('profile.personal_info.no_licencia')" prop="no_licencia">
                        <Input v-model="profile.no_licencia"></Input>
                      </FormItem>
                    </i-col>
                    <i-col span="6">
                      <FormItem :label="$t('profile.personal_info.profesion')" prop="profesion">
                        <Input v-model="profile.profesion"></Input>
                      </FormItem>
                    </i-col>
                    <i-col span="6">
                      <FormItem :label="$t('profile.personal_info.especialidad')" prop="especialidad">
                        <Input v-model="profile.especialidad"></Input>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Divider></Divider>
                  <Row :gutter="20">
                    <i-col span="24">
                      <FormItem :label="$t('profile.personal_info.biography')" prop="biography">
                        <editor ref="editor" :value="profile.initial_biography" :cache="false" :menu="editoMenu" @on-change="handleChange" />
                      </FormItem>
                    </i-col>
                  </Row>
                  <Divider></Divider>
                  <Row>
                    <i-col span="8">
                      <Button icon="ios-add-circle-outline" class="w-full" @click.prevent="openModalAddress()">
                        {{ $t('profile.button.add_address') }}
                      </Button>
                    </i-col>
                  </Row>
                  <br>
                  <Row :gutter="20">
                    <i-col span="12" v-for="address in profile.address" :key="address.id" >
                      <v-card :color="(!!address.favorite) ? '#3c495e' : ''" :dark="!!address.favorite" :shaped="!!address.favorite" class="mb-5">
                        <v-card-title class="headline">
                          {{ address.alias }}
                        </v-card-title>

                        <v-card-subtitle>
                          <b>{{ address.city }}, <br>{{ address.state }}, {{ address.country }}</b>
                        </v-card-subtitle>
                        <v-card-actions class="justify-end">
                          <div class="fs-12 grey--text flex-fill pl-2">
                            {{ address.street }} {{ address.exterior_number }}, {{ address.suburb }} <br>{{ address.directions }}
                          </div>
                          <v-btn text x-small class="transparent ml-1" :color="(!!address.favorite) ? '#FFF' : 'primary'" @click.prevent="editModalAddress(address)">
                            {{ $t('profile.button.edit_address') }}
                          </v-btn>
                          <v-btn text x-small class="transparent ml-1" color="red" @click.prevent="deleteModalAddress(address)">
                            {{ $t('profile.button.delete_address') }}
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </i-col>
                  </Row>
                </Form>
              </v-tab-item>
              <v-tab-item>
                <Form ref="account_form" :model="profile" label-position="top" :rules="profile_rules">
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem :label="$t('profile.account_info.role')" prop="user_group_id">
                        <Select v-model="profile.user_group_id">
                          <Option :value="group.id.toString()" v-for="group in groups" :key="group.id">
                            {{ group.name }}
                          </Option>
                        </Select>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem :label="$t('profile.account_info.active')">
                        <i-switch v-model="profile.active" />
                      </FormItem>
                    </i-col>
                  </Row>
                  <Row :gutter="20">
                    <i-col span="12">
                      <FormItem :label="$t('profile.account_info.username')" prop="username">
                        <Input v-model="profile.username"></Input>
                      </FormItem>
                    </i-col>
                    <i-col span="12">
                      <FormItem :label="$t('profile.account_info.status')">
                        <Tag color="success" v-if="profile.email_verified">{{ $t('profile.account_info.email_verified') }}</Tag>
                        <Tooltip v-else :content="$t('profile.account_info.email_verified_tooltip')" placement="bottom">
                          <Tag color="warning">{{ $t('profile.account_info.email_no_verified') }}</Tag>
                        </Tooltip>
                      </FormItem>
                    </i-col>
                  </Row>
                  <Divider></Divider>
                  <Row :gutter="20">
                    <i-col span="6">
                      <FormItem :label="$t('profile.account_info.password')" prop="password">
                        <Input :type="pasword_type" v-model="profile.password" :icon="password_icon" @on-click="togglePasswordVisible('password')" autocomplete="new-password"></Input>
                      </FormItem>
                    </i-col>

                    <i-col span="6">
                      <FormItem :label="$t('profile.account_info.confirm_password')" prop="confirm_password">
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
    <v-speed-dial :bottom="true" :right="true" direction="top" transition="slide-y-reverse-transition" v-if="!loading">
      <template v-slot:activator>
        <v-btn color="green darken-2" fab @click.prevent="saveUser">
          <v-icon>
            mdi-content-save
          </v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
    <Modal v-model="uploadProfileModal" width="360" footer-hide>
      <Row type="flex">
        <i-col span="8">
          <v-avatar class="mb-3 transition-swing" color="grey" size="110" @click="card_active=!card_active">
            <v-img :src="profile.avatar"></v-img>
          </v-avatar>
        </i-col>
        <i-col span="1">
          <Divider type="vertical" class="h-full" ></Divider>
        </i-col>
        <i-col span="15">
          <picture-input
            ref="pictureInput"
            width="300"
            height="300"
            accept="image/jpeg,image/png"
            button-class="btn"
            @change="onChange">
          </picture-input>
        </i-col>
      </Row>
    </Modal>
    <Modal v-model="modalUserAddress" :title="address_form_title" @on-ok="updateSelectedAddress()">
      <Form ref="address_form" :model="address_form"  label-position="top">
        <Row :gutter="20">
          <i-col span="12">
            <FormItem :label="$t('profile.personal_info.address.alias')">
              <Input v-model="address_form.alias"></Input>
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem :label="$t('profile.personal_info.address.default')">
              <i-switch v-model="address_form.favorite"/>
            </FormItem>
          </i-col>
        </Row>
        <Row :gutter="20">
          <i-col span="12">
            <FormItem :label="$t('profile.personal_info.address.street')">
              <Input v-model="address_form.street"></Input>
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem :label="$t('profile.personal_info.address.city')">
              <Input v-model="address_form.city"></Input>
            </FormItem>
          </i-col>
        </Row>
        <Row :gutter="20">
          <i-col span="12">
            <FormItem :label="$t('profile.personal_info.address.suburb')">
              <Input v-model="address_form.suburb"></Input>
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem :label="$t('profile.personal_info.address.township')">
              <Input v-model="address_form.township"></Input>
            </FormItem>
          </i-col>
        </Row>
        <Row :gutter="20">
          <i-col span="6">
            <FormItem :label="$t('profile.personal_info.address.exterior_number')">
              <Input v-model="address_form.exterior_number"></Input>
            </FormItem>
          </i-col>
          <i-col span="6">
            <FormItem :label="$t('profile.personal_info.address.interior_number')">
              <Input v-model="address_form.interior_number"></Input>
            </FormItem>
          </i-col>
        </Row>
        <Row :gutter="20">
          <i-col span="12">
            <FormItem :label="$t('profile.personal_info.address.state')">
              <Input v-model="address_form.state"></Input>
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem :label="$t('profile.personal_info.address.country')">
              <Input v-model="address_form.country"></Input>
            </FormItem>
          </i-col>
        </Row>
        <Row :gutter="20">
          <i-col span="24">
            <FormItem :label="$t('profile.personal_info.address.directions')">
              <Input type="textarea" v-model="address_form.directions"></Input>
            </FormItem>
          </i-col>
        </Row>
      </Form>
    </Modal>
    <Modal v-model="modalDeleteUserAddress" ok-text="OK" cancel-text="No" @on-ok="deleteSelectedAddress()" ref="delete_modal">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>{{ $t('profile.personal_info.address.delete_address') }}</span>
      </p>
      <div style="text-align:center">
        <p>{{ $t('profile.personal_info.address.delete_message') }}</p>
      </div>
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
import PictureInput from 'vue-picture-input'
import config from '@/config'
const { homeName } = config

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
        initial_biography: '',
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
        confirm_password: '',
        address: []
      },
      loading: true,
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
      uploadProfileModal: false,
      modalUserAddress: false,
      modalDeleteUserAddress: false,
      address_form: {},
      profile_rules: {
        first_name: [
          { required: true, message: this.$t('profile.messages.error.first_name.empty_name'), trigger: 'blur' }
        ],
        email: [
          { required: true, message: this.$t('profile.messages.error.email.empty_email'), trigger: 'blur' }
        ],
        user_group_id: [
          { required: true, message: this.$t('profile.messages.error.user_group_id.empty_group_id'), trigger: 'change' }
        ],
        username: [
          { required: true, message: this.$t('profile.messages.error.username.empty_username'), trigger: 'blur' }
        ],
        password: [
          {
            validator: (rule, value, callback) => {
              if (value === '' && this.profile.confirm_password === '') {
                callback()
              } else {
                if (this.profile.confirm_password === '') {
                  callback(new Error(this.$t('profile.messages.error.password.empty_confirm')))
                } else if (this.profile.password !== this.profile.confirm_password) {
                  callback(new Error(this.$t('profile.messages.error.password.confirm_dont_match')))
                } else {
                  callback()
                }
              }
            },
            trigger: 'blur'
          }
        ],
        confirm_password: [
          {
            validator: (rule, value, callback) => {
              this.$refs.account_form.validateField('password')
              callback()
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  components: {
    Editor,
    PictureInput
  },
  watch: {
  },
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
    },
    address_form_title () {
      return this.address_form.id ? this.$t('profile.personal_info.address.update_address') : this.$t('profile.personal_info.address.create_address')
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
        if (!id) resolve(false)
        this.getUserById(id).then(data => {
          this.profile.active = data.active
          this.profile.avatar = data.avatar
          this.profile.address = data.address

          this.profile.bday = this.$moment(data.bday).toDate()
          this.profile.biography = this.profile.initial_biography = data.biography
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

          if (!['female', 'male', 'not_sure', 'rather_not_say'].includes(this.profile.gender)) {
            this.other_gender = this.profile.gender
            this.profile.gender = 'other'
          }

          resolve()
        }).catch((err) => {
          if (err.data) {
            for (let e in err.data) {
              this.$Notice.error({
                title: 'Update Error',
                desc: this.$t('profile.messages.error.' + `${e}.${err.data[e]}`)
              })
            }
          } else {
            this.$Notice.error({
              title: 'Update Error',
              desc: this.$t('profile.messages.error.' + err.message)
            })
          }
          reject(new Error('go_back'))
        })
      })
    },
    saveUser () {
      Promise.all([
        this.$refs.profile_form && this.$refs.profile_form.validate(),
        this.$refs.account_form && this.$refs.account_form.validate()
      ]).then(valid => {
        if (valid[0] === true && (valid[1] === true || valid[1] === undefined)) {
          if (this.profile.gender === 'other') this.profile.gender = this.other_gender
          if (this.profile.address) {
            this.profile.address = this.profile.address.map(a => {
              return {
                ...a,
                ...{ favorite: a.favorite ? 1 : 0 }
              }
            })
          }
          this.saveUserData({ ...this.profile, ...{ bday: this.$moment(this.profile.bday).format('YYYY-MM-DD'), initial_biography: '' } }).then((response) => {
            this.$Notice.success({
              title: 'Update success',
              desc: this.$t('profile.messages.success.update')
            })
            this.loadUser(this.profile.id)
          }).catch((err) => {
            if (err.data) {
              for (let e in err.data) {
                this.$Notice.error({
                  title: 'Update Error',
                  desc: this.$t('profile.messages.error.' + `${e}.${err.data[e]}`)
                })
              }
            } else {
              this.$Notice.error({
                title: 'Update Error',
                desc: this.$t('profile.messages.error.' + err.message)
              })
            }
          })
        } else {
          this.$Notice.error({
            title: 'Save Error'
          })
        }
      })
    },
    onChange (image) {
      if (image) {
        var reader = new FileReader()
        reader.addEventListener('load', (evt) => {
          var img = document.createElement('img')
          img.onload = () => {
            var canvas = document.createElement('canvas')
            var ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0)

            var MAX_WIDTH = 100
            var MAX_HEIGHT = 100
            var width = img.width
            var height = img.height

            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width
                width = MAX_WIDTH
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height
                height = MAX_HEIGHT
              }
            }
            canvas.width = width
            canvas.height = height
            ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0, width, height)

            let dataurl = canvas.toDataURL('image/jpeg')

            this.profile.avatar = dataurl
          }
          img.src = evt.target.result
        })
        reader.readAsDataURL(image)
      } else {
      }
    },
    handleChange (html, text) {
      this.profile.biography = html
    },
    openModalAddress () {
      this.address_form = {}
      this.modalUserAddress = true
    },
    editModalAddress (address) {
      this.address_form.id = address.id
      this.address_form.alias = address.alias
      this.address_form.favorite = !!address.favorite
      this.address_form.street = address.street
      this.address_form.city = address.city
      this.address_form.suburb = address.suburb
      this.address_form.township = address.township
      this.address_form.exterior_number = address.exterior_number
      this.address_form.interior_number = address.interior_number
      this.address_form.state = address.state
      this.address_form.country = address.country
      this.address_form.directions = address.directions

      this.modalUserAddress = true
    },
    deleteModalAddress (address) {
      this.address_form = address
      this.$swal({
        title: this.$t('profile.personal_info.address.delete_address'),
        text: this.$t('profile.personal_info.address.delete_message'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteSelectedAddress()
        }
      })
    },
    deleteSelectedAddress () {
      let deleted_index = this.profile.address.findIndex(f => f.id === this.address_form.id)
      if (deleted_index > -1) {
        this.profile.address.splice(deleted_index, 1)
      }
    },
    updateSelectedAddress () {
      let _selectedAddress = this.profile.address.find(f => f.id === this.address_form.id);
      if (_selectedAddress) {
        if (this.address_form.favorite) {
          this.profile.address.forEach(f => {
            f.favorite = false
          });
        }
        _selectedAddress.alias = this.address_form.alias
        _selectedAddress.favorite = !!this.address_form.favorite
        _selectedAddress.street = this.address_form.street
        _selectedAddress.city = this.address_form.city
        _selectedAddress.suburb = this.address_form.suburb
        _selectedAddress.township = this.address_form.township
        _selectedAddress.exterior_number = this.address_form.exterior_number
        _selectedAddress.interior_number = this.address_form.interior_number
        _selectedAddress.state = this.address_form.state
        _selectedAddress.country = this.address_form.country
        _selectedAddress.directions = this.address_form.directions
      } else {
        if (this.address_form.favorite) {
          this.profile.address.forEach(f => {
            f.favorite = false
          });
        }

        this.profile.address.push({ ...this.address_form })
      }
    }
  },
  created () {},
  mounted () {
    this.loading = true
    let _promises = [this.loadGroups()]
    if (this.$route.params.profile) _promises.push(this.loadUser(decrypt(this.$route.params.profile)))
    Promise.all(_promises).then(() => {
      this.loading = false
    }).catch(() => {
      this.loading = false
      this.$router.push({ name: homeName })
    })
  }
}

</script>
<style lang="less">
.user-profile-page {
  .v-card > .v-speed-dial {
    position: fixed;
    &.v-speed-dial--right {
      right: 32px;
    }
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
      z-index: 8;
      left: 0;
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

  .preview-container {
    position: relative;
    max-width: 207px !important;
    height: 117px !important;
    .picture-preview {
      z-index: 8 !important;
      background-color: transparent !important;
    }
    .picture-inner {
      position: absolute;
      top: 50% !important;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      margin: 0;
      z-index: 8 !important;
      border-radius: 20px !important;
      background: #f1f0fd;
      border: none;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='lightgrey' rx='20' ry='20' stroke-width='6' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
      .picture-inner-text {
        font-size: 1.3em;
        color: #b5b8d2;
      }
    }
  }
  .ivu-upload-select {
    width: 114px;
    margin: 0 auto;
    position: relative;
  }
}
</style>
