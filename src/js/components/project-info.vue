<style lang="scss" scoped>
	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.project-contents {
		display: flex;
		align-items: center;
		margin-bottom: 4rem;
	}

	.project:nth-child(2n + 1) {
		.project-contents { flex-direction: row-reverse; }
		.project-info { padding: 0 0 0 2rem; }
	}

	.project-info {
		padding: 0 2rem 0 0;
		flex-basis: 61.8%;
		white-space: pre-wrap;
	}

	.project-img {
		flex-basis: 38.2%;
		min-height: calc(1200px * 0.382 * (512 / 845));
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>

<template>
	<div class="project">
		<div class="project-header">
			<h2 class="project-title">{{ project.title }}</h2>
			<div class="project-dates" v-html="dates"></div>
		</div>

		<div class="project-contents">
			<div class="project-info">{{ project.desc }}</div>

			<div class="project-img" :style="{ backgroundImage: `url(${imgUrl})` }">
			</div>
		</div>
	</div>
</template>

<script>
	import path from 'path';

	//for some reason, trying to import /img/* doesn't work, but ../../img/* does
	//also note that import/require only support static arguments ie import(project.img) won't work
	import images from '../../img/*.png';

	export default {
		data: () => ({}),

		computed: {
			imgUrl: function imgUrl() {
				let imgExt = path.extname(this.project.img);
				let imgName = path.basename(this.project.img, imgExt);

				return images[imgName];
			},

			dates: function dates() {
				let dates = this.project.startDate;

				if (!this.project.endDate)
					dates += ' &mdash; Present';
				else if (this.project.endDate !== this.project.startDate)
					dates += ' &mdash; ' + this.project.endDate;

				return dates;
			}
		},

		props: ['project']
	}
</script>
