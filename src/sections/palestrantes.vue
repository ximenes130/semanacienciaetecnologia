<template>
	<v-card class="mt-4 indigo darken-3">
		<v-card-row class="indigo darken-1">
			<v-card-title>
				<span class="white--text" >Comissão Científica</span>

			</v-card-title>
		</v-card-row>
			<v-card-row class="indigo darken-1">
				<v-card-text>
					Assim damos menos margem. Do contrário, da a impressão que essa comissão seria permanente e válida para todo o IFB, e não que os componentes são todos de casa, do IFB. Seria mais fácil colocar uma referência após o nome. Mas ficaria estranho, já que não há nenhum membro externo pra contrapor...
					De qualquer forma, faz aí e eu mostro a todos e se alguém chiar a gente muda	
				</v-card-text>
			</v-card-row>
		<v-container fluid>
			<v-layout row justify-start wrap>
				<v-flex xs12 md6 v-for="(organizador, index) in organizadores" :key="index">
					<v-card class="indigo ma-2"   >

						<v-card-title class="indigo darken-2 white--text">
							{{organizador.nome}}
							<v-spacer></v-spacer>
							<div id="avatar" style="background-image: url('img/cards/projeto.jpg')"></div>&nbsp;
						</v-card-title>
						<v-card-text class="white--text">{{organizador.ies}}
						</v-card-text>
						<v-btn flat block light  @click.native="openUrl(organizador.lattes)">Acessar &nbsp; Lattes</v-btn>
					</v-card>
				</v-flex>
			</v-layout>
		</v-layout>
	</v-container>
</v-card>
</template>

<style>
#avatar{
	min-width: 50px;
	min-height: 50px;
	background-size: cover;
	background-position: center;
	border-radius: 100%;
}
</style>

<script>
export default {
	methods: {
		openUrl(url){
			window.open(url, '_blank');
		}
	},
	data(){
		return{
			organizadores:[
				{
					nome:'Cristiano Pereira da Silva',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:'http://google.com'
				},
				{
					nome:'Eryc de Oliveira Leão',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Fabiano Fernandes',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Jonathan Teixeira',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Leonardo Leodido',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Lucas Moreira',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Raimundo Vasconcelos',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Tiago Castro',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Veruska Machado',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				}
			]
		}
	}
}
</script>
