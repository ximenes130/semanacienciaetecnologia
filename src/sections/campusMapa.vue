<template>
	<v-card class="mt-4">
		<v-card-row class="primary-dark lighten-2">
			<v-card-title>
				<span class="white--text">Mapa do campus</span>
			</v-card-title>
		</v-card-row>
		<v-card-row>
			<v-expansion-panel class="elevation-0" expand>
				<v-expansion-panel-content class="primary white--text elevation-0" v-for="(mapa,index) in mapas" :key="index">
					<div slot="header" class="primary white--text elevation-0">{{mapa.titulo}}</div>
					<v-card class="pa-2">
						<img :src="mapa.imagem" class="mapa-img">
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-card-row>
	</v-card>
</template>

<style scoped>
.mapa-img{
	max-width: 100%;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
@media screen and (min-width: 992px) {
	.mapa-img{
		max-height: 500px;
	}
}
@media screen and (max-width: 992px) {
	.mapa-img{
		width: 100%;
	}
}
</style>

<script>
export default {
	data(){
		return {
			mapas: [
				{
					titulo:'Campus',
					imagem:'img/mapas/campus.svg'
				},
				{
					titulo:'Salas de aula - Terreo',
					imagem:'img/mapas/terreo.svg'
				},
				{
					titulo:'Salas de aula - 1º andar',
					imagem:'img/mapas/andar-1.svg'
				}
			]
		}
	}
}
</script>
