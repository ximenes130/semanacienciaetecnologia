<template>
	<div>
		<v-card class="mt-4">
			<v-card-row class="indigo darken-3">
				<v-card-title>
					<span class="white--text">Mapa do campus</span>
				</v-card-title>
			</v-card-row>
			<v-card-row>
				<v-spacer></v-spacer>
				<img src="img/planta.png" class="mapa-img">
				<v-spacer></v-spacer>
			</v-card-row>
			<v-card-row class="indigo">
				<v-card-title>
					<span class="white--text">Legenda</span>
				</v-card-title>
			</v-card-row>
			<v-card-text class="indigo darken-3 white--text">
				<v-list>
					<v-list-item>
						<v-list-tile>
							<v-list-tile-action>
								<v-icon class="green--text">fiber_manual_record</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title class="white--text">Bla Bla Bla</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-item>
					<v-list-item>
						<v-list-tile>
							<v-list-tile-action>
								<v-icon class="yellow--text">fiber_manual_record</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title class="white--text">Bla Bla Bla</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-item>
					<v-list-item>
						<v-list-tile>
							<v-list-tile-action>
								<v-icon class="red--text">fiber_manual_record</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title class="white--text">Bla Bla Bla</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
	</div>
</template>

<style scoped>
	.mapa-img{
		width: 100%;
	}
</style>
