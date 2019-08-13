'use strict';

//
import indexView from '/js/views/index.vue';
import index from '/js/pages/index.vue';
import blog from '/js/pages/blog.vue';
import notFound from '/js/pages/404.vue';

//
const routes = [
	{ path: '/', component: indexView, children: [
		{ path: '', component: index },
		{ path: 'blog', component: blog } //todo - move to component
	] },
	{ path: '*', component: indexView, children: [
		{ path: '*', component: notFound }
	] }
];

export default routes;