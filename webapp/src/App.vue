<template>
	<div id="app">
		<router-view name="header"></router-view>
	    <router-view name="sidebar"></router-view>
	    <router-view name="body"></router-view>
	</div>
</template>

<script>
	module.exports = {
		name: 'app'
	};
</script>