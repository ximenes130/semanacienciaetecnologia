<template>
	<v-card class="mt-4">
		<v-card-row class="teal darken-1">
			<v-card-title>
				<span class="white--text">Contato</span>
			</v-card-title>
		</v-card-row>
		<v-card-text>
			<v-list>
				<v-list-item @click="openUrl('tel:+556121032200')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<v-icon>phone</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>(61) 2103-2200</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
				<v-list-item @click="openUrl('mailto:gmail.com')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<v-icon>mail</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>sct.ifb@gmail.com</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
				<v-list-item @click="openUrl('http://ifb.edu.br')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<v-icon>language</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>http://ifb.edu.br</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
				<v-list-item @click="openUrl('https://www.facebook.com/semanacienciaetecnologia/')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<img src="img/social/facebook.svg">
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>Facebook</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
				<v-list-item @click="openUrl('https://twitter.com/sctifb')">
					<v-list-tile ripple>
						<v-list-tile-avatar>
							<img src="img/social/twitter.svg">
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>Twitter</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
			</v-list>
		</v-card-text>
	</v-card>
</template>
