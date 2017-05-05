Vue.use(VueRouter);
Vue.use(Vuetify);

const app = httpVueLoader('./vue/app.vue');
const notfound = httpVueLoader('./vue/404.vue');
const index = httpVueLoader('./vue/index.vue');

const routes = [
	{path: '*', component: notfound},
	{path: '/', component: index}
];

new Vue({
	el: '#app',
	router: new VueRouter({
		routes: routes
	}),
	render: function(h){
		return h(app);
	}
});
