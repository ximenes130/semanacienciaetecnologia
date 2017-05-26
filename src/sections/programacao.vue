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
				<v-expansion-panel-content  class="indigo elevation-0 body-2 white--text" v-for="(dia,a) in dias" :key="a">
					<div slot="header" class="white--text "> {{dia.titulo}}</div>
					<v-card v-for="(horario,b) in dia.horarios" :key="b">
						<v-card-text :class="((b%2 == 0) ? 'indigo lighten-2 ' : 'indigo lighten-1')+' text-xs-center black--text'">
							<div>{{horario.titulo}}</div>
							<v-layout row-sm column child-flex-sm>
								<v-card class="transparent pa-1" v-for="(evento,c) in horario.eventos" :key="c">
									<v-spacer></v-spacer>
									<v-card-text :class="evento.cor + ' ml-1 mr-1'">{{evento.titulo}}</v-card-text>
								</v-card>
							</v-layout>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
			<v-spacer></v-spacer>
		</v-card-row>

		<!-- Legendas -->

		<v-card-text class="indigo darken-3 white--text">
			<v-list>
				<v-list-item v-for="(legenda,index) in legendas" :key="index">
					<v-list-tile>
						<v-list-tile-avatar>
							<v-icon :class="legenda.cor + '--text'">fiber_manual_record</v-icon>
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
export default {
	data(){
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
									cor:'red lighten-1'
								}
							]
						},
						{
							titulo:'09:00 - 10:00',
							eventos:[
								{
									titulo:'Abertura e Homenagem ao Prof. Marcio',
									cor:'green lighten-1'
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Dr. Rodrigo Leonard (Agência Espacial Brasileira) O Programa Espacial Brasileiro',
									cor:'green lighten-1'
								},
								{
									titulo:'1 para computação',
									cor:'green lighten-1'
								}
							]
						},
						{
							titulo:'11:30 - 14:00',
							eventos:[
								{
									titulo:'Intervalo de Almoço',
									cor:'red lighten-1'
								}
							]
						},
						{
							titulo:'14:00 - 17:30',
							eventos:[
								{
									titulo:'Montagem e controle de lego',
									cor:'orange lighten-1'
								},
								{
									titulo:'Astronomia',
									cor:'orange lighten-1'
								}
							]
						},
						{
							titulo:'17:30 - 18:30',
							eventos:[
								{
									titulo:'Intervalo',
									cor:'red lighten-1'
								}
							]
						},
						{
							titulo:'18:30 - 19:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor:'red lighten-1'
								}
							]
						},
						{
							titulo:'19:00 - 22:00',
							eventos:[
								{
									titulo:'Montagem e controle de lego',
									cor:'orange lighten-1'
								},
								{
									titulo:'Astronomia',
									cor:'orange lighten-1'
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
									cor:'red lighten-1'
								}
							]
						},
						{
							titulo:'09:00 - 10:00',
							eventos:[
								{
									titulo:'Roda de licenciatura Professores: Felipe Cabral Demetrius Leão Maria de Fátima Cauê Zaghetto',
									cor:'brown lighten-2'
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Dr. Luiz Ribeiro Física Computacional',
									cor:'green lighten-1'
								},
								{
									titulo:'1 para computação',
									cor:'green lighten-1'
								}
							]
						},
						{
							titulo:'11:30 - 14:00',
							eventos:[
								{
									titulo:'Intervalo de Almoço',
									cor:'red lighten-1'
								}
							]
						},
						{
							titulo:'14:00 - 16:00',
							eventos:[
								{
									titulo:'Dr. Luciano Leal Energia solar',
									cor:'green lighten-1'
								},
								{
									titulo:'1 para computação',
									cor:'green lighten-1'
								}
							]
						},
						{
							titulo:'16:00 - 18:30',
							eventos:[
								{
									titulo:'Apresentação de projetos',
									cor:'purple lighten-2'
								},
								{
									titulo:'Levar nossos brinquedos para os alunos apresentarem',
									cor:'purple lighten-2'
								},
								{
									titulo:'Algum projeto ou banner',
									cor:'purple lighten-2'
								}
							]
						},
						{
							titulo:'18:30 - 19:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor:'red lighten-1'
								}
							]
						},
						{
							titulo:'19:00 - 20:00',
							eventos:[
								{
									titulo:'Palestra Automação',
									cor:'green lighten-1'
								}
							]
						},
						{
							titulo:'20:00 - 22:00',
							eventos:[
								{
									titulo:'Palestras de Encerramento',
									cor:'green lighten-1'
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
									cor:'orange lighten-1'
								}
							]
						}
					]
				}
			],
			legendas: [
				{
					texto:'Palestras',
					cor:'green'
				},
				{
					texto:'Minicursos',
					cor:'orange'
				},
				{
					texto:'Roda de conversa',
					cor:'brown'
				},
				{
					texto:'Projeto',
					cor:'purple'
				},
				{
					texto:'Outro',
					cor:'red'
				}
			]
		}
	}
};
</script>
