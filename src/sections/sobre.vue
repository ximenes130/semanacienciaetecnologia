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
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae posuere sem. Maecenas ut lobortis felis. Ut rutrum condimentum turpis, a consectetur risus hendrerit et.</p>
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
