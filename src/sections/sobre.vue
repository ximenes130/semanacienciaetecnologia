<template>
	<div>
		<v-card>
			<v-card-row class="teal darken-1">
				<v-card-title>
					<span class="white--text">Sobre o evento</span>
				</v-card-title>
			</v-card-row>
			<v-parallax src="img/sobre-bg.jpg" height="264">
				<img src="img/logo.svg" class="logo">
			</v-parallax>
			<v-card-text class="teal darken-3 white--text">
				<p>A Semana Acadêmica dos cursos de Computação do Instituto Federal de Educação, Ciência e Tecnologia de Brasília - IFB <strong>(Campus Taguatinga)</strong>, é um evento institucional promovido pela comissão organizadora do Evento e pelo Centro Acadêmico para Computação. A Semana da Computação é um evento acadêmico, sem fins lucrativos, realizado anualmente que visa reunir estudantes, docentes e a comunidade em geral em torno de atividades científicas e culturais. A Semana da Computação acontecerá no Instituto Federal de Brasília - IFB Campus Taguatinga nos dias 12 e 13 de junho de 2017. O evento é uma oportunidade para participar de palestras e minicursos com temas relevantes na área da Computação e áreas afins.</p>
				<p>Em sua terceira edição, a programação conta com palestras que ocorrerão no Auditório do Campus, minicursos que ocorrem em laboratórios especificos, entre outras atividades. Confira na programação maiores informações sobre o evento.</p>
			</v-card-text>
		</v-card>
	</div>
</template>

<style scoped>
	.logo{
		width: 500px;
		max-width: calc(100% - 40px);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}
</style>
