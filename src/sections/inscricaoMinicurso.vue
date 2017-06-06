<template>
	<v-card horizontal class="mt-4">
		<!--<v-card-row img="img/cards/inscreva-se.jpg" height="175px" class="hidden-xs-only"></v-card-row>       -->
		<v-card-column>
			<v-card-row class="primary">
				<v-card-title>
					<span class="white--text">Inscrições de Minicursos</span>
				</v-card-title>
			</v-card-row>
			<v-card-row class="">
				<v-card-text class="pb-0">
					<v-list subheader>
						<v-subheader inset>Minicursos Disponíveis</v-subheader>
						<v-list-item  v-for="(minicurso, i) in minicursos" v-bind:key="i">
							<v-dialog scrollable width="75%" v-model="dialog1" style="width:100%">
								<v-list-tile ripple slot="activator">
									<v-list-tile-avatar><v-icon class="grey--text text--lighten-1">info</v-icon></v-list-tile-avatar>
									<v-list-tile-content>
										<v-list-tile-title>{{minicurso.titulo}}</v-list-tile-title>
										<v-list-tile-sub-title>{{minicurso.horario}}</v-list-tile-sub-title>
									</v-list-tile-content>
								</v-list-tile>
								<v-card>
									<v-card-row>
										<v-card-title class="pb-0">{{minicurso.titulo}}</v-card-title>
									</v-card-row>
									<v-card-row>
										<v-card-text class="caption">{{minicurso.professor}}</v-card-text>
										<v-card-text class="caption">{{minicurso.horario}}</v-card-text>
									</v-card-row>
									<v-divider></v-divider>
									<v-card-row height="200px">
										<v-card-text>{{minicurso.descricao}}</v-card-text>
									</v-card-row>
									<v-card-row actions>
										<v-btn class="secondary--text darken-1" flat="flat" @click.native="dialog = false">Fechar</v-btn>
									</v-card-row>
								</v-card>
							</v-dialog>
							<v-divider inset v-show="minicursos.length-1 != i"></v-divider>
						</v-list-item>
					</v-list>
					<br/><v-divider></v-divider>
				</v-card-text>
			</v-card-row>
			<v-card-row >
				<v-btn flat class="secondary--text" slot="activator" @click.native="openUrl('https://docs.google.com/forms/d/e/1FAIpQLScuLzLUQ6AeWEpzjyqcazdbkPD84DewL-I3FDrbTSoaon4ujg/viewform?usp=sf_link');">
					<v-icon left class="secondary--text">assignment_ind</v-icon>inscrever-se
					<v-divider></v-divider>
				</v-btn>
			</v-card-row>
		</v-card-column>
	</v-card>
</template>

<style>
#iframe-inscricao {
	width: 100%;
	height: calc(100vh - 56px);
	border: none;
}
</style>

<script>
export default {
	methods: {
		openUrl(url){
			window.open(url, '_blank');
		}
	},
	data(){
		return {
			dialog: false,
			minicursos: [
				{
					titulo:'Montagem e Controle de Lego',
					professor:'Prof. Rodrigo Maia e Iran Carlos Ribeiro',
					horario:'(Seg)14:00-17:30',
					descricao:'O Lego Mindstorms é um conjunto robótico desenvolvido pela Lego Group, composto por peças educacionais, controladores, motores e sensores, que associados a linguagem LOGO é utilizado como recurso pedagógico no desenvolvimento de conceitos de Física, Matemática, Robótica e Programação. Nesse contexto, essa oficina tem o objetivo de demonstrar o funcionamento dessa ferramenta educacional apresentando conceitos básicos de Lógica e Programação associados à Mecânica.'
				},
				{
					titulo:'Modelagem matemática em mecânica usando software Modellus',
					professor:'Prof. Tiago Castro',
					horario:'(Seg)14:00-17:30',
					descricao:'O Modellus é um software que permite a professores e estudantes de Física a execução de experimentos conceituais e interativos utilizando modelos matemáticos e animações. Nesta oficina, mostrarei as funcionalidades básicas do Modellus para a modelagem de problemas em mecânica clássica. Os participantes da oficina terão acesso a computadores para execução das simulações no decorrer da apresentação, de forma que todos terão oportunidade de interagir com as ferramentas básicas do software.'
				},
				{
					titulo:'Construção de mini-planetário',
					professor:'Prof. Frederico Jordão, Pedro Emanuel, Lucas Aleixo e Ronilson Pires',
					horario:'(Seg)14:00-17:30',
					descricao:'O objetivo da oficina é, utilizando materiais de baixo custo, construir um mini-planetário capaz de projetar as constelações do céu noturno em um anteparo. Os participantes receberão o material e orientações necessárias para que possam construí-lo e utilizá-lo corretamente. Além disso alguns conceitos básicos de astronomia serão abordados ao longo da oficina para melhor compreensão e orientação na esfera celeste.'
				},
				{
					titulo:'Contando Histórias e Ensinando Matemática - Uma Introdução à Teoria dos Grafos',
					professor:'Prof° Cristiano Pereira',
					horario:'(Seg)14:00-17:30',
					descricao:'O Problema das Setes Pontes de Konigsberg - Será contada a história do problema das Sete Pontes de Konigsberg e apresentados exemplos de atividades que podem ser desenvolvidas no ensino básico e inicio do superior a partir da discussão do Trabalho Solutio Problematis ad Geometriam Situs Pertinentis do matemático alemão Leonard Euler onde ele discute o problema'
				},
				{
					titulo:'MatLab - Fundamentos',
					professor:'Prof. Cristiano Pereira da Silva',
					horario:'(Seg)19:00-22:00',
					descricao:''
				},
				{
					titulo:'Android: Começando do Zero',
					professor:'Lucas Campos',
					horario:'(Seg)10:30-11:30 ; (Seg)14:00-17:30',
					descricao:''
				},
				{
					titulo:'EduBOT',
					professor:'Arthur Braga Vidal',
					horario:'(Seg)14:00-17:30',
					descricao:'Este minicurso se trata da inclusão do ensino de robótica nas escolas usando o robô sparki, ferramenta de fácil uso que utiliza os princípios básicos da programação. Assim desperta no aluno a criatividade em conjunto ao ensino computadorizado. O minicurso terá exposição prática de alguns códigos e funções desenvolvidas pelo robô, contando com algumas aulas introdutórias de programação. Ao final os participantes serão capazes de desenvolver códigos simples de funções desenvolvidas pelo robô'
				},
				{
					titulo:'Observação do Céu Com o Uso de Telescópios',
					professor:'Prof. Frederico Jordão',
					horario:'(Seg)19:00-22:00',
					descricao:''
				},
				{
					titulo:'Construção e Lançamento de Foguetes de propulsão a água',
					professor:'Prof. Eryc Leão',
					horario:'(Qua)09:00-11:30',
					descricao:'O propósito desta oficina é montar alguns modelos de foguete de propulsão a água utilizando garrafas PET e lançar os mesmos para observar o fenômeno do lançamento de projéteis. A ideia é que o participante reflita sobre as questões e conceitos relacionados à aerodinâmica, simetria, deslocamento, velocidade, aceleração, atrito, pressão e, de forma lúdica, faça experimentos baseados em suas hipóteses. Espera-se que ela possa servir como instrumento capaz de despertar maior interesse dos participantes pela física e suas tecnologias.'
				},
				{
					titulo:'Algoritime-se: Oficina de Introdução a Algoritmos ',
					professor:'Anderson Ferreira, Catarina Melo, Dermevaldo Dias, Raquel Passos',
					horario:'(Qua)14:00-17:30',
					descricao:''
				}
			]
		}
	}
}
</script>
