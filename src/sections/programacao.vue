<template>
	<v-card class="mt-4">
		<v-card-row class="indigo darken-3">
			<v-card-title>
				<span class="white--text">Cronograma</span>
			</v-card-title>
		</v-card-row>

		<!-- Programação -->

		<v-card-row>
			<v-spacer ></v-spacer>
			<v-expansion-panel class="elevation-0">
				<v-expansion-panel-content @click="scrollTo('#cronograma-'+a)" class="indigo elevation-0 body-2 white--text" :id="'cronograma-'+a" v-for="(dia,a) in dias" :key="a" ripple>
					<div slot="header" class="white--text" >{{dia.titulo}}</div>
					<v-card v-for="(horario, b) in dia.horarios" :key="b">
						<v-card-text :class="((b % 2 == 0) ? 'indigo darken-4' : 'indigo darken-3') + ' text-xs-center white--text'">
							<div class="indigo--text text--lighten-4">{{horario.titulo}}</div>
							<v-layout row-sm column child-flex-sm>
								<v-card class="transparent pa-1" v-for="(evento,c) in horario.eventos" :key="c">
									<v-spacer></v-spacer>
									<v-card-text :class="evento.cor + ' body-2 ml-1 mr-1'">{{evento.titulo}}</v-card-text>
								</v-card>
							</v-layout>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
			<v-spacer></v-spacer>
		</v-card-row>

		<!-- Legendas -->

		<v-card-text class="indigo darken-2 white--text">
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
		var corMinicurso = 'deep-orange'
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
									titulo:'Abertura e Homenagem ao Prof. Marcio',
									cor: corPalestra
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Android',
									cor: corMinicurso
								},
								{
									titulo:'Dr. Rodrigo Leonard (Agência Espacial Brasileira) O Programa Espacial Brasileiro',
									cor: corPalestra
								},
								{
									titulo:'Aguardando confirmação',
									cor: corPalestra
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
									titulo:'Android',
									cor: corMinicurso
								},
								{
									titulo:'"Prof° Cristiano Pereira (titulo a confirmar)"',
									cor: corMinicurso
								},
								{
									titulo:'"Prof° Didan Junqueira Ribeiro Arduino (titulo a comfirmar)"',
									cor: corMinicurso
								},
								{
									titulo:'Montagem e controle de lego',
									cor: corMinicurso
								},
								{
									titulo:'Astronomia',
									cor: corMinicurso
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
									titulo:'"Prof° Cristiano Pereira (titulo a confirmar)"',
									cor: corMinicurso
								},
								{
									titulo:'Iran Carlos Ribeiro Prof° Rodrigo Maia Montagem e controle de lego',
									cor: corMinicurso
								},
								{
									titulo:'Astronomia',
									cor: corMinicurso
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
									titulo:'Roda de licenciatura (Título a confirmar) Prof°Cauê Zaghetto, Prof° Demetrius dos Santos Leão, Prof° Felipe de Lemos Cabral, ProfªMaria de Fátima Ramos Brandão',
									cor: corRodaConversa
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Dr. Luiz Ribeiro Física Computacional',
									cor: corPalestra
								},
								{
									titulo:'Gustavo A. Angelim Morais (IBM) Computação Cognitiva',
									cor: corPalestra
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
							titulo:'14:00 - 15:00',
							eventos:[
								{
									titulo:'Red Hat ou IBM (A confimar)',
									cor: corPalestra
								}
							]
						},
						{
							titulo:'15:00 - 16:00',
							eventos:[
								{
									titulo:'Huawei',
									cor: corPalestra
								}
							]
						},
						{
							titulo:'14:00 - 16:00',
							eventos:[
								{
									titulo:'Dr. Luciano Leal Energia solar',
									cor: corPalestra
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
									cor: corProjetos
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
							titulo:'19:00 - 20:00',
							eventos:[
								{
									titulo:'Palestra Automação',
									cor: corPalestra
								}
							]
						},
						{
							titulo:'20:00 - 22:00',
							eventos:[
								{
									titulo:'Palestras de Encerramento',
									cor: corPalestra
								}
							]
						}
					]
				},
				{
					titulo:'14/06 - Quarta',
					horarios:[
						{
							titulo:'09:00 - 14:00',
							eventos:[
								{
									titulo:'Prof. Eryc Construção de Foguete',
									cor: corMinicurso
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
