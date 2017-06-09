<template>
	<v-card class="mt-4 teal lighten-5">
		<v-card-row class="teal darken-1">
			<v-card-title>
				<span class="white--text">Palestrantes</span>
			</v-card-title>
		</v-card-row>
		<v-container fluid>
			<v-layout row justify-start wrap>
				<v-flex xs12 md6 v-for="(palestrante, index) in palestrantesF" :key="index">
					<v-card class="ma-2">
						<v-card-title class="teal darken-2 white--text">
							<div id="avatar" :style="{'background-image': `url('${palestrante.foto}')`}"></div>&nbsp;
							{{palestrante.nome}}
						</v-card-title>
						<v-card-text class="desc">{{palestrante.descricao | reduzir}}</v-card-text>
						<v-divider></v-divider>
						<v-btn flat @click.native="openUrl(palestrante.lattes)" class="secondary--text">Acessar Lattes</v-btn>
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
					nome: 'Prof. Dr. Luiz Roncaratti',
					descricao: 'Possui graduação e mestrado em Física pela Universidade de Brasília (2003 e 2006), e doutorado em Química pela Università degli Studi di Perugia (2009). Atualmente é Professor Adjunto no Instituto de Física da Universidade de Brasília. Tem experiencia teórica e experimental no estudo das interações intermoleculares, na dinâmica de crescimento de microalgas e instrumentação científica em geral.',
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4779235J5',
					lattes:'http://lattes.cnpq.br/0859908961302295'
				},
				{
					nome: 'Prof. Dr. Luciano Leal',
					descricao: 'Possui graduação em Física pela Universidade de Brasília (2010). Tem experiência na área de Física, com ênfase em Física Atômica e Molecular, com mestrado e doutorado na Área. Atualmente, colabora com os grupos de Física aplicada do Instituto de Física da Universidade de Brasília e também com o grupo de Engenharia de Materiais do Departamento de Engenharia Elétrica da mesma instituição. Atua como professor de Ensino Básico e Tecnológico no Colégio Militar de Brasília, desenvolvendo projetos educacionais pertinentes e levando a tecnologia aprendida na Universidade para o incentivo à pesquisa por parte dos alunos.',
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4430859H0',
					lattes:'http://lattes.cnpq.br/0115599236292361'
				},
				{
					nome: 'Dr. Rodrigo Leonardi',
					descricao: 'Rodrigo Leonardi é graduado em matemática pela Universidade de Brasília (1999) e possui mestrado (2002) e doutorado (2006) em astrofísica pelo Instituto Nacional de Pesquisas Espaciais (INPE). Realizou pós-doutorado (2007-2009) na Universidade da Califórnia em Santa Bárbara (UCSB), EUA. Trabalhou (2009-2010) em uma missão espacial da Agência Espacial Europeia (ESA) no Centro de Pesquisa e Tecnologia da ESA (ESTEC), nos Países Baixos. Foi cientista (2010-2015) no Centro de Astronomia da ESA (ESAC), na Espanha, sendo um dos responsáveis pelo gerenciamento e planejamento das operações científicas do satélite europeu Planck. Na missão Planck, da ESA, participou das campanhas de teste, integração, comissionamento e operações de rotina do satélite. Foi assessor técnico (2015-2016) no Centro de Gestão e Estudos Estratégicos (CGEE), em Brasília. Atualmente, trabalha como tecnologista na Agência Espacial Brasileira (AEB) em Brasília.',
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4766021T7',
					lattes:'http://lattes.cnpq.br/4061600030396747'
				},
				{
					nome: 'Gustavo Morais',
					descricao: 'Bacharel em Ciência da Computação pela Universidade Católica de Pernambuco e Gestão em Tecnologia da Informação pela Universidade Estácio de Sá do Rio de Janeiro. Possui 37 Certificações Oficiais nas tecnologias de Hardware, Virtualização e Cloud Computing. Atualmente trabalha como Technical Specialist IBM Power Systems (Norte / Nordeste e Setor Público Brasília) na IBM Brasil',
					foto:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAK3AAAAJGE4NmQwMWY0LTMzMmUtNDEwNC1hNzVlLWEzNDdlMGM4OGJlMw.jpg',
					lattes:'https://br.linkedin.com/in/gustavoamorais'
				},
				{
					nome: 'Daniel Saad',
					descricao: 'Tem experiência na área de Ciência da Computação, com ênfase em Projeto e Análise de Algoritmos e Teoria da Computação. Atualmente é professor efetivo do Instituto Federal de Educação, Ciência e Tecnologia de Brasília, Campus Taguatinga.',
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4385998P3',
					lattes:'http://lattes.cnpq.br/1867062109453099'
				},
				{
					nome: 'Felipe de Leal',
					descricao: 'Mestre em Ciência Política pelo Programa de Pós-Graduação em Ciência Política da Universidade de Brasília (IPOL/UnB). Graduado em Ciências Sociais e Física (UnB). Professor e diretor de escola da Secretaria de Educação do Distrito Federal. Pesquisa atualmente nas áreas de interesse: sociologia urbana e da violência, participação política e instituições democráticas, juventude e educação.',
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4277454D3&bcv=true',
					lattes:'http://buscacv.cnpq.br/buscacv/#/espelho?nro_id_cnpq_cp_s=2524007926428412'
				},
				{
					nome: 'Eryc Leão',
					descricao: 'Doutorando em ESTUDOS CLÁSSICOS pela Universidade de Coimbra (2014- ), Mestre em FILOSOFIA pela Universidade de Brasília (UnB, 2011-2013), Graduado em FÍSICA (2003-2007) e FILOSOFIA (2007-2010) pela (UnB), tendo concluído um curso neste período de seis semestres de Grego antigo (2008-2010) e, mais recentemente, um curso de latim de 4 semestres (2014-2016), Colaborador da Cátedra UNESCO Archai: as origens do pensamento ocidental. Professor de Física do Instituto Federal de Brasília (IFB). Áreas de interesse: Pré-socráticos, Mito, História da Física, Filosofia e Matemática, Ensino de Física.',
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4218157H4',
					lattes:'http://lattes.cnpq.br/1421645250331076'
				},
				{
					nome: 'Demetrius Leão',
					descricao: 'Possui mestrado profissionalizante em Ensino de Ciências pela Universidade de Brasília, UnB, (Programa de Pós-Graduação em Ensino de Ciências - PPGEC), na área de concentração Ensino de Física, concluído em 2012. Graduou-se na Universidade Católica de Brasília, UCB. Atualmente é coordenador pedagógico na Escola do Serviço Social do Comércio (EDUSESC) e professor de graduação no Centro Universitário Planalto do Distrito Federal (UNIPLAN), ministrando disciplinas de física básica para o curso de Engenharia Civil. Tem experiência na área de Física, com ênfase em Ensino de Física, atuando principalmente nos seguintes temas: planetários, Ensino de Astronomia, recursos instrucionais, movimento celeste, popularização e aprendizagem de Astronomia, educação dialógica (Paulo Freire), epistemologia bachelardiana (Gaston Bachelard) e Aprendizagem Significativa (David Ausubel).',
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4279618D9&bcv=true',
					lattes:'http://buscacv.cnpq.br/buscacv/#/espelho?nro_id_cnpq_cp_s=7208834400103455'
				},
				{
					nome: 'Dr. Maria de Fátima',
					descricao: `Doutora em Psicologia Social, do Trabalho e das Organizações pela Universidade de Brasília (2009), Mestre em Ciência da Computação pela Universidade Federal do Rio Grande do Sul (1984), Especialista em Coach Organizacional pela Newfield Consulting e UCB (2001) e graduada em Processamento de Dados pela UnB (1978). É docente fundadora do Departamento de Ciência da Computação da Universidade de Brasília, onde atua desde 1983. Coordenou a implantação do curso de Bacharelado em Ciência da Computação e do primeiro curso de Licenciatura em Computação no Brasil. Participou da Avaliação do Programa PROINFO (MEC/SEED) e no INEP da implantação do Sistema Nacional de Avaliação da Educação Superior (SINAES). Coordenou a avaliação do Projeto Casa Brasil, ação do governo federal para a inclusão digital e social do MCT/SECIS. Coordena o Programa Rede de Extensão para Inclusão Digital - REID, iniciado em 2010 na UnB. Atuou na produção e oferta de disciplinas para a UAB/UnB e como docente no programa de Mestrado Profissional em Gestão Sustentável de Terras e Povos Indígenas do Centro de Desenvolvimento Sustentável e no Mestrado Profissional em Segurança da Informação do Departamento de Ciência da Computação da UnB. Exerceu a função de Diretora Técnica de Graduação do Decanato de Ensino de Graduação e de Procuradora Institucional da UnB no período de 2013 a 2016. É Coordenadora Técnica do Projeto de Pesquisa MDM - Mídia Digital Multimodal no âmbito do Programa de Cooperação Internacional CAPES - PVE Subprograma 2014 - 3a. Chamada. Atua na área de Educação e Formação Docente em Computação, em especial, na área de convergência da Computação, Comunicação e Informação e nas áreas de Avaliação de Programas Sociais, Informática na Educação, Redes Semânticas e Educação a Distância.`,
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4780774Z7&bcv=true',
					lattes:'http://buscacv.cnpq.br/buscacv/#/espelho?nro_id_cnpq_cp_s=9660588093524652'
				},
				{
					nome: 'Cauê Zaghetto',
					descricao: 'Possui formação técnica em Eletrotécnica (FAETEC), graduação em Física pela UFFRJ, pós graduação em Docência do Ensino Superior e pós-graduação em Ensino da Física Moderna pela Universidade Católica de Brasília e Mestrado em Engenharia Mecatrônica pela Universidade de Brasília. Atualmente trabalha como Professor Substituto da Universidade de Brasília, pesquisador do BiT Group - Grupo de Pesquisas Biométricas da Universidade de Brasília, como pesquisador na área de investigação/perícia Forense Digital pela empresa SL Forense e professor de Ensino Superior da Faculdade Projeção. Tem experiência nas áreas de Eletromagnetismo, Algoritmos/Programação de Computadores, Inteligência Artificial, Visão Computacional, Biometria e Processamento de Imagens, tendo trabalhado na educação por 14 anos como professor e/ou coordenador de cursos de educação básica e ensino superior.',
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4436174U2&bcv=true',
					lattes:'http://buscacv.cnpq.br/buscacv/#/espelho?nro_id_cnpq_cp_s=9707057567892387'
				},
				{
					nome: 'Frederico Jordão',
					descricao: 'Possui graduação em Física pela Universidade de Brasília (2007). Tem experiência na área de Física, com ênfase no Ensino de Física e no Ensino de Astronomia.',
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4634428E0',
					lattes:'http://lattes.cnpq.br/5504527581834900'
				},
				{
					nome: 'Prof. Rodrigo Maia',
					descricao: 'Professor Efetivo do Instituto Federal de Brasília (IFB). Bacharel (2009) e Licenciado (2010) em Física pela Universidade de Brasília. Mestre em Física (2014) e estudante do Programa de Pós-Graduação (Doutorado) do Instituto de Física da Universidade de Brasília. Como docente atua na área de Física lecionando nos cursos de Física, Ciências da Computação e Automação e Controle. Possui estudos relacionados a simulações de sistemas físicos, estado sólido da matéria, caracterização de materiais e eficiência eletrônica em compostos orgânicos.',
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4429302E2',
					lattes:'http://lattes.cnpq.br/8188052983150930'
				},
				{
					nome: 'Tiago Castro',
					descricao: 'Possui graduação em Física (licenciatura e bacharelado) pela Universidade de Brasília (2011) e mestrado em Física pela Universidade de Brasília (2013). Atualmente é aluno da Universidade de Brasília e docente (nível - D302) do Instituto Federal de Brasília. Tem experiência na área de Física, com ênfase em Prop. Óticas e Espectrosc. da Mat. Condens; Outras Inter. da Mat. com Rad. e Part., atuando principalmente nos seguintes temas: nanopartículas de óxido de zinco e de ferritas espinélio, difração de raios-X (DRX), método de Rietveld, espectroscopia Raman e espectroscopia de fotoluminescência.',
					foto:'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4409795Y3',
					lattes:'http://lattes.cnpq.br/4270397222551287'
				}
			]
		}
	},
	computed: {
		palestrantesF(){
			return this.palestrantes.sort((a, b)=>a.descricao.length - b.descricao.length);
		}
	},
	filters: {
		reduzir(val){
			return val.length > 400 ? val.substr(0, 399) + '...' : val;
		}
	}
}
</script>
