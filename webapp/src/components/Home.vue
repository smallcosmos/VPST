<template>
	<div class="g-content-wrap">
		<p>{{msg}}</p>
	</div>
</template>

<script>
	module.exports = {
		data(){
			return {
				msg: 'Welcome!'
			};
		}
	};
</script>

<style scoped>
p{
	color: #00f;
}
</style>