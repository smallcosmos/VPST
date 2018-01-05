<template>
  <aside :class="[{'sidebar--active': active}, 'sidebar']">
    <ul class="sidebar-menus">
      <li v-for="(menu, menuIndex) in menus" :class="[{'sidebar-menu--active': crtMenu == menuIndex}, 'sidebar-menu']">
        <div class="sidebar-head" @click="crtMenu = menuIndex">
          <span class="sidebar-head__arrow" :class="crtMenu == menuIndex ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></span>
          <span class="sidebar-head__title">{{ menu.title }}</span>
        </div>
        <ul class="sidebar-pages">
          <li v-for="(page, childIndex) in menu.children"
              :class="['sidebar-pages__page', 'f-toe', {'sidebar-pages__page--active': crtPage == childIndex}]"
              @click="goto(childIndex, menuIndex, page)"
          >{{ page.title }}</li>
        </ul>
      </li>
    </ul>
    <div class="sidebar-slideBtn" @click="toggle">
      <i :class="active ? 'el-icon-arrow-left' : 'el-icon-arrow-right'"></i>
    </div>
  </aside>
</template>

<script>
  import { mapState } from 'vuex'
  import * as MUTATION_TYPES from '@/store/mutation-type'
  import router from '@/router'

  export default {
    data() {
      return {
        menus: [{
          title: 'a',
          children: [{
            title: 'b',
            name: 'ModuleA',
          }]
        }],
        crtMenu: 0,
        crtPage: 0,
      }
    },
    computed: {
      ...mapState({
        active: 'sidebarActive'
      })
    },
    methods: {
      toggle() {
        this.$store.commit(MUTATION_TYPES.TOGGLE_SIDEBAR)
      },
      goto(pageIndex, menuIndex, { name }) {
        this.crtPage = pageIndex
        this.crtMenu = menuIndex
        router.push({ name })
      },
    }
  }
</script>

<style scoped>
@b sidebar {
  position:absolute;
  left:-180px;
  top:60px;
  bottom:0;
  width:180px;
  overflow:visible;
  background:#fff;
  border-right: 1px solid #E1E6ED;
  transition:all .3s;

  @m active {
    left:0;
  }
}

@b sidebar-menus {
  height:100%;
  overflow-y:auto;
}

@b sidebar-menu {
  position:relative;
  border-bottom:1px solid #DFEAF3;
  cursor:pointer;

  @m active {
    background:#F4F7FB;
    padding-bottom:5px;
  }
  @m active .sidebar-pages {
    display:block;
  }
}

@b sidebar-head {
  position:relative;
  padding:15px 0 15px 47px;
  font-size:14px;

  @e arrow {
    position:absolute;
    top:20px;
    left:28px;
    font-size:10px;
  }
}

@b sidebar-head:hover .sidebar-head__title{
  text-decoration:underline;
  font-weight:bold;
}

@b sidebar-pages {
  display:none;
  overflow:hidden;
  @e page {
    position:relative;
    padding:0 0 8px 54px;
    font-size:12px;

    @m active {
      color:#D9244E;
      font-weight:bold;
    }
    @m active:before {
      position:absolute;
      width:2px;
      height:10px;
      background:#D9244E;
      content:'';
      top:3px;
      left:48px;
    }
  }

  @e page:first-of-type{
    padding-top:0;
  }

  @e page:hover {
    text-decoration:underline;
    font-weight:bold;
  }
}

@b sidebar-slideBtn {
  display:flex;
  position:absolute;
  top:50%;
  left:180px;
  width:10px;
  height:50px;
  font-size:10px;
  margin-top:-60px;
  z-index:10;
  align-items:center;
  background:#C2C9D0;
  color:#fff;
  cursor:pointer;
}
</style>
