<template>
  <header class="header">
    <h1 class="header-title">Webapp<a href="/" class="header-title__link"></a></h1>
    <div class="header-right">
      Hi <span id="navUserName">{{userInfo.username}}</span> <a class="header-right__link" href="javascript:;" @click="logout">退出</a>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
@b header {
  background:#22354A;
  height: 60px;
  padding:13px 30px;
}

@b header-title {
  position:relative;
  display:flex;
  float:left;
  height:34px;
  align-items:center;
  font-size:18px;
  color:#fff;

  @e link {
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    text-decoration:none;
  }
}

@b header-title:before {
    content:'';
    display:inline-block;
    width:34px;
    height:34px;
    margin-right:9px;
    background-image:url(//haitao.nos.netease.com/2fecfadc7d48464b90c2fe9b5d92412a.svg);
  }

@b header-right {
  float:right;
  height:34px;
  line-height:34px;
  color:#fff;

  @e link {
    color:#fff;
    &:hover {
      color:#fff;
    }
  }
}
</style>
