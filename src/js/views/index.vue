<style lang="scss">
	.app-container {
		display: flex;
		width: 100%;
		height: 100vh;
		flex-direction: column;
		align-items: stretch;
	}

	.app-body {
		flex: 1 1 auto;
		overflow: auto;
	}
</style>

<template>
	<div class="app-container">
		<app-header></app-header>

		<div class="app-body">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import appHeader from '/js/components/app-header.vue'

	export default {
		data: function() {
			return {
			}
		},

		components: {
			appHeader
		}
	}
</script>