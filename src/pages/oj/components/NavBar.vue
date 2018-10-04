<template>
  <div id="header">
    <Menu theme="light" mode="horizontal" @on-select="handleRoute" :active-name="activeMenu" class="oj-menu">
      <div class="logo" style="width: 165px; height: 50px; background: url(/static/com2usoreLogo.png); background-repeat: no-repeat; background-position: left bottom; background-size: 160px 50px">
        <!-- <span>{{website.website_name}}</span> -->
      </div>
      <Menu-item name="/">
        <Icon type="home"></Icon>
        <!-- Home -->
        가이드
      </Menu-item>
      <Menu-item v-if="isAdminRole" name="/problems">
        <Icon type="ios-keypad"></Icon>
        <!-- Problems -->
        문제목록
      </Menu-item>
      <Menu-item name="/contests">
        <Icon type="trophy"></Icon>
        <!-- Contests -->
        시험장
      </Menu-item>
      <Menu-item v-if="isAdminRole" name="/status">
        <Icon type="ios-pulse-strong"></Icon>
        <!-- Status -->
        제출결과
      </Menu-item>
      <Submenu v-if="isAdminRole" name="">
        <template slot="title">
          <Icon type="podium"></Icon>
          <!-- Rank -->
          랭킹
        </template>
        <Menu-item name="/acm-rank">
          <!-- ACM Rank -->
          ACM 랭킹
        </Menu-item>
        <Menu-item  name="/oi-rank">
          <!-- OI Rank -->
          OI 랭킹
        </Menu-item>
      </Submenu>
      <Submenu v-if="isAdminRole" name="">
        <template slot="title">
          <Icon type="information-circled"></Icon>
          About
        </template>
        <Menu-item name="/about">
          Judger
        </Menu-item>
        <Menu-item name="/FAQ">
          FAQ
        </Menu-item>
      </Submenu>
      <template v-if="!isAuthenticated">
        <div class="btn-menu">
          <Button type="ghost"
                  ref="loginBtn"
                  shape="circle"
                  @click="handleBtnClick('login')">로그인
          </Button>
          <Button v-if="website.allow_register"
                  type="ghost"
                  shape="circle"
                  @click="handleBtnClick('register')"
                  style="margin-left: 5px;">신규가입
          </Button>
        </div>
      </template>
      <template v-else>
        <Dropdown class="drop-menu" @on-click="handleRoute" placement="bottom" trigger="click">
          <Button type="text" class="drop-menu-title">{{ user.username }}
            <Icon type="arrow-down-b"></Icon>
          </Button>
          <Dropdown-menu slot="list">
            <Dropdown-item name="/user-home">내정보</Dropdown-item>
            <Dropdown-item name="/status?myself=1">제출정보</Dropdown-item>
            <Dropdown-item name="/setting/profile">환경설정</Dropdown-item>
            <Dropdown-item v-if="isAdminRole" name="/admin">관리자모드</Dropdown-item>
            <Dropdown-item divided name="/logout">로그아웃</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
      </template>
    </Menu>
    <Modal v-model="modalVisible" :width="400">
      <!-- <div slot="header" class="modal-title">Welcome to {{website.website_name_shortcut}}</div> -->
      <div slot="header" class="modal-title">Com2uScore에 오신걸 환영합니다</div>
      <component :is="modalStatus.mode" v-if="modalVisible"></component>
      <div slot="footer" style="display: none"></div>
    </Modal>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import login from '@oj/views/user/Login'
  import register from '@oj/views/user/Register'

  export default {
    components: {
      login,
      register
    },
    mounted () {
      this.getProfile()
    },
    methods: {
      ...mapActions(['getProfile', 'changeModalStatus']),
      handleRoute (route) {
        if (route && route.indexOf('admin') < 0) {
          this.$router.push(route)
        } else {
          window.open('/admin/')
        }
      },
      handleBtnClick (mode) {
        this.changeModalStatus({
          visible: true,
          mode: mode
        })
      }
    },
    computed: {
      ...mapGetters(['website', 'modalStatus', 'user', 'isAuthenticated', 'isAdminRole']),
      // 跟随路由变化
      activeMenu () {
        return '/' + this.$route.path.split('/')[1]
      },
      modalVisible: {
        get () {
          return this.modalStatus.visible
        },
        set (value) {
          this.changeModalStatus({visible: value})
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  #header {
    min-width: 1100px;
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    .oj-menu {
      background: #fdfdfd;
    }

    .logo {
      margin-top: 1px;// Note: 생성!
      margin-left: 1%;// Note: 수정!
      margin-right: 0.5%; // Note: 수정!
      font-size: 20px;
      float: left;
      line-height: 60px;
    }

    .drop-menu {
      position: absolute;
      right: 10px;
      &-title {
        font-size: 16px;
      }
    }
    .btn-menu {
      font-size: 16px;
      float: right;
      margin-right: 10px;
    }
  }

  .modal {
    &-title {
      font-size: 18px;
      font-weight: 600;
    }
  }
</style>
