Vue.use(VueRouter);
Vue.use(Vuetify);

const app = httpVueLoader('./vue/app.vue');
const notfound = httpVueLoader('./vue/404.vue');
const index = httpVueLoader('./vue/index.vue');
const local = httpVueLoader('./vue/local.vue');
const programacao = httpVueLoader('./vue/programacao.vue');

const routes = [
	{path: '*', component: notfound},
	{path: '/', component: index, name: 'Semana da Ciência e Tecnologia'},
	{path: '/local', component: local, name: 'Como chegar'},
	{path: '/programacao', component: programacao, name: 'Programação'}
];

var vueApp = new Vue({
	el: '#app',
	router: new VueRouter({
		routes: routes
	}),
	render: function(h){
		return h(app);
	}
});
