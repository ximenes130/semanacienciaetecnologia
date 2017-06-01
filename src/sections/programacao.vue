<template>
	<v-card class="mt-4">
		<v-card-row class="teal darken-3">
			<v-card-title>
				<span class="white--text">Cronograma</span>
			</v-card-title>
		</v-card-row>

		<!-- Programação -->

		<v-card-row>
			<v-spacer ></v-spacer>
			<v-expansion-panel class="elevation-0">
				<v-expansion-panel-content  class="teal elevation-0 body-2 white--text" v-for="(dia,a) in dias" :key="a">
					<div slot="header" class="white--text">{{dia.titulo}}</div>
					<v-card v-for="(horario, b) in dia.horarios" :key="b">
						<v-card-text :class="((b % 2 == 0) ? 'teal darken-4' : 'teal darken-3') + ' text-xs-center white--text'">
							<div class="teal--text text--lighten-4">{{horario.titulo}}</div>
							<v-layout row-sm column child-flex-sm>
								<v-card class="transparent pa-1" v-for="(evento,c) in horario.eventos" :key="c">
									<v-card-row>
										<v-card-text :class="evento.cor + ' elevation-1 ml-1 mr-1'">
											<div class="body-2">{{evento.titulo}}	</div>
											<v-divider v-if="evento.local"></v-divider>
											<div class="caption">{{evento.local}}	</div>
										</v-card-text>
									</v-card-row>
								</v-card>
							</v-layout>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
			<v-spacer></v-spacer>
		</v-card-row>

		<!-- Legendas -->

		<v-card-text class="teal darken-2 white--text">
			<v-list dense>
				<v-list-item v-for="(legenda,index) in legendas" :key="index">
					<v-list-tile tag="div">
						<v-list-tile-avatar>
							<v-icon :class="legenda.cor">fiber_manual_record</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title class="white--text">{{legenda.texto}}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
			</v-list>
		</v-card-text>
	</v-card>
</template>

<style scoped>
.mapa-img{
	max-width: 100%;
	max-height: 500px;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
</style>

<script>
import $ from 'jquery'
export default {
	methods: {
		scrollTo(selector){
			$('html, body').animate({
				scrollTop: $(selector).offset().top - 78
			});
			if(innerWidth < 992){
				this.sidebar = false;
			}
		}
	},
	data(){
		var corPalestra = 'teal'
		var corMinicurso = 'blue-grey'
		var corRodaConversa = 'brown'
		var corProjetos = 'deep-purple'
		var corOutro = 'red'
		return {
			dias: [
				{
					titulo:'12/06 - Segunda',
					horarios:[
						{
							titulo:'08:30 - 09:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'09:00 - 10:00',
							eventos:[
								{
									titulo:'Abertura e Homenagem ao Marcio / IEEE - Lídia Ruanny Luiz Felipe',
									cor: corPalestra,
									local: 'Anfiteatro'
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Lucas Campos - Android',
									cor: corMinicurso,
									local: ''
								},
								{
									titulo:'Dr. Rodrigo Leonard (Agência Espacial Brasileira) O Programa Espacial Brasileiro',
									cor: corPalestra,
									local: ''
								},
								{
									titulo:'Edson Rosa dos Santos Júnior A Interconexão e os riscos da era virtual com o advento do sequestro digital',
									cor: corPalestra,
									local: ''
								}
							]
						},
						{
							titulo:'11:30 - 14:00',
							eventos:[
								{
									titulo:'Intervalo de Almoço',
									cor: corOutro
								}
							]
						},
						{
							titulo:'14:00 - 17:30',
							eventos:[
								{
									titulo:'Lucas Campos - Android',
									cor: corMinicurso,
									local: ''
								},
								{
									titulo:'Prof° Cristiano Pereira',
									cor: corMinicurso,
									local: ''
								},
								{
									titulo:'Arthur Braga Vidal - Robótica Edubot',
									cor: corMinicurso,
									local: ''
								},
								{
									titulo:'Rodrigo Maia Iran Carlos Ribeiro - Montagem e controle de lego',
									cor: corMinicurso,
									local: ''
								},
								{
									titulo:'Profº Frederico Jordão - Astronomia',
									cor: corMinicurso,
									local: ''
								}
							]
						},
						{
							titulo:'17:30 - 18:00',
							eventos:[
								{
									titulo:'Intervalo',
									cor: corOutro
								}
							]
						},
						{
							titulo:'18:00 - 19:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'19:00 - 22:00',
							eventos:[
								{
									titulo:'Prof° Cristiano Pereira',
									cor: corMinicurso,
									local: ''
								},
								{
									titulo:'Iran Carlos Ribeiro Prof° Rodrigo Maia Montagem e controle de lego',
									cor: corMinicurso,
									local: ''
								},
								{
									titulo:'Profº Frederico Jordão - Clube de Astronomia',
									cor: corMinicurso,
									local: ''
								}
							]
						}
					]
				},
				{
					titulo:'13/06 - Terça',
					horarios:[
						{
							titulo:'08:30 - 09:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'09:00 - 10:30',
							eventos:[
								{
									titulo:'Formação docente : experiência e concepção sobre o ensino de Física e Computação - Prof°Cauê Zaghetto, Prof° Demetrius dos Santos Leão, Prof° Felipe de Lemos Cabral, ProfªMaria de Fátima Ramos Brandão',
									cor: corRodaConversa,
									local: ''
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Dr. Luiz Ribeiro Física Computacional',
									cor: corPalestra,
									local: ''
								},
								{
									titulo:'Gustavo A. Angelim Morais (IBM) Computação Cognitiva',
									cor: corPalestra,
									local: ''
								}
							]
						},
						{
							titulo:'11:30 - 14:00',
							eventos:[
								{
									titulo:'Intervalo de Almoço',
									cor: corOutro,
									local: ''
								}
							]
						},
						{
							titulo:'14:00 - 15:00',
							eventos:[
								{
									titulo:'Elvis Rocha - Introducao Red Hat Passar pelo portifolio de MW e detalhar openshift (e os conceitos de container, devops, PaaS)',
									cor: corPalestra,
									local: ''
								}
							]
						},
						{
							titulo:'15:00 - 16:00',
							eventos:[
								{
									titulo:'Huawei',
									cor: corPalestra,
									local: ''
								}
							]
						},
						{
							titulo:'14:00 - 16:00',
							eventos:[
								{
									titulo:'Dr. Luciano Leal - Energia solar',
									cor: corPalestra,
									local: ''
								}
							]
						},
						{
							titulo:'16:00 - 16:30',
							eventos:[
								{
									titulo:'Intervalo',
									cor: corOutro
								}
							]
						},
						{
							titulo:'16:30 - 18:00',
							eventos:[
								{
									titulo:'Apresentação de projetos',
									cor: corProjetos,
									local: ''
								}
							]
						},
						{
							titulo:'18:30 - 19:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'19:00 - 19:40',
							eventos:[
								{
									titulo:'Profº José Uniram - IEEE',
									cor: corPalestra,
									local: ''
								}
							]
						},
						{
							titulo:'20:00 - 21:30',
							eventos:[
								{
									titulo:'Prof° Me. Juan Sebastian Toquica - Arenas Retrofir de Robô Industrial',
									cor: corPalestra,
									local: ''
								}
							]
						}
					]
				},
				{
					titulo:'14/06 - Quarta',
					horarios:[
						{
							titulo:'08:30 - 09:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'09:00 - 10:00',
							eventos:[
								{
									titulo:'Marco Reis - Big Data',
									cor: corPalestra,
									local: ''
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Profº Daniel Saad - Estrutura de Dados Probabilísticas',
									cor: corPalestra,
									local: ''
								}
							]
						},
						{
							titulo:'09:00 - 11:30',
							eventos:[
								{
									titulo:'Prof. Eryc Construção de Foguete',
									cor: corMinicurso,
									local: ''
								}
							]
						},
						{
							titulo:'11:30 - 14:00',
							eventos:[
								{
									titulo:'Intervalo de Almoço',
									cor: corOutro
								}
							]
						},
						{
							titulo:'14:00 - 17:30',
							eventos:[
								{
									titulo:'Algoritime-se: Oficina de Introdução a Algoritmos - Anderson Ferreira, Catarina Melo, Dermevaldo Dias, Raquel Passos',
									cor: corMinicurso,
									local: ''
								}
							]
						},
						{
							titulo:'18:30 - 19:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'19:00 - 22:00',
							eventos:[
								{
									titulo:'Prof° Cristiano Pereira',
									cor: corPalestra,
									local: ''
								}
							]
						}
					]
				}
			],
			legendas: [
				{
					texto:'Palestras',
					cor: corPalestra+'--text'
				},
				{
					texto:'Minicursos',
					cor: corMinicurso+'--text'
				},
				{
					texto:'Roda de conversa',
					cor: corRodaConversa+'--text'
				},
				{
					texto:'Projetos',
					cor: corProjetos+'--text'
				},
				{
					texto:'Outro',
					cor: corOutro+'--text'
				}
			]
		}
	}
};
</script>
