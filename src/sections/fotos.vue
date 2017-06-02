<template>
	<v-card class="mt-4">
		<v-card-row class="primary">
			<v-card-title>
				<span class="white--text">Fotos do Evento</span>
			</v-card-title>
		</v-card-row>
		<v-carousel :cycle="false">
			<v-carousel-item v-for="(foto, index) in fotos" :src="foto" :key="index"></v-carousel-item>
		</v-carousel>
	</v-card>
</template>

<script>
	export default {
		data(){
			return {
				fotos: [
					'img/carousel/1.jpg',
					'img/carousel/2.jpg',
					'img/carousel/3.jpg',
					'img/carousel/4.jpg',
					'img/carousel/5.jpg'
				]
			}
		}
	};
</script>
