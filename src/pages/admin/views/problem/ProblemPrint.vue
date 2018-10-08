<template>
  <div class="flex-container">
    <div id="problem-main">
      <!--problem main-->
      <Panel :padding="40" shadow>
        <div slot="title">{{problem.title}}</div>
        <div id="problem-content" class="markdown-body">
          <p class="title">Description</p>
          <p class="content" v-html="problem.description"></p>

          <p class="title">Input</p>
          <p class="content" v-html="problem.input_description"></p>

          <p class="title">Output</p>
          <p class="content" v-html="problem.output_description"></p>

          <div v-for="sample, index in problem.samples">
            <div class="flex-container sample">
              <div class="sample-input">
                <p class="title">Sample Input {{index + 1}}
                  <a class="copy"
                     v-clipboard:copy="sample.input"
                     v-clipboard:success="onCopy"
                     v-clipboard:error="onCopyError">
                    <Icon type="clipboard"></Icon>
                  </a>
                </p>
                <pre>{{sample.input}}</pre>
              </div>
              <div class="sample-output">
                <p class="title">Sample Output {{index + 1}}</p>
                <pre>{{sample.output}}</pre>
              </div>
            </div>
          </div>

          <div v-if="problem.hint">
            <p class="title">Hint</p>
            <Card dis-hover>
              <div class="content" v-html="problem.hint"></div>
            </Card>
          </div>
        </div>
      </Panel>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { types } from '../../../../store'
  // import CodeMirror from '@oj/components/CodeMirror.vue'
  import storage from '@/utils/storage'
  import { FormMixin } from '@oj/components/mixins'
  import { JUDGE_STATUS, CONTEST_STATUS, buildProblemCodeKey } from '@/utils/constants'
  import api from '../../api.js'

  // 只显示这些状态的图形占用
  // const filtedStatus = ['-1', '-2', '0', '1', '2', '3', '4', '8']

  export default {
    name: 'ProblemPrint',
    components: {
    },
    mixins: [FormMixin],
    data () {
      return {
        status_result: 10,
        statusVisible: false,
        captchaRequired: false,
        graphVisible: false,
        submissionExists: false,
        captchaCode: '',
        captchaSrc: '',
        contestID: '',
        problemID: '',
        submitting: false,
        code: '',
        language: 'C', // 'C++',
        submissionId: '',
        result: {
          result: 9
        },
        problem: {
          title: '',
          description: '',
          hint: '',
          my_status: '',
          template: {},
          languages: [],
          created_by: {
            username: ''
          },
          tags: []
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      let problemCode = storage.get(buildProblemCodeKey(to.params.problemID, to.params.contestID))
      if (problemCode) {
        next(vm => {
          vm.language = problemCode.language
          vm.code = problemCode.code
        })
      } else {
        next()
      }
    },
    mounted () {
      this.$store.commit(types.CHANGE_CONTEST_ITEM_VISIBLE, {menu: false})
      this.init()
    },
    methods: {
      ...mapActions(['changeDomTitle']),
      init () {
        this.contestID = this.$route.params.contestID
        this.problemID = this.$route.params.problemID
        console.log('this.contestID=' + this.contestID)
        console.log('this.problemID=' + this.problemID)
        api.getProblem(this.problemID).then(res => {
          console.log('res=' + res.data.dat)
          this.$nextTick(() => {
            if (window.MathJax) {
              window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, 'problem-content'])
            }
          })
          let problem = res.data.data
          this.changeDomTitle({title: problem.title})
          problem.languages = problem.languages.sort()
          this.problem = problem
          console.log('init:)')
          // 在beforeRouteEnter中修改了, 说明本地有code， 无需加载template
          // if (this.language !== 'C++' || this.code !== '' || this.problem.languages.indexOf(this.language) !== -1) {
          //   console.log('this.language:', this.language)
          //   console.log('this.code', this.code)
          //   console.log('this.problem.languages.indexOf(this.language)', this.problem.languages.indexOf(this.language))
          //   console.log('init return??!?!?!')
          //   return
          // }
          if (this.code !== '') { // 위에 코드 대신 이걸로 대체, 내가 입력해놓은 코드 있으면 템플릿으로 대체하지 않음
            return
          }
          this.language = this.problem.languages[0]
          let template = this.problem.template
          if (template && template[this.language]) {
            this.code = template[this.language]
          }
        }, () => {
          this.$Loading.error()
        })
      },
      handleRoute (route) {
        this.$router.push(route)
      },
      onChangeLang (newLang) {
        console.log('newLang in onChangeLang: ', newLang)
        if (this.problem.template[newLang]) {
          if (this.code.trim() === '' || this.code === this.problem.template[newLang]) { // 수정함! 같은 코드면 모달 안뜨게
            this.code = this.problem.template[newLang]
          } else {
            this.$Modal.confirm({
              content: 'The problem has template for ' + newLang + ', Do you want to replace your code with template?',
              onOk: () => {
                this.code = this.problem.template[newLang]
              }
            })
          }
        }
        this.language = newLang
      }
    },
    computed: {
      status () {
        return {
          type: JUDGE_STATUS[this.status_result].type,
          statusName: JUDGE_STATUS[this.status_result].name,
          color: JUDGE_STATUS[this.status_result].color
        }
      },
      ...mapGetters(['problemSubmitDisabled', 'contestRuleType', 'OIContestRealTimePermission', 'contestStatus']),
      contest () {
        return this.$store.state.contest.contest
      },
      contestEnded () {
        return this.contestStatus === CONTEST_STATUS.ENDED
      },
      submissionStatus () {
        return {
          text: JUDGE_STATUS[this.result.result]['name'],
          color: JUDGE_STATUS[this.result.result]['color']
        }
      },
      submissionRoute () {
        if (this.contestID) {
          return {name: 'contest-submission-list', query: {problemID: this.problemID}}
        } else {
          return {name: 'submission-list', query: {problemID: this.problemID}}
        }
      }
    },
    beforeRouteLeave (to, from, next) {
      // 防止切换组件后仍然不断请求
      clearInterval(this.refreshStatus)

      this.$store.commit(types.CHANGE_CONTEST_ITEM_VISIBLE, {menu: true})
      storage.set(buildProblemCodeKey(this.problem._id, from.params.contestID), {
        code: this.code,
        language: this.language
      })
      next()
    },
    watch: {
      '$route' () {
        this.init()
      }
    }
  }
</script>

<style lang="less" scoped>
  .card-title {
    margin-left: 8px;
  }
  #status {
    .title {
      font-size: 30px;
    }
    .content {
      margin-top: 10px;
      font-size: 14px;
      span {
        margin-right: 10px;
      }
      pre {
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-all;
      }
    }
  }

  .flex-container {
    #problem-main {
      flex: auto;
      margin-right: 18px;
    }
    #right-column {
      flex: none;
      width: 220px;
    }
  }

  #problem-content {
    margin-top: -50px;
    .title {
      font-size: 20px;
      font-weight: 400;
      margin: 25px 0 8px 0;
      color: #3091f2;
      .copy {
        padding-left: 8px;
      }
    }
    p.content {
      margin-left: 25px;
      margin-right: 20px;
      font-size: 15px
    }
    .sample {
      align-items: stretch;
      &-input, &-output {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-right: 5%;
      }
      pre {
        flex: 1 1 auto;
        align-self: stretch;
        border-style: solid;
        background: transparent;
      }
    }
  }

  #submit-code {
    margin-top: 20px;
    margin-bottom: 20px;
    .status {
      float: left;
      span {
        margin-right: 10px;
        margin-left: 10px;
      }
    }
    .captcha-container {
      display: inline-block;
      .captcha-code {
        width: auto;
        margin-top: -20px;
        margin-left: 20px;
      }
    }
  }

  #info {
    margin-bottom: 20px;
    margin-top: 20px;
    ul {
      list-style-type: none;
      li {
        border-bottom: 1px dotted #e9eaec;
        margin-bottom: 10px;
        p {
          display: inline-block;
        }
        p:first-child {
          width: 90px;
        }
        p:last-child {
          float: right;
        }
      }
    }
  }

  .fl-right {
    float: right;
  }

  .markdown-body {
    padding-top: 20px;
  }
</style>
