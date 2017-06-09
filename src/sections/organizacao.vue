<template>
	<v-card class="mt-4">
		<v-card-row class="teal darken-1">
			<v-card-title>
				<span class="white--text" >Organização</span>

			</v-card-title>
		</v-card-row>
		<v-card-row class="">
			<v-card-text>
				<p>
					A organização deste evento resulta da colaboração de docentes e
					estudantes dos seguintes cursos: Bacharelado em ciência da computação,
					Licenciatura em computação, Licenciatura em Física e Tecnologia em
					Automação Industrial.
				</p>
				<v-divider></v-divider><br/>
				<div>
					<strong>Comissão Cientifica</strong><br/>
					(Todos membros do IFB)<br/><br/>
					Cristiano Silva 			<br/>
					Eryc Leão 						<br/>
					Fabiano Fernandes 		<br/>
					Jonathan Teixeira 		<br/>
					Leonardo Leodido 			<br/>
					Lucas Moreira 				<br/>
					Raimundo Vasconcelos 	<br/>
					Tiago Castro 					<br/>
					Veruska Machado 			<br/>
				</div>
			</v-card-text>

		</v-card-row>
	</v-card>
</template>

<style>
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
			organizadores:[
				{
					nome:'Cristiano Pereira da Silva',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:'http://google.com'
				},
				{
					nome:'Eryc de Oliveira Leão',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Fabiano Fernandes',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Jonathan Teixeira',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Leonardo Leodido',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Lucas Moreira',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Raimundo Vasconcelos',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Tiago Castro',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				},
				{
					nome:'Veruska Machado',
					ies:'IFB campus Taguatinga',
					foto:'',
					lattes:''
				}
			]
		}
	}
}
</script>
