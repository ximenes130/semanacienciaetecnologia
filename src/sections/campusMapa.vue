<template>
	<div>
		<v-card class="mt-4">
			<v-card-row class="indigo darken-3">
				<v-card-title>
					<span class="white--text">Mapa do campus</span>
				</v-card-title>
			</v-card-row>
			<v-card-row>
				<v-spacer ></v-spacer>
				<v-expansion-panel>
					<v-expansion-panel-content class="indigo white--text" v-for="(mapa,index) in mapas" :key="index">
						<div slot="header" class="white--text"> {{mapa.titulo}}</div>
						<v-card>
							<img :src="mapa.imagem"  class="mapa-img">
						</v-card>
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-spacer></v-spacer>
			</v-card-row>
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
	</div>
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
			mapas: [
				{titulo:'Mapa do campus',      		  imagem:'img/mapas/Mapa teste.png'},
				{titulo:'Salas de aula - Terreo',          imagem:'img/mapas/Mapa teste.png'},
				{titulo:'Salas de aula - 1º Andar',      imagem:'img/mapas/Mapa teste.png'}
			],
			legendas: [
				{texto:'teste 1',				cor:'green'},
				{texto:'teste 2',				cor:'yellow'},
				{texto:'teste 3',				cor:'red'}
			]
		}
	}
};
</script>
