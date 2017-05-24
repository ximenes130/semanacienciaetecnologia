<template>
	<v-card horizontal class="mt-4">
		<v-card-column class="amber darken-1 white--text">
			<v-card-row height="100px" class="teal white--text">
				<v-card-text>
					<strong>Inscrições Abertas</strong>
					<div>Aproveite e se inscreva-se agora para garantir seu certificado</div>
				</v-card-text>
			</v-card-row>
			<v-card-row actions class="teal darken-2">
				<v-spacer></v-spacer>
				<v-dialog  fullscreen transition="v-dialog-bottom-transition" :overlay="false" v-model="dinscricao">
					<v-btn flat class="white--text" slot="activator">
						<v-icon left light>assignment_ind</v-icon>inscrever-se
					</v-btn>
					<v-card>
						<v-card-row>
							<v-toolbar class="teal darken-2">
								<v-btn icon="icon" @click.native="dinscricao = false" light>
									<v-icon>close</v-icon>
								</v-btn>
								<v-toolbar-title>Settings</v-toolbar-title>
							</v-toolbar>
							<iframe id="iframe-inscricao" src="https://doity.com.br/semana-de-ciencia-e-tecnologia-2/passo1"></iframe>
						</v-card-row>
					</v-card>
				</v-dialog>
			</v-card-row>
		</v-card-column>
		<v-card-row img="img/cards/inscreva-se.jpg" height="175px"></v-card-row>
	</v-card>
</template>

<script>
	export default {
		data(){
			return {
				dinscricao: false
			}
		}
	};
</script>

<style>
	#iframe-inscricao {
		width: 100%;
		height: calc(100vh - 56px);
		border: none;
	}
</style>
