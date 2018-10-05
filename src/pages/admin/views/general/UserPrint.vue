<template>
  <div class="print_area" >
    <el-row type="flex" :gutter="25">

      <!-- 사진 -->
      <el-col :span="5">
        <img class="avatar" :src="profile.avatar"/><br /><br />
      </el-col>

      <!-- 사용자정보-->
      <el-col :span="19">
        <h4>이름 : {{user.real_name}} </h4>
        <h4>닉네임 : {{user.username}} </h4>
        <h4>이메일 : {{user.email}}</h4>
      </el-col>
    </el-row>

    <hr/>

    <el-row  type="flex" :gutter="25">
      <!-- 차트_막대 -->
      <el-col :span="12">
        <chartjs-bar :datalabel="labelText" :labels="labels" :data="data" :option="optionsBar" :bind="true"></chartjs-bar>
      </el-col>
      <!-- 차트_방사형 -->
      <el-col :span="12">
        <chartjs-radar :datalabel="labelText" :labels="labels" :data="data" :option="optionsRadar" :bind="true"></chartjs-radar>
      </el-col>
    </el-row>

    <hr/>

    <el-card class="admin-info">
      <div v-if="test === 1">
        <h4>점수</h4>
        <b-table :items="items"></b-table>
        <br />
        <h4>답안</h4>
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
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import api from '../../api.js'
import ojapi from '../../../oj/api.js'

export default {
  name: 'UserPrint',
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
      title: 'UserPrint',
      test: 1,
      labels: ['알고리즘', '수학', '운영체제', '그래픽스', '소프트웨어 공학'],
      data: [0, 0, 0, 0, 0],
      profile: {},
      optionsBar: {
        legend: {
          display: false
        }
      },
      optionsRadar: {
        legend: {
          display: false
        },
        animation: {
          onComplete: function () {
            window.print()
          }
        }
      },
      labelText: '점수',
      el: '#tabs'
    }
  },
  mounted () {
    // 페이지 실행과 동시에 실행
    var userID = this.$route.params.userID
    var submissionDate = this.$route.params.date
    api.getUser(userID).then(res => {
      this.user = res.data.data
      // console.log(this.user)
      ojapi.getUserInfo(this.user.username).then(res => {
        this.profile = res.data.data
      })
    })

    ojapi.getSubmissionFromUser(userID).then(res => {
      this.info = res.data.data.results
      // console.log(this.info)
    // ojapi.getSubmissionList(0, 10, {username: this.user.username}).then(res => {
    //   this.info = res.data.data.results
    })
    ojapi.getSubmissionFromDate(userID, submissionDate).then(res => {
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
      console.log(this.items)
      this.data = sums
    })
  },
  methods: {
    codetest () {
      this.test = 1
    },
    coding () {
      this.test = 2
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
    font-size: 10px;
    tr:nth-child(4) {
      font-size: 12px;
      font-weight: bold;
    }

}
table.type09 {
    border-collapse: collapse;
    text-align: center;
    line-height: 1.5;
    font-size: 10px;
    width:100%;
    .solid {
      border-right: 1px solid #ccc;
    }
    .bottom {
      border-bottom: 1px solid #ccc;
    }
}
table.type09 thead th {
    padding: 3px;
    font-weight: bold;
    vertical-align: top;
    border: 1px solid #ccc;
    color: #369;
}
table.type09 tbody th {
    width: 50px;
    padding: 3px;
    vertical-align: top;
    border: 1px solid #ccc;
    background: #f3f6f7;
}
table.type09 td {
    width: 100px;
    padding: 3px;
    border: 1px solid #ccc;
    vertical-align: top;
}
html, body {
  background-color: inherit;
}
.print_area {
  margin-bottom: 20px;
  padding: 10px 10px;
  width: 21cm;
  height: 29cm;
  /*background-color: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);*/
}
.el-card {
  box-shadow: none;
  border: 0px;
}


</style>
