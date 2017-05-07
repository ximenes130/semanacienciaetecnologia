<template>
	<div>
		<v-card class="mt-4">
			<v-card-row class="primary">
				<v-card-title>
					<span class="white--text">Fotos do Evento</span>
				</v-card-title>
			</v-card-row>
			<v-carousel>
				<v-carousel-item v-for="foto in fotos" :src="foto"></v-carousel-item>
			</v-carousel>
		</v-card>
	</div>
</template>

<script>
module.exports = {
	data(){
		return {
			fotos: [
				'img/carousel/1.jpg',
				'img/carousel/2.jpg',
				'img/carousel/3.jpg'
			]
		}
	}
};
</script>
