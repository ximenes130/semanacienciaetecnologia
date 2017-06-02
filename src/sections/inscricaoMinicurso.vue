<template>
	<v-card horizontal class="mt-4">
		<v-card-row img="img/cards/inscreva-se.jpg" height="175px"></v-card-row>
		<v-card-column>
			<v-card-row class="primary">
				<v-card-title>
					<span class="white--text">Inscrições de Minicursos</span>
				</v-card-title>
			</v-card-row>
			<v-card-row class="">
				<v-card-text class="pb-0">
					<div>Garanta sua vaga nos Minicursos e Oficinas realizando sua inscrição</div>
					<br/><v-divider></v-divider>
				</v-card-text>
			</v-card-row>
			<v-card-row >
				<v-btn flat class="secondary--text" slot="activator" @click.native="openUrl('https://docs.google.com/forms/d/e/1FAIpQLScuLzLUQ6AeWEpzjyqcazdbkPD84DewL-I3FDrbTSoaon4ujg/viewform?usp=sf_link');">
					<v-icon left class="secondary--text">assignment_ind</v-icon>inscrever-se
					<v-divider></v-divider>
				</v-btn>
			</v-card-row>
		</v-card-column>
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

<script>
export default {
	methods: {
		openUrl(url){
			window.open(url, '_blank');
		}
	}
}
</script>
