import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

// Custom components

import App from '../App.vue'
import index from '../index.vue'
import sobre from '../sections/sobre.vue'
import campusEndereco  from '../sections/campusEndereco.vue'
import campusMapa  from '../sections/campusMapa.vue'
import contato  from '../sections/contato.vue'
import programacao from '../sections/programacao.vue'
import fotos  from '../sections/fotos.vue'
import inscricao from '../sections/inscricao.vue'
import inscricaoProjeto from '../sections/inscricaoProjeto.vue'

// Registro de componentes

Vue.component('index', index);
Vue.component('sobre', sobre);
Vue.component('campusEndereco',campusEndereco);
Vue.component('campusMapa',campusMapa);
Vue.component('contato',contato);
Vue.component('programacao',programacao);
Vue.component('fotos',fotos);
Vue.component('inscricao',inscricao);
Vue.component('inscricaoProjeto',inscricaoProjeto);

//

new Vue({
	el: '#app',
	render: h=>h(App)
});
