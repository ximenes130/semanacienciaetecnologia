<template>
	<v-card horizontal class="mt-4">
		<v-card-column class="amber darken-1 white--text">
			<v-card-row height="100px" class="teal white--text">
				<v-card-text>
					<strong>Programação</strong>
					<div>Veja o cronograma das palestras e oficinas do evento</div>
				</v-card-text>
			</v-card-row>
			<v-card-row actions class="teal darken-2">
				<v-spacer></v-spacer>
				<v-dialog  fullscreen transition="v-dialog-bottom-transition" :overlay="false" v-model="dcalendar">
					<v-btn flat class="white--text" slot="activator">
						<v-icon left light>schedule</v-icon>Ver programação
					</v-btn>
					<v-card>
						<v-card-row>
							<v-toolbar class="teal darken-2">
								<v-btn icon="icon" @click.native="dcalendar = false" light>
									<v-icon>close</v-icon>
								</v-btn>
								<v-toolbar-title>Programação</v-toolbar-title>
							</v-toolbar>
							<iframe id="iframe-calendar" src="https://calendar.google.com/calendar/embed?showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&height=600&wkst=1&hl=pt_BR&bgcolor=%23339999&src=2mo6dkn8pco11p1hlf95534kso%40group.calendar.google.com&color=%23853104&ctz=America%2FSao_Paulo&dates=20170612/20170613" scrolling="no"></iframe>
						</v-card-row>
					</v-card>
				</v-dialog>
			</v-card-row>
		</v-card-column>
		<v-card-row img="img/cards/calendario.jpg" height="175px"></v-card-row>
	</v-card>
</template>

<script>
	export default {
		data(){
			return {
				dcalendar: false
			}
		}
	};
</script>

<style>
	#iframe-calendar {
		width: 100%;
		height: calc(100vh - 56px);
		border: none;
	}
</style>
