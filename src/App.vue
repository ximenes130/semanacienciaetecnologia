<template>
	<div>
		<v-app top-toolbar left-fixed-sidebar>

			<!-- Barra superior -->

			<header>
				<v-toolbar fixed>
					<v-toolbar-side-icon class="hidden-lg-and-up" @click.native.stop="sidebar = !sidebar"></v-toolbar-side-icon>
					<v-toolbar-title>Semana de Ciência e Tecnologia 2017</v-toolbar-title>
				</v-toolbar>
			</header>
			<main>

				<!-- Barra lateral -->

				<v-sidebar v-model="sidebar" fixed>

					<div class="text-xs-center">
						<br>
						<img src="img/logo-small.svg" class="logo">
						<div class="sidebar-title white--text">SC&T</div>
						<br>
					</div>

					<v-divider light></v-divider>

					<v-list dense>
						<v-list-item @click="scrollTo('#sobre')">
							<v-list-tile ripple>
								<v-list-tile-avatar>
									<v-icon>info</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>Sobre</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
						<v-list-item @click="scrollTo('#campus-endereco')">
							<v-list-tile ripple>
								<v-list-tile-avatar>
									<v-icon>directions</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>Endereço</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
						<v-list-item @click="scrollTo('#inscricao')">
							<v-list-tile ripple>
								<v-list-tile-avatar>
									<v-icon>assignment_ind</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>Inscrições</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
						<v-list-item @click="scrollTo('#campus-mapa')">
							<v-list-tile ripple>
								<v-list-tile-avatar>
									<v-icon>location_on</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>Mapa</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
						<v-list-item @click="scrollTo('#programacao')">
							<v-list-tile ripple>
								<v-list-tile-avatar>
									<v-icon>schedule</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>Progamação</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
						<v-list-item @click="scrollTo('#fotos')">
							<v-list-tile ripple>
								<v-list-tile-avatar>
									<v-icon>photo_camera</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>Fotos</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
						<v-list-item @click="scrollTo('#contato')">
							<v-list-tile ripple>
								<v-list-tile-avatar>
									<v-icon>contact_phone</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>Contato</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
					</v-list>
				</v-sidebar>

				<!-- Index.vue -->
				<v-content class="conteudo">
					<index></index>
				</v-content>

			</main>

			<!-- Rodapé -->

			<v-footer class="mt-3 grey darken-2">
				<div class="text-xs-center">&copy; 2017 SC&T</div>
			</v-footer>
		</v-app>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data(){
			return {
				sidebar: false
			}
		},
		methods: {
			scrollTo(selector){
				$('html, body').animate({
					scrollTop: $(selector).offset().top - 78
				});
				if(innerWidth < 992){
					this.sidebar = false;
				}
			}
		}
	}
</script>

<style lang="stylus">
	@import '../node_modules/vuetify/src/stylus/settings/_colors'

	p{
		font-size: 16px;
		text-align: justify;
	}
	.conteudo{
		margin-top: 64px
	}
	.logo{
		width: 100px
	}
	.sidebar-title {
		font-size: 20px
		font-weight: bold
	}
	$theme := {
		primary: $teal.darken-2
		accent: $red.accent-2
		secondary: $grey.darken-3
		info: $blue.lighten-1
		warning: $amber.darken-2
		error: $red.accent-4
		success: $green.lighten-2
	}

	@import '../node_modules/vuetify/src/stylus/main'
</style>
