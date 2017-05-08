Vue.use(Vuetify);

// Custom components

const app = httpVueLoader('./vue/app.vue');
const index = httpVueLoader('./vue/index.vue');
const sobre = httpVueLoader('./vue/sections/sobre.vue');
const campusEndereco =  httpVueLoader('./vue/sections/campusEndereco.vue');
const campusMapa =  httpVueLoader('./vue/sections/campusMapa.vue');
const contato =  httpVueLoader('./vue/sections/contato.vue');
const programacao = httpVueLoader('./vue/sections/programacao.vue');
const fotos =  httpVueLoader('./vue/sections/fotos.vue');
const inscricao = httpVueLoader('./vue/sections/inscricao.vue');

// Registro de componentes

Vue.component('index', index);
Vue.component('sobre', sobre);
Vue.component('campus-endereco',campusEndereco);
Vue.component('campus-mapa',campusMapa);
Vue.component('contato',contato);
Vue.component('programacao',programacao);
Vue.component('fotos',fotos);
Vue.component('inscricao',inscricao);

//

var vueApp = new Vue({
	el: '#app',
	render: function(h){
		return h(app);
	}
});
