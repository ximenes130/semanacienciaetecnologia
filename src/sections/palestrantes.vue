<template>
	<v-card class="mt-4 grey lighten-3">
		<v-card-row class="primary darken-1">
			<v-card-title>
				<span class="white--text">Palestrantes</span>
			</v-card-title>
		</v-card-row>
		<v-container fluid>
			<v-layout row justify-start wrap>
				<v-flex xs12 sm6 md4 v-for="(palestrante, index) in palestrantesF" :key="index">
					<v-card hover @click="openUrl(palestrante.lattes)" class="ma-2">
						<v-card-column class="pa-3">
							<div class="title">{{palestrante.nome}}</div>
							<div class="body-1">{{palestrante.area}}</div>
							<div class="body-2">{{palestrante.local}}</div>
						</v-card-column class="ma-0">
					</v-card>
				</v-flex>
			</v-layout>
		</v-layout>
	</v-container>
</v-card>
</template>

<style scoped>
.desc {
	text-align: justify;
}
#avatar{
	min-width: 50px;
	min-height: 50px;
	background-size: cover;
	background-position: center;
	border-radius: 100%;
}
</style>

<script>
export default {
	data(){
		return{
			palestrantes:[
				{
					nome: 'Luiz Roncaratti',
					local: 'UnB, Università degli Studi di Perugia',
					area: 'Física, Química',
					lattes:'http://lattes.cnpq.br/0859908961302295'
				},
				{
					nome: 'Luciano Leal',
					local: 'UnB',
					area: 'Física',
					lattes:'http://lattes.cnpq.br/0115599236292361'
				},
				{
					nome: 'Rodrigo Leonardi',
					local: 'University of California, INPE, UnB',
					area: 'Matemática, Astrofísica',
					lattes:'http://lattes.cnpq.br/4061600030396747'
				},
				{
					nome: 'Gustavo Morais',
					local: 'Unicamp, Uni. Estácio de Sá',
					area: 'Tecnologia da Informação',
					lattes:'https://br.linkedin.com/in/gustavoamorais'
				},
				{
					nome: 'Daniel Saad',
					local: 'IFB',
					area: 'Ciência da Computação',
					lattes:'http://lattes.cnpq.br/1867062109453099'
				},
				{
					nome: 'Felipe de Leal',
					local: 'UnB',
					area: 'Ciência Política, Ciências Sociais, Física',
					lattes:'http://buscacv.cnpq.br/buscacv/#/espelho?nro_id_cnpq_cp_s=2524007926428412'
				},
				{
					nome: 'Eryc Leão',
					local: 'Coimbra, UnB, IFB',
					area: 'Física, Filosofia',
					lattes:'http://lattes.cnpq.br/1421645250331076'
				},
				{
					nome: 'Demetrius Leão',
					local: 'UnB, UNISESC, UNIPLAN',
					area: 'Física',
					lattes:'http://buscacv.cnpq.br/buscacv/#/espelho?nro_id_cnpq_cp_s=7208834400103455'
				},
				{
					nome: 'Maria de Fátima',
					local: 'UnB, UFRJ, UCB',
					area: 'Ciência da Computação; Psicologia Social, do Trabalho e das Organizações, Processamento de Dados',
					lattes:'http://buscacv.cnpq.br/buscacv/#/espelho?nro_id_cnpq_cp_s=9660588093524652'
				},
				{
					nome: 'Cauê Zaghetto',
					local: 'FAETEC, UFRJ, UCB, UnB',
					area: 'Física, Eletrotécnica, Engenharia Mecatrônica',
					lattes:'http://buscacv.cnpq.br/buscacv/#/espelho?nro_id_cnpq_cp_s=9707057567892387'
				},
				{
					nome: 'Frederico Jordão',
					local: 'IFB, UnB',
					area: 'Física',
					lattes:'http://lattes.cnpq.br/5504527581834900'
				},
				{
					nome: 'Rodrigo Maia',
					local: 'IFB, UnB',
					area: 'Física',
					lattes:'http://lattes.cnpq.br/8188052983150930'
				},
				{
					nome: 'Tiago Castro',
					local: 'UnB',
					area: 'Física',
					lattes:'http://lattes.cnpq.br/4270397222551287'
				}
			]
		}
	},
	computed: {
		palestrantesF(){
			return this.palestrantes.sort((a, b)=>a.area.length - b.area.length);
		}
	}
}
</script>
