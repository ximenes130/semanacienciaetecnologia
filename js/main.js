Vue.use(VueRouter);
Vue.use(Vuetify);


// Routes

const app = httpVueLoader('./vue/app.vue');
const notfound = httpVueLoader('./vue/404.vue');
const index = httpVueLoader('./vue/index.vue');
const local = httpVueLoader('./vue/local.vue');
const programacao = httpVueLoader('./vue/programacao.vue');


// Custom components

const about = httpVueLoader('./vue/sections/about.vue');
//   const subscription = '<div>subscription</div>';
//   const schedule = '<div>schedule</div>';
//   const campus-map = '<div>bcampus-map lahhh</div>';
//   const campus-addres = '<div>campus-addres</div>';
//   const fotos = '<div>fotos</div>';
//   const contact = '<div>contact</div>';

// Code

const routes = [
	{path: '*', component: notfound},
	{path: '/', component: index, name: 'Semana da Ciência e Tecnologia'},
	{path: '/local', component: local, name: 'Como chegar'},
	{path: '/programacao', component: programacao, name: 'Programação'}
];

// Registro de componentes

Vue.component('about', about);

var vueApp = new Vue({
	el: '#app',
	router: new VueRouter({
		routes: routes
	}),
	render: function(h){
		return h(app);
	}
});
