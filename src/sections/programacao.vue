<template>
	<v-card class="mt-4">
		<v-card-row class="teal darken-3">
			<v-card-title>
				<span class="white--text">Cronograma</span>
			</v-card-title>
		</v-card-row>

		<!-- Legendas -->

		<v-card-text>
			<v-list dense>
				<v-list-item v-for="(legenda,index) in legendas" :key="index">
					<v-list-tile tag="div">
						<v-list-tile-avatar>
							<v-icon :class="legenda.cor">fiber_manual_record</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>{{legenda.texto}}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
			</v-list>
		</v-card-text>

		<!-- Programação -->

		<v-card-row>
			<v-spacer ></v-spacer>
			<v-expansion-panel class="elevation-0" expand>
				<v-expansion-panel-content ripple class="teal elevation-0 body-2 white--text" v-for="(dia,a) in dias" :key="a">
					<div slot="header" class="white--text" :id="'cronograma-dia-'+a">{{dia.titulo}}</div>
					<v-card v-for="(horario, b) in dia.horarios" :key="b">
						<v-card-text :class="((b % 2 == 0) ? 'lighten-4' : 'lighten-5') + ' teal text-xs-center white--text'">
							<div class="teal--text">{{horario.titulo}}</div>
							<v-layout row-sm column child-flex-sm>
								<v-card class="transparent pa-1" v-for="(evento,c) in horario.eventos" :key="c">
									<v-card-row>
										<v-card-text :class="evento.cor + ' elevation-1 ml-1 mr-1'">
											<div class="body-2">{{evento.titulo}}	</div>
											<v-divider v-if="evento.local"></v-divider>
											<div class="caption">{{evento.local}}	</div>
										</v-card-text>
									</v-card-row>
								</v-card>
							</v-layout>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
			<v-spacer></v-spacer>
		</v-card-row>
	</v-card>
</template>

<style scoped>
.mapa-img{
	max-width: 100%;
	max-height: 500px;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
</style>

<script>
export default {
	data(){
		let corPalestra = 'teal'
		let corMinicurso = 'blue-grey'
		let corRodaConversa = 'brown'
		let corProjetos = 'deep-purple'
		let corOutro = 'red'
		return {
			dias: [
				{
					titulo:'12/06 - Segunda',
					horarios:[
						{
							titulo:'08:30 - 09:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'09:00 - 09:20',
							eventos:[
								{
									titulo:'Abertura e Homenagem ao Prof. Dr. Marcio Augusto de Deus',
									cor: corPalestra,
									local: 'Auditorio'
								}
							]
						},
						{
							titulo:'09:20 - 10:00',
							eventos:[
								{
									titulo:"IEEE - Lídia Ruanny e Luiz Felipe",
									cor: corPalestra,
									local: 'Auditorio'
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Android: Começando do Zero - Lucas Campos',
									cor: corMinicurso,
									local: 'B1-12'
								},
								{
									titulo:'O Programa Espacial Brasileiro - Dr. Rodrigo Leonardi (Agência Espacial Brasileira)',
									cor: corPalestra,
									local: 'Auditorio'
								},
								{
									titulo:'A Interconexão e os riscos da era virtual com o advento do sequestro digital - Edson Rosa dos Santos Júnior',
									cor: corPalestra,
									local: 'Anfiteatro'
								}
							]
						},
						{
							titulo:'11:30 - 14:00',
							eventos:[
								{
									titulo:'Intervalo de Almoço',
									cor: corOutro
								}
							]
						},
						{
							titulo:'14:00 - 17:30',
							eventos:[
								{
									titulo:'Android: Começando do Zero - Lucas Campos',
									cor: corMinicurso,
									local: 'B1-12'
								},
								{
									titulo:'Contando histórias e Ensinando Matemática: Uma Introdução a Teoria dos Grafos - Prof° Cristiano Pereira',
									cor: corMinicurso,
									local: 'B1-5'
								},
								{
									titulo:'EduBOT: Robótica para Educação - Arthur Braga Vidal',
									cor: corMinicurso,
									local: 'B1-11'
								},
								{
									titulo:'Montagem e Controle de Lego - Prof. Rodrigo Maia e Iran Carlos Ribeiro',
									cor: corMinicurso,
									local: 'BT-12'
								},
								{
									titulo:'Modelagem Matemática em Mecânica Usando Sotware Modellus - Prof. Tiago Castro',
									cor: corMinicurso,
									local: 'A1-7'
								},
								{
									titulo:'Construção de Mini Planetário - Prof. Frederico Jordão, Pedro Emanuel, Lucas Aleixo e Ronilson Pires',
									cor: corMinicurso,
									local: 'BT-14'
								}
							]
						},
						{
							titulo:'17:30 - 18:00',
							eventos:[
								{
									titulo:'Intervalo',
									cor: corOutro
								}
							]
						},
						{
							titulo:'18:00 - 19:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'19:00 - 22:00',
							eventos:[
								{
									titulo:'MatLab: Fundamentos - Prof. Cristiano Pereira da Silva',
									cor: corMinicurso,
									local: 'B1-11'
								},
								{
									titulo:'Montagem e Controle de Lego - Prof. Rodrigo Maia e Iran Carlos Ribeiro',
									cor: corMinicurso,
									local: 'BT-12'
								},
								{
									titulo:'Observação do Céu Com o Uso de Telescópios- Prof. Frederico Jordão',
									cor: corMinicurso,
									local: ''
								}
							]
						}
					]
				},
				{
					titulo:'13/06 - Terça',
					horarios:[
						{
							titulo:'08:30 - 09:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'09:00 - 10:30',
							eventos:[
								{
									titulo:'Formação docente: experiência e concepção sobre o ensino de Física e Computação - Prof.Cauê Zaghetto, Prof. Demetrius dos Santos Leão, Prof. Felipe de Lemos Cabral, Prof.Maria de Fátima Ramos Brandão',
									cor: corRodaConversa,
									local: 'Auditorio'
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Laboratório de Fotobiorreatores: Estudo teórico e experimental dos processos respiratórios e fotossintéticos de microorganismos  - Prof. Dr. Luiz Roncaratti',
									cor: corPalestra,
									local: 'Anfiteatro'
								},
								{
									titulo:'Computação Cognitiva - Gustavo A. Angelim Morais (IBM) ',
									cor: corPalestra,
									local: 'Auditorio'
								}
							]
						},
						{
							titulo:'11:30 - 14:00',
							eventos:[
								{
									titulo:'Intervalo de Almoço',
									cor: corOutro,
									local: ''
								}
							]
						},
						{
							titulo:'14:00 - 15:00',
							eventos:[
								{
									titulo:' Introducao Red Hat Passar pelo portifolio de MW e detalhar openshift (e os conceitos de container, devops, PaaS) - Elvis Rocha ',
									cor: corPalestra,
									local: 'Auditorio'
								}
							]
						},
						{
							titulo:'14:00 - 16:00',
							eventos:[
								{
									titulo:'Energia solar - Dr. Luciano Leal',
									cor: corPalestra,
									local: 'Anfiteatro'
								}
							]
						},
						{
						titulo:'',
						cor: corPalestra,
						local: 'Auditorio'
					}
				]
			}*/,
			{
				titulo:'14:00 - 16:00',
				eventos:[
					{
						titulo:'Energia solar - Dr. Luciano Leal',
						cor: corPalestra,
						local: 'Anfiteatro'
					}
				]
			},
			{
				titulo:'16:00 - 16:30',
				eventos:[
					{
						titulo:'Intervalo',
						cor: corOutro
					}
				]
			},
			{
				titulo:'16:30 - 18:00',
				eventos:[
					{
						titulo:'Apresentação de projetos',
						cor: corProjetos,
						local: 'Hall  do Auditorio'
					}
				]
			},
			{
				titulo:'18:30 - 19:00',
				eventos:[
					{
						titulo:'Credenciamento',
						cor: corOutro
					}
				]
			},
			{
				titulo:'19:00 - 19:40',
				eventos:[
					{
						titulo:'IEEE - Lídia Ruanny e Prof. José Oniram ',
						cor: corPalestra,
						local: 'Auditorio'
					}
				]
			},
			{
				titulo:'20:00 - 21:30',
				eventos:[
					{
						titulo:'Retrofit de Robô Industrial - Prof. Me. Juan Sebastian Toquica',
						cor: corPalestra,
						local: 'Auditorio'
					}
				]
			}
		]
	},
	{
		titulo:'14/06 - Quarta',
		horarios:[
			{
				titulo:'08:30 - 09:00',
				eventos:[
					{
						titulo:'Credenciamento',
						cor: corOutro
					}
				]
			},
			{
				titulo:'09:00 - 10:00',
				eventos:[
					{
						titulo:' Big Data - Marco Reis',
						cor: corPalestra,
						local: 'Auditorio'
					}
				]
			},
			{
				titulo:'10:30 - 11:30',
				eventos:[
					{
						titulo:'Estruturas de Dados Sucintas - Prof. Daniel Saad',
						cor: corPalestra,
						local: 'Auditorio'
					}
				]
			},
			{
				titulo:'09:00 - 11:30',
				eventos:[
					{
						titulo:'Construção e Lançamento de Foguetes de propulsão a água - Prof. Eryc Leão ',
						cor: corMinicurso,
						local: 'BT-12'
					}
				]
			},
			{
				titulo:'11:30 - 14:00',
				eventos:[
					{
						titulo:'Intervalo de Almoço',
						cor: corOutro
					}
				]
			},
			{
				titulo:'14:00 - 17:30',
				eventos:[
					{
						titulo:'Algoritime-se: Oficina de Introdução a Algoritmos - Anderson Ferreira, Catarina Melo, Dermevaldo Dias, Raquel Passos',
						cor: corMinicurso,
						local: ''
					}
				]
			},
			{
				titulo:'18:30 - 19:00',
				eventos:[
					{
						titulo:'Credenciamento',
						cor: corOutro
					}
				]
			},
			{
				titulo:'19:00 - 21:30',
				eventos:[
					{
						titulo:'Matlab: programção - Prof° Cristiano Pereira',
						cor: corPalestra,
						local: ''
					}
				]
			}
		]
	}
}
</script>

							titulo:'16:00 - 16:30',
							eventos:[
								{
									titulo:'Intervalo',
									cor: corOutro
								}
							]
						},
						{
							titulo:'16:30 - 18:00',
							eventos:[
								{
									titulo:'Apresentação de projetos',
									cor: corProjetos,
									local: 'Hall  do Auditorio'
								}
							]
						},
						{
							titulo:'18:30 - 19:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'19:00 - 19:40',
							eventos:[
								{
									titulo:'IEEE - Lídia Ruanny e Prof. José Oniram ',
									cor: corPalestra,
									local: 'Auditorio'
								}
							]
						},
						{
							titulo:'20:00 - 21:30',
							eventos:[
								{
									titulo:'Retrofit de Robô Industrial - Prof. Me. Juan Sebastian Toquica',
									cor: corPalestra,
									local: 'Auditorio'
								}
							]
						}
					]
				},
				{
					titulo:'14/06 - Quarta',
					horarios:[
						{
							titulo:'08:30 - 09:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'09:00 - 10:00',
							eventos:[
								{
									titulo:' Big Data - Marco Reis',
									cor: corPalestra,
									local: 'Auditorio'
								}
							]
						},
						{
							titulo:'10:30 - 11:30',
							eventos:[
								{
									titulo:'Estruturas de Dados Sucintas - Prof. Daniel Saad',
									cor: corPalestra,
									local: 'Auditorio'
								}
							]
						},
						{
							titulo:'09:00 - 11:30',
							eventos:[
								{
									titulo:'Construção e Lançamento de Foguetes de propulsão a água - Prof. Eryc Leão ',
									cor: corMinicurso,
									local: 'BT-12'
								}
							]
						},
						{
							titulo:'11:30 - 14:00',
							eventos:[
								{
									titulo:'Intervalo de Almoço',
									cor: corOutro
								}
							]
						},
						{
							titulo:'14:00 - 17:30',
							eventos:[
								{
									titulo:'Algoritime-se: Oficina de Introdução a Algoritmos - Anderson Ferreira, Catarina Melo, Dermevaldo Dias, Raquel Passos',
									cor: corMinicurso,
									local: ''
								}
							]
						},
						{
							titulo:'18:30 - 19:00',
							eventos:[
								{
									titulo:'Credenciamento',
									cor: corOutro
								}
							]
						},
						{
							titulo:'19:00 - 21:30',
							eventos:[
								{
									titulo:'Matlab: programção - Prof° Cristiano Pereira',
									cor: corPalestra,
									local: ''
								}
							]
						}
					]
				}
			],
			legendas: [
				{
					texto:'Palestras',
					cor: corPalestra+'--text'
				},
				{
					texto:'Minicursos',
					cor: corMinicurso+'--text'
				},
				{
					texto:'Roda de conversa',
					cor: corRodaConversa+'--text'
				},
				{
					texto:'Projetos',
					cor: corProjetos+'--text'
				},
				{
					texto:'Outros',
					cor: corOutro+'--text'
				}
			]
		}