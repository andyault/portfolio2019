<style lang="scss" scoped>
	@import '/css/vars.scss';

	.app-header {
		display: flex;
		width: 100%;
		height: $header-height;

		outline: 1px solid red;
	}

	.app-header-container {
		display: flex;
		padding: 1rem 0;
		justify-content: space-between;
		align-items: center;
	}
</style>

<template>
	<header class="app-header">
		<div class="app-header-container container">
			<div class="app-header-logo">
				logo
			</div>

			<nav class="app-header-nav">
				<ul class="app-header-nav-list">
					<li class="app-header-nav-list-item">
						home
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
	export default {
		data: function() {
			return {};
		}
	}
</script>