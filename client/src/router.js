import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/register",
			name: "register",
			component: () =>
				import(
					/* webpackChunkName: "register" */ "./views/register.vue"
				),
		},
		{
			path: "/login",
			name: "login",
			component: () =>
				import(/* webpackChunkName: "login" */ "./views/login.vue"),
		},
		{
			path: "/",
			name: "index",
			component: () =>
				import(/* webpackChunkName: "index" */ "./views/index.vue"),
		},
		{
			path: "/profile",
			name: "profile",
			component: () =>
				import(/* webpackChunkName: "index" */ "./views/profile.vue"),
		},
	],
})
