<template>
	<div class="g-content-wrap">
		<p>{{msg}}</p>
		<el-button type="primary">主要按钮</el-button>
		<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
		<el-checkbox v-model="checked">备选项</el-checkbox>
	</div>
</template>

<script>
	module.exports = {
		data(){
			return {
				msg: 'Hello!'
			};
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
	color: #00f;
}
</style>