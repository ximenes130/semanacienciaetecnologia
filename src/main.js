import Vue from 'vue';
import Vuetify from 'vuetify';

// Custom components

import App from './App.vue';
import index from './index.vue';
import sobre from './sections/sobre.vue';
import campusEndereco  from './sections/campusEndereco.vue';
import campusMapa  from './sections/campusMapa.vue';
import contato  from './sections/contato.vue';
import programacao from './sections/programacao.vue';
import fotos  from './sections/fotos.vue';
import inscricao from './sections/inscricao.vue';
import inscricaoMinicurso from './sections/inscricaoMinicurso.vue';
import inscricaoProjeto from './sections/inscricaoProjeto.vue';
import organizacao from './sections/organizacao.vue';

// Adicionando plugins

Vue.use(Vuetify);

// Registro de componentes

Vue.component('index', index);
Vue.component('sobre', sobre);
Vue.component('campusEndereco', campusEndereco);
Vue.component('campusMapa', campusMapa);
Vue.component('contato', contato);
Vue.component('programacao', programacao);
Vue.component('fotos', fotos);
Vue.component('inscricao', inscricao);
Vue.component('inscricaoMinicurso', inscricaoMinicurso);
Vue.component('inscricaoProjeto', inscricaoProjeto);
Vue.component('organizacao', organizacao);

//

new Vue({
	el: '#app',
	render: h=>h(App)
});
