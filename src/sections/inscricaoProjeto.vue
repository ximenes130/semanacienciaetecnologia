<template>
	<v-card horizontal class="mt-4">
		<v-card-row img="img/cards/mapa.png" height="175px"></v-card-row>
		<v-card-column>
			<v-card-row class="indigo white--text">
				<v-card-text>
					<strong class="title">Inscrição de Projetos</strong>
					<div class="pt-1">
						Estamos aceitando a submissão de projetos para serem apresentados
						na forma de banners até o dia <strong>99/99/2017</strong>, devendo
						seguir os seguintes requisitos:
					</div>
					<v-layout row-sm column child-flex-sm>
						<v-card class="transparent elevation-0">
							<div class="ml-1 mr-1">
								<div  class="ma-1 pa-2 indigo darken-2">Área de conhecimento: Ciências Exatas e da Terra</div>
								<div  class="ma-1 pa-2 indigo darken-2">Possuir protótipo ou banner impresso no momento de inscrição</div>
							</div>
						</v-card>
						<v-card class="transparent elevation-0">
							<div class="ml-1 mr-1">
								<div  class="ma-1 pa-2 indigo darken-2">A pesquisa deverá estar em andamento ou finalizada</div>
								<div  class="ma-1 indigo darken-2">
									<div class="pa-2">Submeter resumo com no mínimo 100 e máximo de 200 palavras</div>
								</div>
							</div>
						</v-card>
					</v-layout>
				</v-card-text>
			</v-card-row>
			<v-card-row actions class="indigo darken-2">
				<v-layout row-sm column child-flex-sm class="ml-2 mr-2">
					<v-btn flat class="white--text" @click.native="openUrl('http://www.sbpcnet.org.br/portoseguro/arquivos/modelo_resumo.doc');">
						<v-icon left light>file_download</v-icon> Modelo de resumo
					</v-btn>
					<v-btn flat class="white--text" @click.native="openUrl('https://www.google.com.br/maps/place/Instituto+Federal+de+Bras%C3%ADlia+Campus+Taguatinga/@-15.7936003,-48.1132566,14.58z/data=!4m5!3m4!1s0x0:0x63a91cbeaf63f89e!8m2!3d-15.7942254!4d-48.1021088');">
						<v-icon left light>assignment</v-icon> Inscrever Projeto
					</v-btn>
				</v-layout>
			</v-card-row>
		</v-card-column>
	</v-card>
</template>

<script>
export default {
	methods: {
		openUrl(url){
			window.open(url, '_blank');
		}
	}
}
</script>
