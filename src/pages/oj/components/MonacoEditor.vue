<template>
<div style="margin: 0px 0px 15px 0px">
    <Row type="flex" justify="space-between" class="header">
      <Col :span=10>
      <div>
        <span>Language:</span>
        <Select :value="language" @on-change="onLangChange" class="adjust">
          <Option v-for="item in languages" :key="item" :value="item">{{item}}
          </Option>
        </Select>
      </div>
      </Col>
      <Col :span=10>
      <div class="fl-right">
        <span>Theme:</span>
        <Select v-model="theme" @on-change="onThemeChange" class="adjust">
          <Option v-for="item in themes" :key="item.label" :value="item.value">{{item.label}}
          </Option>
        </Select>
      </div>
      </Col>
    </Row>
    <!-- lanauge랑 theme을 여기서 바인딩 해줘야하는데.. language는 프로그램에서 주는게 맞질 않아서 재구성해야할듯..! -->
    <MonacoEditor
                height="700"
                width="100%"
                srcPath="/static/release_monaco/dev"
                :value.sync="value"
                :theme="theme"
                :language="codingLanguage"
                :editorOptions="editorOptions"
                @mounted="onMounted"
                @codeChange="onCodeChange"
                ref="myEditor"
                >
    </MonacoEditor>
  </div>
</template>
<script>
// import utils from '@/utils/utils'
// import MonacoEditor from 'vue-monaco-editor'
import MonacoEditor from './vue-monaco-editor'

export default {
  components: {
    MonacoEditor // MonacoEditor.data().~~~~
  },
  props: {
    languages: {},
    language: {},
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // langChangeProp: this.language,
      codingLanguage: 'c',
      theme: 'vs-dark',
      highlightLines: [
        {
          number: 0,
          class: 'primary-highlighted-line'
        },
        {
          number: 0,
          class: 'secondary-highlighted-line'
        }
      ],
      // mode: {
      //   'C++': 'text/x-csrc'
      // },
      themes: [
          {label: 'vs-dark', value: 'vs-dark'},
          {label: 'vs', value: 'vs'},
          {label: 'hc-black', value: 'hc-black'}
      ]
    }
  },
  // computed: {
  //   editor () {
  //     // get current editor object
  //     return this.$refs.myEditor.editor
  //   }
  // },
  // computed: {
  //   convertLanName: function (newVal) {
  //     if (newVal === 'C++') {
  //       newVal = 'cpp'
  //     } else if (newVal === 'C') {
  //       newVal = 'c'
  //     } else if (newVal === 'Java') {
  //       newVal = 'java'
  //     } else if (newVal === 'Python2') {
  //       newVal = 'python'
  //     } else if (newVal === 'Python3') {
  //       newVal = 'python'
  //     }
  //     return newVal
  //   }
  // },
  mounted () { // 필요없을 수도
    // console.log(document.getElementById('codeBackUp').value)
  //   utils.getLanguages().then(languagesList => {
  //     languagesList.forEach(lang => {
  //       if (lang === 'C++') {
  //         this.codingLanguage = 'cpp'
  //       } else if (lang === 'C') {
  //         this.codingLanguage = 'c'
  //       } else if (lang === 'Java') {
  //         this.codingLanguage = 'java'
  //       } else if (lang === 'Python2') {
  //         this.codingLanguage = 'python'
  //       } else if (lang === 'Python3') {
  //         this.codingLanguage = 'python'
  //       }
  //     })
  //     // this.mode = mode
  //     // this.mode.setValue(this.mode[this.language])
  //   })
  //   this.editor.focus()
  },
  methods: {
    // onEditorCodeChange (newCode) {
    //     this.$emit('update:code', newCode)
    //   },
    onMounted (editor) {
      // console.log('on Mounted')
      // console.log(this.code)
      // console.log(this.editor.getValue())
      // console.log(document.getElementById('codeBackUp').value)
      // console.log('after mount!', editor, editor.getValue(), editor.getModel())
      this.editor = editor
      // console.log('onMounted')
      // console.log('this.code', this.code)
      // console.log('(this.editor.getValue()', this.editor.getValue())
      // console.log('this.theme', this.theme)
      // console.log('this.language', this.language)

      if (this.language === 'C++') {
        this.codingLanguage = 'cpp'
      } else if (this.language === 'C') {
        this.codingLanguage = 'c'
      } else if (this.language === 'C#') {
        this.codingLanguage = 'csharp'
      } else if (this.language === 'Java') {
        this.codingLanguage = 'java'
      } else if (this.language === 'Python2') {
        this.codingLanguage = 'python'
      } else if (this.language === 'Python3') {
        this.codingLanguage = 'python'
      }
      console.log('onMounted')
      // console.log('this.editor: ', this.editor)
      // console.log('this.editor.getValue(): ', this.editor.getValue())
      // console.log('this.language: ', this.language)
      // this.$emit('update:value', this.editor.getValue())
      // this.$emit('changeLang', this.language)
      // this.$emit('initTemplate', this.language)
      // this.code = '#include <stdio.h> \n int add(int a, int b) \n { \n // Please fill this blank return ___________; \n } \n int main() \n { \nprintf("%d", add(1, 2)); \n return 0; \n} '
    },
    onCodeChange () {
      // console.log('code changed!', 'code:' + this.editor.getValue())
      // this.editor = editor
      console.log('onCodeChange')
      // this.$emit('initTemplate', this.language)
      this.$emit('update:value', this.editor.getValue())
    },
    onLangChange (newVal) { // 모달창 띄우는 함수와 묶여있음
      this.language = newVal
      // console.log('this.language: ', this.language)
      // console.log('newVal:', newVal)
      if (newVal === 'C++') {
        newVal = 'cpp'
      } else if (newVal === 'C') {
        newVal = 'c'
      } else if (newVal === 'C#') {
        newVal = 'csharp'
      } else if (newVal === 'Java') {
        newVal = 'java'
      } else if (newVal === 'Python2') {
        newVal = 'python'
      } else if (newVal === 'Python3') {
        newVal = 'python'
      }
      // console.log('this.language: ', this.language)
      // console.log('newVal: ', newVal)
      // this.editor.setOption('mode', this.mode[newVal])
      // console.log('this.language', this.language)
      this.codingLanguage = newVal // 바꾸니까 에러뜸.. 확인... 아마 모듈 새로만들어야할듯
      // console.log('newVal', newVal)
      // this.$emit('update:value', this.editor.getValue())
      // this.$emit('onChangeLanguage', newVal)

      // this.langChangeProp = this.language
      // this.$emit('update:language', this.language)
      this.$emit('changeLang', this.language)
    },
    onThemeChange (newTheme) { // 프로퍼티 수정하기! 이벤트 받아서..
      // this.editor.setOption('theme', newTheme)
      // console.log('this.theme', this.theme)
      // console.log('newTheme', newTheme)
      // console.log('Theme Change!', this.editor, this.editor.getValue(), this.editor.getModel())
      // this.editor.theme = newTheme
      // this.theme = newTheme
    }
  },
  created () {
    // console.log(this.code)
    // console.log(this.editor.getValue())
    // console.log(document.getElementById('codeBackUp').value)
    this.options = {
      selectOnLineNumbers: false
    }
    this.editorOptions = {
      value: this.value,
      language: this.language,
      theme: this.theme
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    margin: 5px 5px 15px 5px;
    .adjust {
      width: 150px;
      margin-left: 10px;
    }
    .fl-right {
      float: right;
    }
  }
</style>

<style>
  /* .CodeMirror {
    height: auto !important;
  }
  .CodeMirror-scroll {
    min-height: 300px;
    max-height: 1000px;
  } */
</style>
<style media="screen">
  .secondary-highlighted-line {
    background: green;
  }
  .primary-highlighted-line {
    background: blue;
  }
</style>
