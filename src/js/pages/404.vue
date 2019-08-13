<style lang="scss" scoped>
	.hero-text {
		// font-size: 3rem;
		font-size: 1.5rem;
		z-index: 999;
		// filter: invert(1); // grayscale(1) contrast(9);
		color: #90f;
		mix-blend-mode: difference;
	}

	.hero-text-inv {
		position: absolute;
		color: #6f0;
		mix-blend-mode: difference;
	}

	.hero-text-title {
		margin: 0;
		text-align: center;
	}

	.hero-text-sub { margin: 0; }
</style>

<template>
	<div class="hero">
		<div class="hero-text">
			<h1 class="hero-text-title">404</h1>
			<h2 class="hero-text-sub">That page wasn't found, sorry!</h2>
		</div>

		<hero-bg></hero-bg>
	</div>
</template>

<script>
	import heroBg from '/js/components/hero-bg.vue';

	export default {
		data: () => ({}),

		components: {
			heroBg
		}
	}
</script>
