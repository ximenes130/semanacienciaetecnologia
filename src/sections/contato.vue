<template>
	<div>
		<v-card class="mt-4">
			<v-card-row class="teal darken-1">
				<v-card-title>
					<span class="white--text">Contato</span>
				</v-card-title>
			</v-card-row>
			<v-card-text class="teal darken-3 white--text">
				<v-list>
					<v-list-item @click="openUrl('tel:+556121032200')">
						<v-list-tile>
							<v-list-tile-avatar>
								<v-icon class="white--text">phone</v-icon>
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title class="white--text">(61) 2103-2200</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-item>
					<v-list-item @click="openUrl('mailto:gmail.com')">
						<v-list-tile>
							<v-list-tile-avatar>
								<v-icon class="white--text">mail</v-icon>
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title class="white--text">sct.ifb@gmail.com</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-item>
					<v-list-item @click="openUrl('http://ifb.edu.br')">
						<v-list-tile>
							<v-list-tile-avatar>
								<v-icon class="white--text">language</v-icon>
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title class="white--text">http://ifb.edu.br</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-item>
					<v-list-item @click="openUrl('https://www.facebook.com/semanacienciaetecnologia/')">
						<v-list-tile>
							<v-list-tile-avatar>
								<img src="img/social/facebook.png">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title class="white--text">Facebook</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-item>
					<v-list-item @click="openUrl('https://twitter.com/sctifb')">
						<v-list-tile>
							<v-list-tile-avatar>
								<img src="img/social/twitter.png">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title class="white--text">Twitter</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
	export default {
		methods: {
			openUrl(url){
				window.open(url, '_blank');
			}
		}
	}
</script>
