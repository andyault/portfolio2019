<style lang="scss" scoped>
	@import '/css/vars.scss';
	
	@supports (mix-blend-mode: difference) {
		.hero-text { color: $col-resume; /* invert() */ }
	}

	.hero-text-normal { color: $col-resume; }
</style>

<template>
	<div class="hero">
		<div class="hero-text" ref="heroText">
			<h1 class="hero-text-title">404</h1>
			<h2 class="hero-text-sub">That page wasn't found, sorry!</h2>
		</div>

		<div class="hero-text-normal" ref="heroText"></div>

		<hero-bg :color="color"></hero-bg>
	</div>
</template>

<script>
	import heroBg from '/js/components/hero-bg.vue';

	export default {
		data: () => ({
			color: ''
		}),

		mounted: function mounted() {
			let elem = this.$refs.heroText;
			let color = getComputedStyle(elem).color;

			this.color = color;
		},

		components: {
			heroBg
		}
	}
</script>
