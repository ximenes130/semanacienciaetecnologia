<template>
	<div>
		<v-card>
			<v-card-row class="teal darken-1">
				<v-card-title>
					<span class="white--text">Sobre o evento</span>
				</v-card-title>
			</v-card-row>
			<img src="img/logo.svg" class="logo">
			<v-parallax src="img/sobre-bg.jpg" height="263"> </v-parallax>
		<!--	<v-card-row img="img/sobre-bg.jpg">
				<v-spacer></v-spacer>
				<img src="img/logo.svg" class="logo">
				<v-spacer></v-spacer>
			</v-card-row> -->
			<v-card-text class="teal darken-3 white--text">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae posuere sem. Maecenas ut lobortis felis. Ut rutrum condimentum turpis, a consectetur risus hendrerit et.</p>
			</v-card-text>
		</v-card>
	</div>
</template>

<style scoped>
	.logo{
		position: absolute;
		z-index: 2;
		width: 500px;
		margin: 20px;
		max-width: calc(100% - 40px);
	}
</style>
