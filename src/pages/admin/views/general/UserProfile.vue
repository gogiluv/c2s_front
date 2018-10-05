<template>
  <div>
    <!-- 테스트타입 1 -->
    <div>
      <Panel :title="title">
        <el-row type="flex" :gutter="18">

          <!-- 사진 -->
          <el-col :span="3">
            <img class="avatar" :src="profile.avatar"/><br /><br />
            <el-button plain type="primary" @click="print()">Print</el-button>
          </el-col>

          <!-- 사용자정보-->
          <el-col :span="5">
            <h3>이름 : {{user.real_name}} </h3>
            <h3>닉네임 : {{user.username}} </h3>
            <h3>이메일 : {{user.email}}</h3>
          </el-col>

          <!-- 차트_막대 -->
          <el-col :span="8">
            <chartjs-bar :labels="labels" :data="data" :bind="true"></chartjs-bar>
          </el-col>

          <!-- 차트_방사형 -->
          <el-col :span="8">
            <chartjs-radar :labels="labels" :data="data" :bind="true"></chartjs-radar>
          </el-col>

        </el-row>
      </Panel>
    </div>

    <!-- 테스트중 -->
    <div>
      <el-row type="flex" :gutter="20">
        <el-col :md="10" :lg="3">
          <el-card class="admin-info">
          <VerticalMenu>
            <VerticalMenu-item @click.native="codetest()">
              필시시험
            </VerticalMenu-item>
            <VerticalMenu-item @click.native="coding()">
              실기시험
            </VerticalMenu-item>
          </VerticalMenu>
          </el-card>
        </el-col>

        <el-col :md="14" :lg="21">
          <div class="tabs">
            <a v-for="(value, index) in this.submission_list" v-on:click="tab_click(value, index)" v-bind:class="[ activetab === index ? 'active' : '' ]">{{value.create_date}}</a>
          </div>

          <div v-for="(value, index) in this.submission_list" v-if="activetab === index">
            <el-card class="admin-info">
              <div v-if="test === 1">
                <h3>점수</h3>
                <b-table :items="items"></b-table>
                <br />
                <h3>답안</h3>
                <table class="type09">
                  <thead>
                    <tr>
                      <th scope="cols" width="150" class="solid">구분</th>
                      <th scope="cols" colspan="3" class="solid">{{table_title_1}}</th>
                      <th scope="cols" colspan="3" class="solid">{{table_title_2}}</th>
                      <th scope="cols" colspan="3" class="solid">{{table_title_3}}</th>
                      <th scope="cols" colspan="3" class="solid">{{table_title_4}}</th>
                      <th scope="cols" colspan="3">{{table_title_5}}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bottom">
                      <th class="solid">번호 / 배점</th>
                      <th>제출답</th>
                      <th>정답</th>
                      <th class="solid">결과</th>
                      <th>제출답</th>
                      <th>정답</th>
                      <th class="solid">결과</th>
                      <th>제출답</th>
                      <th>정답</th>
                      <th class="solid">결과</th>
                      <th>제출답</th>
                      <th>정답</th>
                      <th class="solid">결과</th>
                      <th>제출답</th>
                      <th>정답</th>
                      <th>결과</th>
                    </tr>
                    <tr>
                      <th class="solid">1 (3점)</th>
                      <td>{{problem_info[0][1]["제출답"]}}</td>
                      <td>{{problem_info[0][1]["정답"]}}</td>
                      <th class="solid">{{problem_info[0][1]["결과"]}}</th>
                      <td>{{problem_info[1][1]["제출답"]}}</td>
                      <td>{{problem_info[1][1]["정답"]}}</td>
                      <th class="solid">{{problem_info[1][1]["결과"]}}</th>
                      <td>{{problem_info[2][1]["제출답"]}}</td>
                      <td>{{problem_info[2][1]["정답"]}}</td>
                      <th class="solid">{{problem_info[2][1]["결과"]}}</th>
                      <td>{{problem_info[3][1]["제출답"]}}</td>
                      <td>{{problem_info[3][1]["정답"]}}</td>
                      <th class="solid">{{problem_info[3][1]["결과"]}}</th>
                      <td>{{problem_info[4][1]["제출답"]}}</td>
                      <td>{{problem_info[4][1]["정답"]}}</td>
                      <th>{{problem_info[4][1]["결과"]}}</th>
                    </tr>
                    <tr>
                      <th class="solid">2 (3점)</th>
                      <td>{{problem_info[0][2]["제출답"]}}</td>
                      <td>{{problem_info[0][2]["정답"]}}</td>
                      <th class="solid">{{problem_info[0][2]["결과"]}}</th>
                      <td>{{problem_info[1][2]["제출답"]}}</td>
                      <td>{{problem_info[1][2]["정답"]}}</td>
                      <th class="solid">{{problem_info[1][2]["결과"]}}</th>
                      <td>{{problem_info[2][2]["제출답"]}}</td>
                      <td>{{problem_info[2][2]["정답"]}}</td>
                      <th class="solid">{{problem_info[2][2]["결과"]}}</th>
                      <td>{{problem_info[3][2]["제출답"]}}</td>
                      <td>{{problem_info[3][2]["정답"]}}</td>
                      <th class="solid">{{problem_info[3][2]["결과"]}}</th>
                      <td>{{problem_info[4][2]["제출답"]}}</td>
                      <td>{{problem_info[4][2]["정답"]}}</td>
                      <th>{{problem_info[4][2]["결과"]}}</th>
                    </tr>
                    <tr>
                      <th class="solid">3 (4점)</th>
                      <td>{{problem_info[0][3]["제출답"]}}</td>
                      <td>{{problem_info[0][3]["정답"]}}</td>
                      <th class="solid">{{problem_info[0][3]["결과"]}}</th>
                      <td>{{problem_info[1][3]["제출답"]}}</td>
                      <td>{{problem_info[1][3]["정답"]}}</td>
                      <th class="solid">{{problem_info[1][3]["결과"]}}</th>
                      <td>{{problem_info[2][3]["제출답"]}}</td>
                      <td>{{problem_info[2][3]["정답"]}}</td>
                      <th class="solid">{{problem_info[2][3]["결과"]}}</th>
                      <td>{{problem_info[3][3]["제출답"]}}</td>
                      <td>{{problem_info[3][3]["정답"]}}</td>
                      <th class="solid">{{problem_info[3][3]["결과"]}}</th>
                      <td>{{problem_info[4][3]["제출답"]}}</td>
                      <td>{{problem_info[4][3]["정답"]}}</td>
                      <th>{{problem_info[4][3]["결과"]}}</th>
                    </tr>
                    <tr>
                      <th class="solid">4 (4점)</th>
                      <td>{{problem_info[0][4]["제출답"]}}</td>
                      <td>{{problem_info[0][4]["정답"]}}</td>
                      <th class="solid">{{problem_info[0][4]["결과"]}}</th>
                      <td>{{problem_info[1][4]["제출답"]}}</td>
                      <td>{{problem_info[1][4]["정답"]}}</td>
                      <th class="solid">{{problem_info[1][4]["결과"]}}</th>
                      <td>{{problem_info[2][4]["제출답"]}}</td>
                      <td>{{problem_info[2][4]["정답"]}}</td>
                      <th class="solid">{{problem_info[2][4]["결과"]}}</th>
                      <td>{{problem_info[3][4]["제출답"]}}</td>
                      <td>{{problem_info[3][4]["정답"]}}</td>
                      <th class="solid">{{problem_info[3][4]["결과"]}}</th>
                      <td>{{problem_info[4][4]["제출답"]}}</td>
                      <td>{{problem_info[4][4]["정답"]}}</td>
                      <th>{{problem_info[4][4]["결과"]}}</th>
                    </tr>
                    <tr>
                      <th class="solid">5 (6점)</th>
                      <td>{{problem_info[0][5]["제출답"]}}</td>
                      <td>{{problem_info[0][5]["정답"]}}</td>
                      <th class="solid">{{problem_info[0][5]["결과"]}}</th>
                      <td>{{problem_info[1][5]["제출답"]}}</td>
                      <td>{{problem_info[1][5]["정답"]}}</td>
                      <th class="solid">{{problem_info[1][5]["결과"]}}</th>
                      <td>{{problem_info[2][5]["제출답"]}}</td>
                      <td>{{problem_info[2][5]["정답"]}}</td>
                      <th class="solid">{{problem_info[2][5]["결과"]}}</th>
                      <td>{{problem_info[3][5]["제출답"]}}</td>
                      <td>{{problem_info[3][5]["정답"]}}</td>
                      <th class="solid">{{problem_info[3][5]["결과"]}}</th>
                      <td>{{problem_info[4][5]["제출답"]}}</td>
                      <td>{{problem_info[4][5]["정답"]}}</td>
                      <th>{{problem_info[4][5]["결과"]}}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-if="test === 2">
                <div v-for="(value, index) in problem_Code">
                  <h3>{{problem.title[index]}}</h3>
                  language : {{value.language}}
                  <MonacoEditor
                  :languages="value.language"
                  :language.sync="value.language"
                  :value.sync="value.code"
                  >
                  </MonacoEditor>
                  <hr />
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>


<!-- 테스트 타입 2 -->
    <!-- <div>
      <el-row type="flex" :gutter="20">
        <el-col :md="10" :lg="8">
          <el-card class="admin-info">
            <el-row :gutter="20">
              <el-col :span="10">
                사진
              </el-col>
              <el-col :span="14">
                <el-form label-width="80px" class="last-info-body">
                  <el-form-item label="이름 : ">
                    <span>hi</span>
                  </el-form-item>
                  <el-form-item label="ID : ">
                    <span>hi</span>
                  </el-form-item>
                  <el-form-item label="E-mail : ">
                    <span>hi</span>
                  </el-form-item>
                  <el-form-item label="최종접속 : ">
                    <span>hi</span>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="admin-info">
            <p class="last-info-title">막대그래프</p>
            <chartjs-bar :labels="labels" :datasets="bardatasets" :bind="true"></chartjs-bar>
          </el-card>

          <el-card class="admin-info">
            <p class="last-info-title">방사형차트</p>
            <chartjs-radar :labels="labels" :data="data" :bind="true"></chartjs-radar>
          </el-card>

        </el-col>


        <el-col :md="14" :lg="16">
          <el-card>
            2번쨰 텝
          </el-card>
        </el-col>
      </el-row>
    </div> -->
    <el-dialog title="응시자 정보" :visible.sync="showTestDialog" :close-on-click-modal="false">
      <div>
        <span slot="footer" class="dialog-footer">
          <el-button plain type="primary" @click="num()">출력</el-button>
          <cancel @click.native="showTestDialog = false"></cancel>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MonacoEditor from '@oj/components/MonacoEditor.vue'
import 'bootstrap/dist/css/bootstrap.css'
import api from '../../api.js'
import ojapi from '../../../oj/api.js'
import utils from '@/utils/utils'

export default {
  name: 'UserProfile',
  components: {
    MonacoEditor
  },
  data () {
    return {
      problem: [],
      submission_list: {},
      problem_result: {},
      problem_OX: [],
      problem_Code: [],
      showTestDialog: false,
      code: 'hello',
      user: {},
      info: {},
      easy: {과목: '기초'},
      normal: {과목: '일반'},
      hard: {과목: '심화'},
      total: {과목: '총점'},
      table_title_1: '알고리즘',
      table_title_2: '수학',
      table_title_3: '운영체제',
      table_title_4: '그래픽스',
      table_title_5: '소프트웨어 공학',
      problem_info: [{
        1: {번호: 1, 배점: '3점'},
        2: {번호: 2, 배점: '3점'},
        3: {번호: 3, 배점: '4점'},
        4: {번호: 4, 배점: '4점'},
        5: {번호: 5, 배점: '6점'}
      }, {
        1: {번호: 1, 배점: '3점'},
        2: {번호: 2, 배점: '3점'},
        3: {번호: 3, 배점: '4점'},
        4: {번호: 4, 배점: '4점'},
        5: {번호: 5, 배점: '6점'}
      }, {
        1: {번호: 1, 배점: '3점'},
        2: {번호: 2, 배점: '3점'},
        3: {번호: 3, 배점: '4점'},
        4: {번호: 4, 배점: '4점'},
        5: {번호: 5, 배점: '6점'}
      }, {
        1: {번호: 1, 배점: '3점'},
        2: {번호: 2, 배점: '3점'},
        3: {번호: 3, 배점: '4점'},
        4: {번호: 4, 배점: '4점'},
        5: {번호: 5, 배점: '6점'}
      }, {
        1: {번호: 1, 배점: '3점'},
        2: {번호: 2, 배점: '3점'},
        3: {번호: 3, 배점: '4점'},
        4: {번호: 4, 배점: '4점'},
        5: {번호: 5, 배점: '6점'}
      }],
      items: [],
      sub_items_1: [],
      sub_items_2: [],
      sub_items_3: [],
      sub_items_4: [],
      sub_items_5: [],
      title: 'UserProfile',
      test: 1,
      labels: ['알고리즘', '수학', '운영체제', '그래픽스', '소프트웨어 공학'],
      data: [10, 15, 12, 15, 10],
      el: '#tabs',
      activetab: 0,
      opthions: [{
        backgroundColor: 'transparent',
        borderColor: 'rgba(200,0,0,0.6)',
        fill: true,
        radius: 6,
        pointRadius: 4,
        pointBorderWidth: 2,
        pointBackgroundColor: 'orange',
        pointBorderColor: 'rgba(200,0,0,0.6)',
        pointHoverRadius: 10,
        data: [10, 15, 12, 15, 5]
      }],
      profile: {}
    }
  },
  mounted () {
    // 페이지 실행과 동시에 실행
    api.getUser(this.$route.params.userID).then(res => {
      this.user = res.data.data
      // console.log(this.user)
    })
    ojapi.getUserInfo(this.user.username).then(res => {
      this.profile = res.data.data
    })
    ojapi.getSubmissionFromUser(this.$route.params.userID).then(res => {
      this.info = res.data.data.results
      // console.log(this.info)
    // ojapi.getSubmissionList(0, 10, {username: this.user.username}).then(res => {
    //   this.info = res.data.data.results
    })
    ojapi.getSubmissionDateFromUser(this.$route.params.userID).then(res => {
      var latestDate = JSON.parse(res.data.data.results)[0].create_date
      this.submission_list = JSON.parse(res.data.data.results)
      ojapi.getSubmissionFromDate(this.$route.params.userID, latestDate).then(res => {
        this.problem = JSON.parse(res.data.data.results)
        let ox = 0
        let code = 0
        this.problem.title = []
        for (let i = 0; i < this.problem.length; i++) {
          if (this.problem[i].language === 'PlainText') {
            this.problem_OX[ox] = this.problem[i]
            ox = ox + 1
          } else {
            api.getProblem(this.problem[i].problem_id).then(res => {
              // this.problem[code] = res.data.data.title
              this.problem.title.push(res.data.data.title)
            })
            this.problem_Code[code] = this.problem[i]
            code = code + 1
          }
        }
        let sums = [0, 0, 0, 0, 0]
        let subtract = 0
        for (let i = 0; i < 5; ++i) {
          sums[0] += this.problem_OX[0].ox_result_jsonb.evals.Algorithm[String(i + 1)]
          this.problem_info[0][i + 1]['제출답'] = this.problem_OX[0].ox_result_jsonb.preds.Algorithm[i + 1][0]
          this.problem_info[0][i + 1]['정답'] = this.problem_OX[0].ox_result_jsonb.labels.Algorithm[i + 1][0]
          if (this.problem_info[0][i + 1]['제출답'] === this.problem_info[0][i + 1]['정답']) {
            this.problem_info[0][i + 1]['결과'] = '정답'
          } else {
            this.problem_info[0][i + 1]['결과'] = '오답'
          }
          if (i === 1) {
            this.easy['알고리즘'] = sums[0] - subtract
            subtract = sums[0]
          }
          if (i === 3) {
            this.normal['알고리즘'] = sums[0] - subtract
            subtract = sums[0]
          }
          if (i === 4) {
            this.hard['알고리즘'] = sums[0] - subtract
            this.total['알고리즘'] = sums[0]
            subtract = 0
          }
        }
        this.sub_items_1 = [this.problem_info[0][1], this.problem_info[0][2], this.problem_info[0][3], this.problem_info[0][4], this.problem_info[0][5]]
        for (let i = 0; i < 5; ++i) {
          sums[1] += this.problem_OX[0].ox_result_jsonb.evals['Math&Physics'][String(i + 1)]
          this.problem_info[1][i + 1]['제출답'] = this.problem_OX[0].ox_result_jsonb.preds['Math&Physics'][i + 1][0]
          this.problem_info[1][i + 1]['정답'] = this.problem_OX[0].ox_result_jsonb.labels['Math&Physics'][i + 1][0]
          if (this.problem_info[1][i + 1]['제출답'] === this.problem_info[1][i + 1]['정답']) {
            this.problem_info[1][i + 1]['결과'] = '정답'
          } else {
            this.problem_info[1][i + 1]['결과'] = '오답'
          }
          if (i === 1) {
            this.easy['수학물리'] = sums[1]
            subtract = sums[1]
          }
          if (i === 3) {
            this.normal['수학물리'] = sums[1] - subtract
            subtract = sums[1]
          }
          if (i === 4) {
            this.hard['수학물리'] = sums[1] - subtract
            this.total['수학물리'] = sums[1]
            subtract = 0
          }
        }
        this.sub_items_2 = [this.problem_info[1][1], this.problem_info[1][2], this.problem_info[1][3], this.problem_info[1][4], this.problem_info[1][5]]
        for (let i = 0; i < 5; ++i) {
          sums[2] += this.problem_OX[0].ox_result_jsonb.evals.OS[String(i + 1)]
          this.problem_info[2][i + 1]['제출답'] = this.problem_OX[0].ox_result_jsonb.preds.OS[i + 1][0]
          this.problem_info[2][i + 1]['정답'] = this.problem_OX[0].ox_result_jsonb.labels.OS[i + 1][0]
          if (this.problem_info[2][i + 1]['제출답'] === this.problem_info[2][i + 1]['정답']) {
            this.problem_info[2][i + 1]['결과'] = '정답'
          } else {
            this.problem_info[2][i + 1]['결과'] = '오답'
          }
          if (i === 1) {
            this.easy['운영채제'] = sums[2]
            subtract = sums[2]
          }
          if (i === 3) {
            this.normal['운영채제'] = sums[2] - subtract
            subtract = sums[2]
          }
          if (i === 4) {
            this.hard['운영채제'] = sums[2] - subtract
            this.total['운영채제'] = sums[2]
            subtract = 0
          }
        }
        this.sub_items_3 = [this.problem_info[2][1], this.problem_info[2][2], this.problem_info[2][3], this.problem_info[2][4], this.problem_info[2][5]]
        for (let i = 0; i < 5; ++i) {
          sums[3] += this.problem_OX[0].ox_result_jsonb.evals.Graphics[String(i + 1)]
          this.problem_info[3][i + 1]['제출답'] = this.problem_OX[0].ox_result_jsonb.preds.Graphics[i + 1][0]
          this.problem_info[3][i + 1]['정답'] = this.problem_OX[0].ox_result_jsonb.labels.Graphics[i + 1][0]
          if (this.problem_info[3][i + 1]['제출답'] === this.problem_info[3][i + 1]['정답']) {
            this.problem_info[3][i + 1]['결과'] = '정답'
          } else {
            this.problem_info[3][i + 1]['결과'] = '오답'
          }
          if (i === 1) {
            this.easy['그래픽스'] = sums[3]
            subtract = sums[3]
          }
          if (i === 3) {
            this.normal['그래픽스'] = sums[3] - subtract
            subtract = sums[3]
          }
          if (i === 4) {
            this.hard['그래픽스'] = sums[3] - subtract
            this.total['그래픽스'] = sums[3]
            subtract = 0
          }
        }
        this.sub_items_4 = [this.problem_info[3][1], this.problem_info[3][2], this.problem_info[3][3], this.problem_info[3][4], this.problem_info[3][5]]
        for (let i = 0; i < 5; ++i) {
          sums[4] += this.problem_OX[0].ox_result_jsonb.evals.SoftwareEngineering[String(i + 1)]
          this.problem_info[4][i + 1]['제출답'] = this.problem_OX[0].ox_result_jsonb.preds.SoftwareEngineering[i + 1][0]
          this.problem_info[4][i + 1]['정답'] = this.problem_OX[0].ox_result_jsonb.labels.SoftwareEngineering[i + 1][0]
          if (this.problem_info[4][i + 1]['제출답'] === this.problem_info[4][i + 1]['정답']) {
            this.problem_info[4][i + 1]['결과'] = '정답'
          } else {
            this.problem_info[4][i + 1]['결과'] = '오답'
          }
          if (i === 1) {
            this.easy['소프트웨어 공학'] = sums[4]
            subtract = sums[4]
          }
          if (i === 3) {
            this.normal['소프트웨어 공학'] = sums[4] - subtract
            subtract = sums[4]
          }
          if (i === 4) {
            this.hard['소프트웨어 공학'] = sums[4] - subtract
            this.total['소프트웨어 공학'] = sums[4]
            subtract = 0
          }
        }
        this.sub_items_5 = [this.problem_info[4][1], this.problem_info[4][2], this.problem_info[4][3], this.problem_info[4][4], this.problem_info[4][5]]

        this.easy['점수'] = this.easy['알고리즘'] + this.easy['수학물리'] + this.easy['운영채제'] + this.easy['그래픽스'] + this.easy['소프트웨어 공학'] + '/30'
        this.normal['점수'] = this.normal['알고리즘'] + this.normal['수학물리'] + this.normal['운영채제'] + this.normal['그래픽스'] + this.normal['소프트웨어 공학'] + '/40'
        this.hard['점수'] = this.hard['알고리즘'] + this.hard['수학물리'] + this.hard['운영채제'] + this.hard['그래픽스'] + this.hard['소프트웨어 공학'] + '/30'
        this.total['점수'] = this.total['알고리즘'] + this.total['수학물리'] + this.total['운영채제'] + this.total['그래픽스'] + this.total['소프트웨어 공학'] + '/100'
        this.total['알고리즘'] += '/20'
        this.total['수학물리'] += '/20'
        this.total['운영채제'] += '/20'
        this.total['그래픽스'] += '/20'
        this.total['소프트웨어 공학'] += '/20'

        this.items = [this.easy, this.normal, this.hard, this.total]
        this.data = sums
      })
    })
  },
  methods: {
    codetest () {
      this.test = 1
    },
    coding () {
      this.test = 2
    },
    tab_click (value, index) {
      this.activetab = index
      ojapi.getSubmissionFromDate(this.$route.params.userID, value.create_date).then(res => {
        this.problem = JSON.parse(res.data.data.results)
        let ox = 0
        let code = 0
        this.problem.title = []
        for (let i = 0; i < this.problem.length; i++) {
          if (this.problem[i].language === 'PlainText') {
            this.problem_OX[ox] = this.problem[i]
            ox = ox + 1
          } else {
            api.getProblem(this.problem[i].problem_id).then(res => {
              // this.problem[code] = res.data.data.title
              this.problem.title.push(res.data.data.title)
            })
            this.problem_Code[code] = this.problem[i]
            code = code + 1
          }
        }

        let sums = [0, 0, 0, 0, 0]
        let subtract = 0
        for (let i = 0; i < 5; ++i) {
          sums[0] += this.problem_OX[0].ox_result_jsonb.evals.Algorithm[String(i + 1)]
          this.problem_info[0][i + 1]['제출답'] = this.problem_OX[0].ox_result_jsonb.preds.Algorithm[i + 1][0]
          this.problem_info[0][i + 1]['정답'] = this.problem_OX[0].ox_result_jsonb.labels.Algorithm[i + 1][0]
          if (this.problem_info[0][i + 1]['제출답'] === this.problem_info[0][i + 1]['정답']) {
            this.problem_info[0][i + 1]['결과'] = '정답'
          } else {
            this.problem_info[0][i + 1]['결과'] = '오답'
          }
          if (i === 1) {
            this.easy['알고리즘'] = sums[0] - subtract
            subtract = sums[0]
          }
          if (i === 3) {
            this.normal['알고리즘'] = sums[0] - subtract
            subtract = sums[0]
          }
          if (i === 4) {
            this.hard['알고리즘'] = sums[0] - subtract
            this.total['알고리즘'] = sums[0]
            subtract = 0
          }
        }
        this.sub_items_1 = [this.problem_info[0][1], this.problem_info[0][2], this.problem_info[0][3], this.problem_info[0][4], this.problem_info[0][5]]
        for (let i = 0; i < 5; ++i) {
          sums[1] += this.problem_OX[0].ox_result_jsonb.evals['Math&Physics'][String(i + 1)]
          this.problem_info[1][i + 1]['제출답'] = this.problem_OX[0].ox_result_jsonb.preds['Math&Physics'][i + 1][0]
          this.problem_info[1][i + 1]['정답'] = this.problem_OX[0].ox_result_jsonb.labels['Math&Physics'][i + 1][0]
          if (this.problem_info[1][i + 1]['제출답'] === this.problem_info[1][i + 1]['정답']) {
            this.problem_info[1][i + 1]['결과'] = '정답'
          } else {
            this.problem_info[1][i + 1]['결과'] = '오답'
          }
          if (i === 1) {
            this.easy['수학물리'] = sums[1]
            subtract = sums[1]
          }
          if (i === 3) {
            this.normal['수학물리'] = sums[1] - subtract
            subtract = sums[1]
          }
          if (i === 4) {
            this.hard['수학물리'] = sums[1] - subtract
            this.total['수학물리'] = sums[1]
            subtract = 0
          }
        }
        this.sub_items_2 = [this.problem_info[1][1], this.problem_info[1][2], this.problem_info[1][3], this.problem_info[1][4], this.problem_info[1][5]]
        for (let i = 0; i < 5; ++i) {
          sums[2] += this.problem_OX[0].ox_result_jsonb.evals.OS[String(i + 1)]
          this.problem_info[2][i + 1]['제출답'] = this.problem_OX[0].ox_result_jsonb.preds.OS[i + 1][0]
          this.problem_info[2][i + 1]['정답'] = this.problem_OX[0].ox_result_jsonb.labels.OS[i + 1][0]
          if (this.problem_info[2][i + 1]['제출답'] === this.problem_info[2][i + 1]['정답']) {
            this.problem_info[2][i + 1]['결과'] = '정답'
          } else {
            this.problem_info[2][i + 1]['결과'] = '오답'
          }
          if (i === 1) {
            this.easy['운영채제'] = sums[2]
            subtract = sums[2]
          }
          if (i === 3) {
            this.normal['운영채제'] = sums[2] - subtract
            subtract = sums[2]
          }
          if (i === 4) {
            this.hard['운영채제'] = sums[2] - subtract
            this.total['운영채제'] = sums[2]
            subtract = 0
          }
        }
        this.sub_items_3 = [this.problem_info[2][1], this.problem_info[2][2], this.problem_info[2][3], this.problem_info[2][4], this.problem_info[2][5]]
        for (let i = 0; i < 5; ++i) {
          sums[3] += this.problem_OX[0].ox_result_jsonb.evals.Graphics[String(i + 1)]
          this.problem_info[3][i + 1]['제출답'] = this.problem_OX[0].ox_result_jsonb.preds.Graphics[i + 1][0]
          this.problem_info[3][i + 1]['정답'] = this.problem_OX[0].ox_result_jsonb.labels.Graphics[i + 1][0]
          if (this.problem_info[3][i + 1]['제출답'] === this.problem_info[3][i + 1]['정답']) {
            this.problem_info[3][i + 1]['결과'] = '정답'
          } else {
            this.problem_info[3][i + 1]['결과'] = '오답'
          }
          if (i === 1) {
            this.easy['그래픽스'] = sums[3]
            subtract = sums[3]
          }
          if (i === 3) {
            this.normal['그래픽스'] = sums[3] - subtract
            subtract = sums[3]
          }
          if (i === 4) {
            this.hard['그래픽스'] = sums[3] - subtract
            this.total['그래픽스'] = sums[3]
            subtract = 0
          }
        }
        this.sub_items_4 = [this.problem_info[3][1], this.problem_info[3][2], this.problem_info[3][3], this.problem_info[3][4], this.problem_info[3][5]]
        for (let i = 0; i < 5; ++i) {
          sums[4] += this.problem_OX[0].ox_result_jsonb.evals.SoftwareEngineering[String(i + 1)]
          this.problem_info[4][i + 1]['제출답'] = this.problem_OX[0].ox_result_jsonb.preds.SoftwareEngineering[i + 1][0]
          this.problem_info[4][i + 1]['정답'] = this.problem_OX[0].ox_result_jsonb.labels.SoftwareEngineering[i + 1][0]
          if (this.problem_info[4][i + 1]['제출답'] === this.problem_info[4][i + 1]['정답']) {
            this.problem_info[4][i + 1]['결과'] = '정답'
          } else {
            this.problem_info[4][i + 1]['결과'] = '오답'
          }
          if (i === 1) {
            this.easy['소프트웨어 공학'] = sums[4]
            subtract = sums[4]
          }
          if (i === 3) {
            this.normal['소프트웨어 공학'] = sums[4] - subtract
            subtract = sums[4]
          }
          if (i === 4) {
            this.hard['소프트웨어 공학'] = sums[4] - subtract
            this.total['소프트웨어 공학'] = sums[4]
            subtract = 0
          }
        }
        this.sub_items_5 = [this.problem_info[4][1], this.problem_info[4][2], this.problem_info[4][3], this.problem_info[4][4], this.problem_info[4][5]]

        this.easy['점수'] = this.easy['알고리즘'] + this.easy['수학물리'] + this.easy['운영채제'] + this.easy['그래픽스'] + this.easy['소프트웨어 공학'] + '/30'
        this.normal['점수'] = this.normal['알고리즘'] + this.normal['수학물리'] + this.normal['운영채제'] + this.normal['그래픽스'] + this.normal['소프트웨어 공학'] + '/40'
        this.hard['점수'] = this.hard['알고리즘'] + this.hard['수학물리'] + this.hard['운영채제'] + this.hard['그래픽스'] + this.hard['소프트웨어 공학'] + '/30'
        this.total['점수'] = this.total['알고리즘'] + this.total['수학물리'] + this.total['운영채제'] + this.total['그래픽스'] + this.total['소프트웨어 공학'] + '/100'
        this.total['알고리즘'] += '/20'
        this.total['수학물리'] += '/20'
        this.total['운영채제'] += '/20'
        this.total['그래픽스'] += '/20'
        this.total['소프트웨어 공학'] += '/20'

        this.items = [this.easy, this.normal, this.hard, this.total]
        this.data = sums
      })
    },
    print () {
      var userID = this.$route.params.userID
      var date = document.querySelector('.tabs > .active').innerText
      window.open('/admin/user/print/' + userID + '/' + date, '', 'width=820, height=1200')
    }
  },
  computed: {
    ...mapGetters(['profile', 'user', 'isSuperAdmin'])
  }
}
</script>

<style lang="less">

/* Style the tabs */
.tabs {
    overflow: hidden;
    margin-left: 20px;
    margin-bottom: -2px; // hide bottom border
}

.tabs ul {
    list-style-type: none;
    margin-left: 20px;
}

.tabs a{
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
}
.tabs a:last-child {
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
    background-color: #aaa;
    color: #fff;
}

/* Styling for active tab */
.tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
}

/* Style the tab content */
.tabcontent {
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1
}

.admin-info {
  margin-bottom: 20px;
  &-name {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #409EFF;
  }
  .avatar {
    max-width: 10%;
  }
  .last-info {
    &-title {
      font-size: 16px;
    }
    &-body {
      .el-form-item {
        margin-bottom: 5px;
      }
    }
  }
}
.avatar {
  max-width: 100%;
}
.b-table {
    text-align: center;
    tr:nth-child(4) {
      font-size: 18px;
      font-weight: bold;
    }
}


table.type09 {
    border-collapse: collapse;
    text-align: center;
    line-height: 1.5;
    width:100%;
    .solid {
      border-right: 1px solid #ccc;
    }
    .bottom {
      border-bottom: 1px solid #ccc;
    }
}
table.type09 thead th {
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    border-top: 1px solid #ccc;
    color: #369;
}
table.type09 tbody th {
    width: 100px;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background: #f3f6f7;
}
table.type09 td {
    width: 100px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    vertical-align: top;
}

@media print {
  #Banner p#Title {
    font-size: 24pt;
  }
  #Banner p#Title a, #Banner p#Title a:link, #Banner p#Title a:visited {
    color: #000; /* change link to black text */
  }
  #Bread a:link, #Bread a:visited {
    text-decoration: underline; /* leave a clue that it’s a link */
    color: #000;
  }
  #Bread {
    color: #000;
    font-size: 6pt; /* make the text small */
  }
  #Footer {
    font-size: 6pt; /* make the text small */
    color: #000;
  }
  #SearchForm {
    display: none;
  }
  #Footer img {
    float: right; /* defined elsewhere, included for completeness */
  }
  #Content a:after { /* select links in the content area only */
    content: " [" attr(href) "] ";
    text-decoration: none;
    display: inline;
  }
  #Nav, #FlyOutNav, #SubNav, .NoPrint, p.CodeAlert, #SMLinks, #SearchForm {
    display: none;
  }
  body {
      background: #fff;
      color: #000;
      font-size: 8pt;
      line-height: 150%;
      margin: 0px;
    }
    hr {
      color: #ccc;
      background-color: #ccc;
    }
    h1, h2, h3, h4, h5, h6, code, pre {
      color: #000;
      text-transform: none; /* because sometimes I set all-caps */
    }
    h1 {
      font-size: 11pt;
      margin-top: 1em;
    }
    h2 {
      font-size: 10pt;
    }
    h3 {
      font-size: 9pt;
    }
    h4, h5, h6 {
      font-size: 8pt;
    }
    code, pre {
      font-size: 8pt;
      background-color: transparent;
      /* just in case the user configured browser to print backgrounds */
    }
    blockquote {
      background-image: none;
      /* though they may not print, I’d rather be sure */
    }
    a:link, a:visited {
      text-decoration: underline;
      color: #000;
    }
    abbr:after, acronym:after { /* some HTML4 love */
      content: " (" attr(title) ") ";
      /* I suspect I am one of the few who still use these elements */
    }
}
</style>
