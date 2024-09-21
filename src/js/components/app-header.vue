<style lang="scss" scoped>
	@import 'src/css/vars.scss';

	.app-header {
		display: flex;
		width: 100%;
		height: $header-height;
		font-size: 1.5rem;
	}

	.app-header-container {
		display: flex;
		padding: 1rem 0;
		justify-content: space-between;
		align-items: center;
	}

	.app-header-logo {
		display: block;
		font-weight: bold;
	}

	.app-header-link {
		display: inline-block;
		color: #000;
		text-decoration: none;

		transition: color 0.333s;
	}

	.app-header-link-inner {
		display: inline-block;
		position: relative;
		height: calc(1em + 8px);
		top: -4px;
	}

	.app-header-logo, .router-link-exact-active {
		.app-header-link-inner {
			border-bottom-width: 4px;
			border-bottom-style: solid;
		}
	}

	.app-header-nav-list-item, .app-header-logo {
		&:nth-of-type(1) {
			&.app-header-link:hover, .app-header-link:hover { color: $col-primary; }
			.app-header-link-inner { border-color: $col-primary; }
		}

		&:nth-of-type(2) {
			.app-header-link:hover { color: $col-blog; }
			.app-header-link-inner { border-color: $col-blog; }
		}

		&:nth-of-type(3) .app-header-link:hover { color: $col-resume; }
	}

	.app-header-nav-list {
		display: flex;
		list-style: none;
		padding: 0;
		margin-right: -1rem;
	}

	.app-header-nav-list-item {
		padding: 1rem 1rem;
	}
</style>

<template>
	<header class="app-header">
		<div class="app-header-container container">
			<router-link to="/" class="app-header-link app-header-logo">
				<div class="app-header-link-inner">andrewault</div>
			</router-link>

			<nav class="app-header-nav">
				<ul class="app-header-nav-list">
					<li class="app-header-nav-list-item">
						<router-link class="app-header-link" to="/">
							<div class="app-header-link-inner">about</div>
						</router-link>
					</li>

					<li class="app-header-nav-list-item">
						<router-link class="app-header-link" to="/blog">
							<div class="app-header-link-inner">blog</div>
						</router-link>
					</li>

					<li class="app-header-nav-list-item">
						<a class="app-header-link" :href="resume">
							<div class="app-header-link-inner">resume</div>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
	import resume from '~static/resume.pdf';

	export default {
		data: () => ({
			resume
		})
	}
</script>