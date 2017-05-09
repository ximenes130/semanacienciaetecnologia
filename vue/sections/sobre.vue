<template>
	<div>
		<v-card>
			<v-card-row class="blue-grey darken-1">
				<v-card-title>
					<span class="white--text">Sobre o evento</span>
				</v-card-title>
			</v-card-row>
				<div id="parallax-bg"></div>
				<v-parallax src="img/logo.png" height="400" >
			</v-card-row>
			</v-parallax>
			<v-card-text class="blue-grey darken-3 white--text">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae posuere sem. Maecenas ut lobortis felis. Ut rutrum condimentum turpis, a consectetur risus hendrerit et.</p>
			</v-card-text>
		</v-card>
	</div>
</template>

<style scoped>
.parallax{
	width: 100%;
     height: 100%;
     background: url("https://img.gifamerica.com/d0921ca808b92e972f04e42f36f1d205_estrelas-estrelas-no-ceu-gif_498-574.gif");
}
#parallax-bg{
    width: 100%;
    height: 400px;
    content: '';
    position: absolute;
    z-index: 1;
    background-image: -moz-linear-gradient(top left, rgba(29, 38, 113, 0.60), rgba(195, 55, 100, 0.60));
    background-image: -ms-linear-gradient(top left, rgba(29, 38, 113, 0.60), rgba(195, 55, 100, 0.60));
    background-image: -webkit-linear-gradient(top left, rgba(29, 38, 113, 0.60), rgba(195, 55, 100, 0.60));
    background-image: -o-linear-gradient(top left, rgba(29, 38, 113, 0.60), rgba(195, 55, 100, 0.60));
    background-image: linear-gradient(to bottom right, rgba(29, 38, 113, 0.60), rgba(195, 55, 100, 0.60));
    background-size: auto;
}
</style>
