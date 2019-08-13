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
	<div>
		<div class="hero">
			<div class="hero-text">
				<h1 class="hero-text-title">I'm Andrew Ault</h1>
				<h2 class="hero-text-sub">I do programming, web, and graphic design</h2>
			</div>

			<!-- <div class="hero-text hero-text-inv">
				I'm Andrew Ault
			</div> -->

			<hero-bg></hero-bg>
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
	import heroBg from '/js/components/hero-bg.vue';
	import projectInfo from '/js/components/project-info.vue';
	import freelanceInfo from '/js/components/freelance-info.vue';

	import projects from '/data/projects.json';

	export default {
		data: () => ({
			projects
		}),

		components: {
			heroBg,
			projectInfo,
			freelanceInfo
		}
	}
</script>
