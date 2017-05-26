<template>
	<v-app class="grey lighten-4">
		<v-navigation-drawer persistent v-model="sidebar" dark :mini-variant.sync="mini">
			<v-list>
				<v-list-item>
					<v-list-tile avatar tag="div">
						<v-list-tile-avatar>
							<img src="img/logo/logo-small.svg" />
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>SC&T</v-list-tile-title>
						</v-list-tile-content>
						<v-list-tile-action>
							<v-btn icon @click.native.stop="mini = !mini" light>
								<v-icon>chevron_left</v-icon>
							</v-btn>
						</v-list-tile-action>
					</v-list-tile>
				</v-list-item>
			</v-list>
			<v-divider light></v-divider>
			<v-list dense>
				<v-list-item @click="scrollTo('#sobre')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<v-icon light>info</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>Sobre</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
				<v-list-item @click="scrollTo('#campus-endereco')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<v-icon light>directions</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>Endereço</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
				<v-list-item @click="scrollTo('#inscricao')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<v-icon light>assignment_ind</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>Inscrições</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
				<v-list-item @click="scrollTo('#campus-mapa')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<v-icon light>location_on</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>Mapa do Campus</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
				<v-list-item @click="scrollTo('#programacao')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<v-icon light>schedule</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>Progamação</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
				<v-list-item @click="scrollTo('#fotos')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<v-icon light>photo_camera</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>Fotos</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
				<v-list-item @click="scrollTo('#contato')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<v-icon light>contact_phone</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>Contato</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<!-- Barra superior -->
		<v-toolbar fixed class="teal darken-2">
			<v-toolbar-side-icon @click.native.stop="sidebar = !sidebar" light></v-toolbar-side-icon>
			<v-toolbar-title>Semana de Ciência e Tecnologia 2017</v-toolbar-title>
		</v-toolbar>

		<main>
			<!-- Index.vue -->
			<index></index>
		</main>

		<!-- Rodapé -->
		<v-footer class="grey darken-2">
			<v-spacer></v-spacer>
			<div>&copy; 2017 SC&T</div>
			<v-spacer></v-spacer>
		</v-footer>

	</v-app>
</template>

<script>
	import $ from 'jquery'
	export default {
		data(){
			return {
				sidebar: true,
				mini: false
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
	@import '../node_modules/vuetify/src/stylus/main'
</style>
