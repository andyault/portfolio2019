<style lang="scss" scoped>
	@import 'src/css/vars.scss';
	
	@supports (mix-blend-mode: difference) {
		.hero-text { color: $col-primary; /* invert() */ }
	}

	.hero-text-normal { color: $col-primary; }
</style>

<template>
	<div>
		<div class="hero">
			<div class="hero-text">
				<h1 class="hero-text-title">I'm Andrew Ault</h1>
				<h2 class="hero-text-sub">I do programming, web, and graphic design</h2>
			</div>

			<div class="hero-text-normal" ref="heroText"></div>

			<hero-bg :color="color"></hero-bg>
		</div>

		<div class="page-container container container-small">
			<h1>About Me</h1>

		 	<p>
		 		I’m a Coastal Carolina University graduate with a BS in Information Systems and a minor in Graphic
		 		Design from Myrtle Beach, South Carolina. I have extensive experience with programming, graphic design,
		 		and web development.
		 	</p>
		</div>

		<div class="page-container container">
			<section>
				<h1>My Portfolio</h1>

				<project-info v-for="project in projects.projects" :project="project"></project-info>
			</section>

			<section>
				<h1>Freelance Projects</h1>

				<freelance-info v-for="project in projects.freelance" :project="project"></freelance-info>
			</section>
		</div>
	</div>
</template>

<script>
	import heroBg from '~js/components/hero-bg.vue';
	import projectInfo from '~js/components/project-info.vue';
	import freelanceInfo from '~js/components/freelance-info.vue';

	import projects from '~data/projects.json';

	export default {
		data: () => ({
			projects,
			color: ''
		}),

		mounted: function mounted() {
			let elem = this.$refs.heroText;
			let color = getComputedStyle(elem).color;

			this.color = color;
		},

		components: {
			heroBg,
			projectInfo,
			freelanceInfo
		}
	}
</script>
