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

	.container {
		width: 1200px;
		margin: 0 auto;
	}

	.app-body-container { padding: 2rem 0; }
</style>

<template>
	<div class="app-container">
		<app-header></app-header>

		<div class="app-body">
			<div class="app-body-container container">
				<div style="height: 200vh">tall</div>

				bottom
			</div>
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