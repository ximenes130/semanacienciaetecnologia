<template>
	<div>
		<v-card horizontal class="mt-4">
			<v-card-column>
				<v-card-row actions class="teal darken-2">
					<v-card-title>
						<span class="white--text">Programação</span>
						<v-spacer></v-spacer>
						<v-dialog v-model="modal" class="hidden-md-and-up">
							<v-btn slot="activator" flat class="white--text">
								<v-icon>event</v-icon> {{cdata}}
							</v-btn>
							<v-date-picker v-model="data" :days="days" :months="months" :date-format="format" :no-title="true"></v-date-picker>
						</v-dialog>
					</v-card-title>
				</v-card-row>
				<v-card-row class="teal darken-4 white--text">
					<v-card-row class="hidden-sm-and-down">
						<v-date-picker v-model="data" :days="days" :months="months" :date-format="format" :no-title="true"></v-date-picker>
					</v-card-row>
					<v-card-row height="290px" style="overflow: auto">
						<v-card-text>
							<v-list three-line>
								<v-list-item v-for="(evento, index) in ccronograma" :key="index">
									<v-list-tile>
										<v-list-tile-content class="white--text">
											<v-list-tile-title>
												{{evento.horario}} - {{evento.titulo}}
											</v-list-tile-title>
											<v-list-tile-sub-title>
												{{evento.descricao}}
											</v-list-tile-sub-title>
										</v-list-tile-content>
									</v-list-tile>
									<v-divider light></v-divider>
								</v-list-item>
							</v-list>
						</v-card-text>
					</v-card-row>
				</v-card-row>
			</v-card-column>
		</v-card>
	</div>
</template>

<script>
module.exports = {
	data(){
		return {
			data: new Date("2017-8-10"),
			days: [
				"Domingo",
				"Segunda",
				"Terça",
				"Quarta",
				"Quinta",
				"Sexta",
				"Sábado"
			],
			months: [
				"Janeiro",
				"Fevereiro",
				"Março",
				"Abril",
				"Maio",
				"Junho",
				"Julho",
				"Agosto",
				"Setembro",
				"Outubro",
				"Novembro",
				"Dezembro"
			],
			format(val){
				return new Date(val);
			},
			cronograma,
			modal: false
		}
	},
	computed: {
		cdata(){
			let d = new Date(this.data);
			return `${d.getDate()}/${d.getMonth()+1}`;
		},
		ccronograma(){
			return this.cronograma[this.cdata];
		}
	}
}
</script>
