<template>
	<div>
		<v-container fluid>
			<v-row id="coluna">
				<v-col xs12 md10 offset-md1>
					<sobre id="sobre"></sobre>
					<campus-endereco id="campus-endereco"></campus-endereco>
					<inscricao id="inscricao"></inscricao>
					<campus-mapa id="campus-mapa"></campus-mapa>
					<programacao id="programacao"></programacao>
					<fotos id="fotos"></fotos>
					<contato id="contato"></contato>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<style>
	#coluna{
		max-width: 1065px;
	}
</style>
