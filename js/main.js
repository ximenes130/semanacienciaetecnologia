Vue.use(VueRouter);
Vue.use(Vuetify);


// Routes

const app = httpVueLoader('./vue/app.vue');
const notfound = httpVueLoader('./vue/404.vue');
const index = httpVueLoader('./vue/index.vue');
const local = httpVueLoader('./vue/local.vue');
const programacao = httpVueLoader('./vue/programacao.vue');


// Custom components

const sobre = httpVueLoader('./vue/sections/sobre.vue');
const campusEndereco =  httpVueLoader('./vue/sections/campusEndereco.vue');
const campusMapa =  httpVueLoader('./vue/sections/campusMapa.vue');
const contato =  httpVueLoader('./vue/sections/contato.vue');
const cronograma = httpVueLoader('./vue/sections/cronograma.vue');
const fotos =  httpVueLoader('./vue/sections/fotos.vue');
const inscricao = httpVueLoader('./vue/sections/inscricao.vue');

// Code

const routes = [
	{path: '*', component: notfound},
	{path: '/', component: index, name: 'Semana da Ciência e Tecnologia'},
	{path: '/local', component: local, name: 'Como chegar'},
	{path: '/programacao', component: programacao, name: 'Programação'}
];


// Registro de componentes

Vue.component('sobre', sobre);
Vue.component('campus-endereco',campusEndereco);
Vue.component('campus-mapa',campusMapa);
Vue.component('contato',contato);
Vue.component('cronograma',cronograma);
Vue.component('fotos',fotos);
Vue.component('inscricao',inscricao);


//

var vueApp = new Vue({
	el: '#app',
	router: new VueRouter({
		routes: routes
	}),
	render: function(h){
		return h(app);
	}
});
