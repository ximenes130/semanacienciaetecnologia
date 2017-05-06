<template>
	<div>
		<v-app top-toolbar left-fixed-sidebar>

			<!-- Barra superior -->

			<header>
				<v-toolbar fixed>
					<v-toolbar-side-icon class="hidden-lg-and-up" @click.native.stop="sidebar = !sidebar"></v-toolbar-side-icon>
					<v-toolbar-title>{{titulo}}</v-toolbar-title>
				</v-toolbar>
			</header>
			<main>

				<!-- Barra lateral -->

				<v-sidebar v-model="sidebar" fixed>

					<div class="sidebar-header text-xs-center">
						<img src="img/logo.png" class="logo">
						<div class="sidebar-title white--text">SC&T</div>
						<br>
					</div>

					<v-divider light></v-divider>

					<v-list dense>
						<v-list-item @click="irSobre">
							<v-list-tile>
								<v-list-tile-avatar>
									<v-icon>info</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>Sobre o evento</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
						<v-list-item @click="irLocal">
							<v-list-tile>
								<v-list-tile-avatar>
									<v-icon>directions</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>Como chegar</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
						<v-list-item @click="irProgramacao">
							<v-list-tile>
								<v-list-tile-avatar>
									<v-icon>schedule</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>Programação</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
					</v-list>
				</v-sidebar>

				<!-- Conteúdo das páginas -->
				<v-content id="conteudo">
					<router-view></router-view>
				</v-content>

			</main>

			<!-- Rodapé -->

			<v-footer class="mt-3">
				<div class="text-xs-center">&copy; 2017 SC&T</div>
			</v-footer>
		</v-app>
	</div>
</template>

<script>
module.exports = {
	data(){
		return {
			sidebar: true,
			titulo: 'Sobre o evento'
		}
	},
	methods: {
		irSobre(){
			this.titulo = 'Sobre o evento';
			this.$router.push('/sobre');
		},
		irLocal(){
			this.titulo = 'Como chegar';
			this.$router.push('/local');
		},
		irProgramacao(){
			this.titulo = 'Programação';
			this.$router.push('/programacao');
		},
	}
}
</script>

<style scoped>
	#conteudo{
		margin-top: 64px;
	}
	.logo{
		width: 100px;
		height: 100px;
	}
	.sidebar-title {
		font-size: 20px;
		font-weight: bold;
	}
</style>
