<template>
  <div>
    <Row>
      <i-col>
        <Card>
          <Row>
            <i-col span="8">
              <Button type="primary" @click="showModal">{{ $t('directives.show_modal') }}</Button>
              <br/>
              <Button v-draggable="buttonOptions" class="draggable-btn">{{ $t('directives.this_button_draggable') }}</Button>
            </i-col>
            <i-col span="16">
              <div class="intro-con">
                &lt;Modal v-draggable="options" v-model="visible"&gt;{{ $t('directives.modal_title') }}&lt;/Modal&gt;
                <pre class="code-con">
    options = {
      trigger: '.ivu-modal-body',
      body: '.ivu-modal'
    }
                </pre>
              </div>
            </i-col>
          </Row>
        </Card>
      </i-col>
    </Row>
    <Row style="margin-top: 10px;">
      <i-col>
        <Card>
          <Row>
            <i-col span="8">
              <Input style="width: 60%" v-model="inputValue">
                <Button slot="append" v-clipboard="clipOptions">{{ $t('directives.copy_button') }}</Button>
              </Input>
            </i-col>
            <i-col span="16">
              <div class="intro-con">
                &lt;Input style="width: 60%" v-model="inputValue"&gt;
                  <br/>
                  &nbsp;&nbsp;&nbsp;&lt;Button slot="append" v-clipboard="clipOptions"&gt;{{ $t('directives.copy_button') }}&lt;/Button&gt;
                  <br/>
                &lt;/Input&gt;
                <pre class="code-con">
    clipOptions: {
      value: this.inputValue,
      success: (e) => {
        this.$Message.success('{{ $t('directives.copy_succed') }}')
      },
      error: () => {
        this.$Message.error('{{ $t('directives.copy_failedd') }}')
      }
    }
                </pre>
              </div>
            </i-col>
          </Row>
        </Card>
      </i-col>
      <Modal v-draggable="options" v-model="modalVisible">
        {{ $t('directives.drag_here') }}
      </Modal>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'directive_page',
  data () {
    return {
      modalVisible: false,
      options: {
        trigger: '.ivu-modal-body',
        body: '.ivu-modal',
        recover: true
      },
      buttonOptions: {
        trigger: '.draggable-btn',
        body: '.draggable-btn'
      },
      statu: 1,
      inputValueInitial: ''
    }
  },
  computed: {
    clipOptions () {
      return {
        value: this.inputValue,
        success: (e) => {
          this.$Message.success(this.$t('directives.copy_succed'))
        },
        error: () => {
          this.$Message.error(this.$t('directives.copy_failedd'))
        }
      }
    },
    inputValue: {
      get () {
        return this.inputValueInitial || this.$t('directives.entered_input')
      },
      set (value) {
        this.inputValueInitial = value
      }
    }
  },
  methods: {
    showModal () {
      this.modalVisible = true
    }
  }
}
</script>

<style>
.intro-con{
  min-height: 140px;
}
.draggable-btn{
  margin-top: 20px;
}
.code-con{
  width: 400px;
  background: #F9F9F9;
  padding-top: 10px;
}
</style>
