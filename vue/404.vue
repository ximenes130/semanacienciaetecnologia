<template>
	<div id="container">
		<img src="img/404.jpg" alt="404 Not Found" id="img">
	</div>
</template>

<style scoped>
	#container{
		background-color: black;
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
	}
	#img{
		max-width: 100vw;
		max-height: 100vh;
		position: absolute;
		top: 50vh;
		left: 50vw;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
</style>
