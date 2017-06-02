<template>
	<v-card>
		<v-parallax src="img/cards/sobre-bg.jpg" height="264">
			<img src="img/logo/logo.svg" class="logo">
			<v-card-row actions class="headline white--text pl-3 pt-3 pb-3" style="background: rgba(0, 0, 0, .25)">
				Sobre o evento
				<v-spacer></v-spacer>
			</v-card-row>
		</v-parallax>
		<v-card-text>
				<p><strong>Nos dias 12, 13 e 14 de junho</strong>, o  Instituto Federal de
				Brasília (IFB) <em>campus</em> Taguatinga sediará a I Semana de
				Ciência e Tecnologia (SC&T). Nessa oportunidade,  estudantes,
				professores e pesquisadores discutirão  ideias sobres diversos temas
				da Automação,  Física e Computação. Para isso, o evento reunirá
				palestras, oficinas, workshops, rodas de conversas, exposições,
				protótipos de produtos e muito mais.</p>
		</v-card-text>
	</v-card>
</template>

<style>
	.logo{
		width: 500px;
		max-width: calc(100% - 40px);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.parallax__content{
		padding: 0 0 0 0;
	}
</style>
