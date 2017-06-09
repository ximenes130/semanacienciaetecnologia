<template>
	<v-card horizontal class="mt-4">
		<v-card-column>
			<v-card-row class="primary">
				<v-card-title>
					<span class="white--text">Inscrições</span>
				</v-card-title>
			</v-card-row>
			<v-card-row>
				<v-card-text class="pb-0">
					<strong class="title"></strong>
					<div>Aproveite e se inscreva-se agora para garantir seu certificado</div>
					<br/><v-divider></v-divider>
				</v-card-text>
			</v-card-row>
			<v-card-row>
				<v-btn flat class="secondary--text" @click.native="openUrl('https://doity.com.br/semana-de-ciencia-e-tecnologia-2')">
					<v-icon left class="secondary--text">assignment_ind</v-icon>inscrever-se
				</v-btn>
			</v-card-row>
		</v-card-column>
		<v-card-row img="img/cards/inscreva-se.jpg" height="175px" class="hidden-xs-only"></v-card-row>
	</v-card>
</template>

<script>
export default {
	data(){
		return {
			dinscricao: false
		}
	}
};
</script>

<style>
#iframe-inscricao {
	width: 100%;
	height: calc(100vh - 56px);
	border: none;
}
</style>
