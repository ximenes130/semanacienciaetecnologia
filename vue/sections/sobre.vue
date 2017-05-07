<template>
     <div>
		<v-carousel>
			<v-carousel-item v-for="foto in fotos" :src="foto"></v-carousel-item>
		</v-carousel>
		<br>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae posuere sem. Maecenas ut lobortis felis. Ut rutrum condimentum turpis, a consectetur risus hendrerit et. In at libero a quam pretium auctor. Nullam sed lacus tristique turpis bibendum volutpat nec a ante. Quisque libero sapien, molestie sed aliquet nec, tristique eu augue. Integer a semper tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices dapibus ligula, at ultricies nisl suscipit id. Donec fringilla sem eu libero commodo faucibus eu eu arcu.</p>
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
	}
</script>
