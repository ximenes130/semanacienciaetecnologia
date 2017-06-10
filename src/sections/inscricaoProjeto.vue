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
					<v-list>
						<v-list-item><v-list-tile><p>Área de conhecimento: Ciências Exatas e da Terra</p></v-list-tile></v-list-item>
						<v-list-item><v-list-tile><p>Possuir protótipo ou banner impresso no momento de inscrição</p></v-list-tile></v-list-item>
						<v-list-item><v-list-tile><p>Possuir disponibilidade para apresentar seu projeto no dia <strong>13/06/2017</strong> ás 16:30</p></v-list-tile></v-list-item>
						<v-list-item><v-list-tile><p>A pesquisa deverá estar em andamento ou finalizada</p></v-list-tile></v-list-item>
						<v-list-item><v-list-tile><p>Submeter resumo com no mínimo 100 e máximo de 200 palavras</p></v-list-tile></v-list-item>
					</v-list>
					<v-divider></v-divider>
				</v-card-text>
			</v-card-row>
			<v-card-row>
				<v-btn flat class="secondary--text" v-tooltip:top="{ html: 'Inscrições Encerradas' }" @click.native="snackbar = true">
					<v-icon left class="secondary--text">assignment</v-icon> Inscrever Projeto
				</v-btn>
			</v-card-row>
		</v-card-column>
		<v-card-row img="img/cards/projeto.jpg" class="hidden-xs-only" height="500px"></v-card-row>
		<v-snackbar :timeout="timeout" v-model="snackbar">{{ text }}<v-btn light flat @click.native="snackbar = false">Fechar</v-btn></v-snackbar>
	</v-card>

</template>

<script>
export default {
	data(){
		return{
			innerWidth,
			snackbar: false,
			context: 'error',
			mode: '',
			timeout: 6000,
			text: 'Inscrições Encerradas'
		}
	}
}
</script>
