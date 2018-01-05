<template>
<section :class="[{'main--active': !active}, 'main']">
  <router-view></router-view>
  <p class="main__foot">本系统由网易无尾熊(杭州)科技有限公司提供技术支持</p>
</section>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		...mapState({
			active: 'sidebarActive'
		})
	}
}	
</script>

<style scoped>
@b main {
  position:absolute;
  left:180px;
  top:60px;
  right:0;
  bottom:0;
  background:#EAEDF3;
  padding:10px 13px;
  overflow:auto;
  transition:all .3s;

  @m active {
    left:0;
  }

  @e foot {
    margin-top: 4px;
    color: #9FA6AF;
    text-align: center;
  }
}
</style>
