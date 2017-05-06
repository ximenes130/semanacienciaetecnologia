<template>
	<div>
		<v-container>
			<v-row>
				<v-col xs12 xl10 offset-xl1>
					<v-carousel>
						<v-carousel-item v-for="img in carrousel" :src="img"/>
					</v-carousel>
					<br>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae posuere sem. Maecenas ut lobortis felis. Ut rutrum condimentum turpis, a consectetur risus hendrerit et. In at libero a quam pretium auctor. Nullam sed lacus tristique turpis bibendum volutpat nec a ante. Quisque libero sapien, molestie sed aliquet nec, tristique eu augue. Integer a semper tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices dapibus ligula, at ultricies nisl suscipit id. Donec fringilla sem eu libero commodo faucibus eu eu arcu.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae posuere sem. Maecenas ut lobortis felis. Ut rutrum condimentum turpis, a consectetur risus hendrerit et. In at libero a quam pretium auctor. Nullam sed lacus tristique turpis bibendum volutpat nec a ante. Quisque libero sapien, molestie sed aliquet nec, tristique eu augue. Integer a semper tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices dapibus ligula, at ultricies nisl suscipit id. Donec fringilla sem eu libero commodo faucibus eu eu arcu.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae posuere sem. Maecenas ut lobortis felis. Ut rutrum condimentum turpis, a consectetur risus hendrerit et. In at libero a quam pretium auctor. Nullam sed lacus tristique turpis bibendum volutpat nec a ante. Quisque libero sapien, molestie sed aliquet nec, tristique eu augue. Integer a semper tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices dapibus ligula, at ultricies nisl suscipit id. Donec fringilla sem eu libero commodo faucibus eu eu arcu.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae posuere sem. Maecenas ut lobortis felis. Ut rutrum condimentum turpis, a consectetur risus hendrerit et. In at libero a quam pretium auctor. Nullam sed lacus tristique turpis bibendum volutpat nec a ante. Quisque libero sapien, molestie sed aliquet nec, tristique eu augue. Integer a semper tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices dapibus ligula, at ultricies nisl suscipit id. Donec fringilla sem eu libero commodo faucibus eu eu arcu.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae posuere sem. Maecenas ut lobortis felis. Ut rutrum condimentum turpis, a consectetur risus hendrerit et. In at libero a quam pretium auctor. Nullam sed lacus tristique turpis bibendum volutpat nec a ante. Quisque libero sapien, molestie sed aliquet nec, tristique eu augue. Integer a semper tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices dapibus ligula, at ultricies nisl suscipit id. Donec fringilla sem eu libero commodo faucibus eu eu arcu.</p>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
module.exports = {
	data(){
		return {
			carrousel: [
				'img/carrousel/1.jpg',
				'img/carrousel/2.jpg',
				'img/carrousel/3.jpg'
			]
		}
	}
}
</script>
