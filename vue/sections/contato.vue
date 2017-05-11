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
					<v-list-item @click="openUrl('tel:+5561986448736')">
						<v-list-tile>
							<v-list-tile-action>
								<v-icon class="white--text">phone</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title class="white--text">(323) 555-6789</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-item>
					<v-list-item @click="openUrl('mailto:ifb.edu.br')">
						<v-list-tile>
							<v-list-tile-action>
								<v-icon class="white--text">mail</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title class="white--text">aliconnors@example.com</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-item>
					<v-list-item @click="openUrl('http://ifb.edu.br')">
						<v-list-tile>
							<v-list-tile-action>
								<v-icon class="white--text">language</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title class="white--text">http://ifb.edu.br</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
	module.exports = {
		methods: {
			openUrl(url){
				window.open(url, '_blank');
			}
		}
	}
</script>
