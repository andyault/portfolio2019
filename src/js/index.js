'use strict';

//
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router/dist/vue-router.js';

import routes from '/js/routes.js';

import 'normalize.css';

//
Vue.use(VueRouter);

const router = new VueRouter({
	routes: routes,
	base: ''
});

const app = new Vue({
	router: router
});

//
app.$mount('#app');