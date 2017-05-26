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
					<div slot="header" class="white--text">{{dia.titulo}}</div>
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
									cor:'red darken-3'
								}
							]
						},
						{
							titulo:'09:00 - 10:00',
							eventos:[
								{
									titulo:'Abertura e Homenagem ao Prof. Marcio',
									cor:'teal darken-2'
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Android',
									cor:'deep-orange'
								},
								{
									titulo:'Dr. Rodrigo Leonard (Agência Espacial Brasileira) O Programa Espacial Brasileiro',
									cor:'teal darken-2'
								},
								{
									titulo:'Aguardando confirmação',
									cor:'teal darken-2'
								}
							]
						},
						{
							titulo:'11:30 - 14:00',
							eventos:[
								{
									titulo:'Intervalo de Almoço',
									cor:'red darken-3'
								}
							]
						},
						{
							titulo:'14:00 - 17:30',
							eventos:[
								{
									titulo:'Android',
									cor:'deep-orange'
								},
								{
									titulo:'"Prof° Cristiano Pereira (titulo a confirmar)"',
									cor:'deep-orange'
								},
								{
									titulo:'"Prof° Didan Junqueira Ribeiro Arduino (titulo a comfirmar)"',
									cor:'deep-orange'
								},
								{
									titulo:'Montagem e controle de lego',
									cor:'deep-orange'
								},
								{
									titulo:'Astronomia',
									cor:'deep-orange'
								}
							]
						},
						{
							titulo:'17:30 - 18:00',
							eventos:[
								{
									titulo:'Intervalo',
									cor:'red darken-3'
								}
							]
						},
						{
							titulo:'18:00 - 19:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor:'red darken-3'
								}
							]
						},
						{
							titulo:'19:00 - 22:00',
							eventos:[
								{
									titulo:'"Prof° Cristiano Pereira (titulo a confirmar)"',
									cor:'deep-orange'
								},
								{
									titulo:'Iran Carlos Ribeiro Prof° Rodrigo Maia Montagem e controle de lego',
									cor:'deep-orange'
								},
								{
									titulo:'Astronomia',
									cor:'deep-orange'
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
									cor:'red darken-3'
								}
							]
						},
						{
							titulo:'09:00 - 10:30',
							eventos:[
								{
									titulo:'Roda de licenciatura (Título a confirmar) Prof°Cauê Zaghetto, Prof° Demetrius dos Santos Leão, Prof° Felipe de Lemos Cabral, ProfªMaria de Fátima Ramos Brandão',
									cor:'brown'
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Dr. Luiz Ribeiro Física Computacional',
									cor:'teal darken-2'
								},
								{
									titulo:'Gustavo A. Angelim Morais (IBM) Computação Cognitiva',
									cor:'teal darken-2'
								}
							]
						},
						{
							titulo:'11:30 - 14:00',
							eventos:[
								{
									titulo:'Intervalo de Almoço',
									cor:'red darken-3'
								}
							]
						},
						{
							titulo:'14:00 - 15:00',
							eventos:[
								{
									titulo:'Red Hat ou IBM (A confimar)',
									cor:'teal darken-2'
								}
							]
						},
						{
							titulo:'15:00 - 16:00',
							eventos:[
								{
									titulo:'Huawei',
									cor:'teal darken-2'
								}
							]
						},
						{
							titulo:'14:00 - 16:00',
							eventos:[
								{
									titulo:'Dr. Luciano Leal Energia solar',
									cor:'teal darken-2'
								}
							]
						},
						{
							titulo:'16:00 - 16:30',
							eventos:[
								{
									titulo:'Intervalo',
									cor:'red darken-3'
								}
							]
						},
						{
							titulo:'16:30 - 18:00',
							eventos:[
								{
									titulo:'Apresentação de projetos',
									cor:'deep-purple'
								}
							]
						},
						{
							titulo:'18:30 - 19:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor:'red darken-3'
								}
							]
						},
						{
							titulo:'19:00 - 20:00',
							eventos:[
								{
									titulo:'Palestra Automação',
									cor:'teal darken-2'
								}
							]
						},
						{
							titulo:'20:00 - 22:00',
							eventos:[
								{
									titulo:'Palestras de Encerramento',
									cor:'teal darken-2'
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
									cor:'deep-orange darken-4'
								}
							]
						}
					]
				}
			],
			legendas: [
				{
					texto:'Palestras',
					cor:'teal--text text--darken-2'
				},
				{
					texto:'Minicursos',
					cor:'deep-orange--text'
				},
				{
					texto:'Roda de conversa',
					cor:'brown--text'
				},
				{
					texto:'Projetos',
					cor:'deep-purple--text'
				},
				{
					texto:'Outro',
					cor:'red--text'
				}
			]
		}
	}
};
</script>
