<style lang="scss" scoped>
	.freelance-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>

<template>
	<div class="freelance">
		<div class="freelance-header">
			<h2 class="freelance-title">{{ project.title }}</h2>
			<div class="freelance-dates" v-html="dates"></div>
		</div>

		<div class="freelance-info">{{ project.desc }}</div>
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
			dates: function dates() {
				let dates = this.project.startDate;

				if (!this.project.endDate)
					dates += ' &mdash; Present';
				else if (this.project.endDate !== this.project.startDate)
					dates += ' &mdash; ' + this.project.endDate;

				return dates;
			},
		},

		props: ['project']
	}
</script>
