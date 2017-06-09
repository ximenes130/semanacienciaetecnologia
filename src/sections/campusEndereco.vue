<template>
	<v-card horizontal class="mt-4">
		<v-card-row img="img/cards/mapa.png" height="196px" class="hidden-xs-only"></v-card-row>
		<v-card-column>
			<v-card-row>
				<v-card-title class="primary">
					<span class="white--text">Endereço do campus</span>
				</v-card-title>
			</v-card-row>
			<v-card-row >
				<v-card-text class="pb-0">
					<strong>Setor M-Norte QNM 40</strong>
					<div>Taguatinga, Brasília - DF, 72146-050</div><br>
					<v-divider></v-divider>
				</v-card-text>
			</v-card-row>
			<v-card-row>
				<v-btn flat class="secondary--text" @click.native="openUrl('https://www.google.com.br/maps/place/Instituto+Federal+de+Bras%C3%ADlia+Campus+Taguatinga/@-15.7936003,-48.1132566,14.58z/data=!4m5!3m4!1s0x0:0x63a91cbeaf63f89e!8m2!3d-15.7942254!4d-48.1021088');">
					<v-icon left class="secondary--text">directions</v-icon> Ver no mapa
				</v-btn>
			</v-card-row>
		</v-card-column>
	</v-card>
</template>
