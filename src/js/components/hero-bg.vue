<style lang="scss" scoped>
	@import '/css/vars.scss';

	.hero-bg {
		position: absolute;
		top: 0; left: 0;
		width: 100%; height: 100%;
		overflow: hidden;
		// background: #fff;
	}

	.blobs {
		position: absolute;
		top: 0; left: 0;
		width: 100%; height: 100%;
		filter: url('#goo');
		overflow: hidden;
	}

	.blob-wrapper {
		position: absolute;
		top: 0; left: 0;
		width: 100%;
		height: 100%;
	}

	.blob {
		position: absolute;
		border-radius: 999vw;
		transform: translate(-50%, -50%);
		transition: all 3s;
	}
</style>

<template>
	<div class="hero-bg">
		<div class="blobs">
			<div v-for="blob in blobs"
					class="blob"
					v-bind:style="{
						top: `calc(50% + ${blob.top}px)`,
						left: `calc(50% + ${blob.left}px)`,
						width: blob.size + 'px',
						height: blob.size + 'px',
						background: blob.bg
					}"
				>
				</div>
		</div>
		
		<svg>
			<filter id="goo">
				<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
				<feColorMatrix in="blur" type="matrix" :values="`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${mult} ${sub}`" result="goo" />
				<!-- <feBlend in="SourceGraphic" in2="goo" /> -->
			  	<feComposite in="SourceGraphic" in2="goo" operator="atop"/>
			</filter>
		</svg>
	</div>
</template>

<script>
	export default {
		data: () => ({
			mult: 25,
			sub: -7,
		}),

		computed: {
			blobs: function blobs() {
				return [
					{ top: 40, left: -792, size: 893, bg: this.color },
					{ top: 195, left: 619, size: 480, bg: this.color },
					{ top: -85, left: -273, size: 288, bg: this.color, originX: 500, originY: 100, rotation: 45 },
					{ top: 28, left: -144, size: 100, bg: this.color, originX: 500, originY: 500, rotation: 45 },
					{ top: 559, left: 244, size: 720, bg: this.color, originX: 250, originY: 600, rotation: -45 },
					{ top: -284, left: 244, size: 216, bg: this.color }
				];
			}
		},

		props: {
			color: { default: '#000' }
		}
	}
</script>