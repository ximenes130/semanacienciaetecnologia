<template>
	<div>
		<v-card horizontal class="mt-4">
			<v-card-column class="amber darken-1 white--text">
				<v-card-row height="75px" class="brown white--text">
					<v-card-text>
						<strong>Inscrições abertas</strong>
						<div>blablabla</div>
					</v-card-text>
				</v-card-row>
				<v-card-row actions class="brown darken-2">
					<v-spacer></v-spacer>
					<v-dialog  fullscreen transition="v-dialog-bottom-transition" :overlay="false" v-model="dinscricao">
						<v-btn flat class="white--text" slot="activator">
							<v-icon left>assignment_ind</v-icon>inscrever-se
						</v-btn>
						<v-card>
							<v-card-row>
								<v-toolbar>
									<v-btn icon="icon" @click.native="dinscricao = false">
										<v-icon>close</v-icon>
									</v-btn>
									<v-toolbar-title>Settings</v-toolbar-title>
								</v-toolbar>
								<iframe id="iframe-inscricao" src="https://doity.com.br/teste-301/passo1"></iframe>
							</v-card-row>
						</v-card>
					</v-dialog>
				</v-card-row>
			</v-card-column>
			<v-card-row img="img/inscreva-se.jpg" height="125px"></v-card-row>
		</v-card>
	</div>
</template>

<script>
module.exports = {
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
