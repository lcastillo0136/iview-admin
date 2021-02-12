<template>
  <div class="editor-wrapper">
    <div :id="editorId"></div>
  </div>
</template>

<script>
import Editor from 'wangeditor'
import i18next from 'i18next'
import { oneOf } from '@/libs/tools'

export default {
  name: 'Editor',
  props: {
    value: {
      type: String,
      default: ''
    },
    /**
     * 绑定的值的类型, enum: ['html', 'text']
     */
    valueType: {
      type: String,
      default: 'html',
      validator: (val) => {
        return oneOf(val, ['html', 'text'])
      }
    },
    /**
     * @description 设置change事件触发时间间隔
     */
    changeInterval: {
      type: Number,
      default: 200
    },
    /**
     * @description 是否开启本地存储
     */
    cache: {
      type: Boolean,
      default: true
    },
    menu: {
      type: Object,
      default: function () { return {} }
    }
  },
  data () {
    return {
      defaultMenu: {
        'head': true,
        'bold': true,
        'fontSize': true,
        'fontName': true,
        'italic': true,
        'underline': true,
        'strikeThrough': true,
        'indent': true,
        'lineHeight': true,
        'foreColor': true,
        'backColor': true,
        'link': true,
        'list': true,
        'todo': true,
        'justify': true,
        'quote': true,
        'emoticon': true,
        'image': true,
        'video': true,
        'table': true,
        'code': true,
        'splitLine': true,
        'undo': true,
        'redo': true,
        'fullscreen': true
      }
    }
  },
  computed: {
    editorId () {
      return `editor${this._uid}`
    }
  },
  methods: {
    setHtml (val) {
      this.editor.txt.html(val)
    }
  },
  watch: {
    value () {
      this.editor.txt.html(this.value)
    }
  },
  mounted () {
    this.editor = new Editor(`#${this.editorId}`)
    this.editor.config.onchange = (html) => {
      let text = this.editor.txt.text()
      if (this.cache) sessionStorage.editorCache = html
      this.$emit('update:value', this.valueType === 'html' ? html : text)
      this.$emit('on-change', html, text)
    }
    this.editor.config.lang = this.$i18n.locale || 'en'
    Object.keys(this.$i18n.messages).forEach((i) => {
      this.editor.config.languages[i] = this.$i18n.messages[i]
    })

    this.editor.i18next = i18next
    this.editor.config.menus = Object.keys({ ...this.defaultMenu, ...this.menu }).filter(f => ({ ...this.defaultMenu, ...this.menu })[f])
    this.editor.config.zIndex = 1
    this.editor.config.showFullScreen = ({ ...this.defaultMenu, ...this.menu })['fullscreen'] || false
    this.editor.config.onchangeTimeout = this.changeInterval
    // create这个方法一定要在所有配置项之后调用
    this.editor.create()
    // 如果本地有存储加载本地存储内容
    let html = this.value || (this.cache && sessionStorage.editorCache) || ''
    if (html) this.editor.txt.html(html)
  }
}
</script>

<style lang="less">
.w-e-text-container {
  background: #FFF;
}
</style>
