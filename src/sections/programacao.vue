<template>
	<v-card class="mt-4">
		<v-card-row class="indigo darken-3">
			<v-card-title>
				<span class="white--text">Mapa do campus</span>
			</v-card-title>
		</v-card-row>

		<!-- Programação -->

		<v-card-row>
			<v-spacer ></v-spacer>
			<v-expansion-panel class="elevation-0">
				<v-expansion-panel-content class="indigo white--text elevation-0" v-for="(dia,a) in dias" :key="a">
					<div slot="header" class="white--text "> {{dia.titulo}}</div>
					<v-card v-for="(horario,b) in dia.horarios" :key="b">
						<v-card-text :class="horario.eventos[0].cor"><div class="white--text">{{horario.titulo}}</div></v-card-text>
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
							titulo:'08:30',
							eventos:[
								{
									titulo:'Credenciamento',
									cor:'red'
								}
							]
						},
						{
							titulo:'09:00 - 09:30',
							eventos:[
								{
									titulo:'Roda de Licenciatura',
									cor:'brown'
								}
							]
						},
					]
				},
				{
					titulo:'13/06 - Terça',
					horarios:[]
				},
				{
					titulo:'14/06 - Quarta',
					horarios:[]
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
					texto:'Outro',
					cor:'red'
				}
			]
		}
	}
};
</script>
