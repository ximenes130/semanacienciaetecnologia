<template>
	<v-card horizontal class="mt-4">
		<v-card-column>
			<v-card-row class="primary">
				<v-card-title>
					<span class="white--text">Inscrição de Projetos</span>
				</v-card-title>
			</v-card-row>
			<v-card-row>
				<v-card-text class="pb-0">
					<div class="pt-1 pb-2">
						Estaremos aceitando a submissão de projetos para serem apresentados
						na forma de banners e protótipos do dia <strong>01/06/2017</strong>
						até o dia <strong>05/06/2017</strong>, devendo seguir os seguintes
						requisitos:
					</div>
					<v-list :three-line="innerWidth < 576"	>
						<v-list-item><v-list-tile>- <div>Área de conhecimento: Ciências Exatas e da Terra</div></v-list-tile></v-list-item>
						<v-list-item><v-list-tile>- <div>Possuir protótipo ou banner impresso no momento de inscrição</div></v-list-tile></v-list-item>
						<v-list-item><v-list-tile>- <div>Possuir disponibilidade para apresentar seu projeto no dia <strong>13/06/2017</strong> ás 16:30</div></v-list-tile></v-list-item>
						<v-list-item><v-list-tile>- <div>A pesquisa deverá estar em andamento ou finalizada</div></v-list-tile></v-list-item>
						<v-list-item><v-list-tile>- <div>Submeter resumo com no mínimo 100 e máximo de 200 palavras</div></v-list-tile></v-list-item>
					</v-list>
					<v-divider></v-divider>
				</v-card-text>
			</v-card-row>
			<v-card-row>

				<v-btn flat class="secondary--text" @click.native="openUrl('https://goo.gl/hdl6aK');">
					<v-icon left class="secondary--text">assignment</v-icon> Inscrever Projeto
				</v-btn>
			</v-card-row>
		</v-card-column>
		<v-card-row img="img/cards/projeto.jpg" class="hidden-xs-only" height="500px"></v-card-row>
	</v-card>
</template>

<script>
export default {
	methods: {
		openUrl(url){
			window.open(url, '_blank');
		}
	},
	data(){
		return{
			innerWidth
		}
	}
}
</script>
