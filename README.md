# SComp 2017

Acesse o site em: https://ximenes130.github.io/semanacienciaetecnologia

---

### TO-DOs
- [x] Sobre
- [x] Inscrições
- [x] Inscrições de projetos
- [x] Programação
- [x] Mapa do Campus
- [x] Endereço do Campus + Mapa
- [x] Fotos
- [x] Entre em contato
- [x] Criação do "npm start Script" para Deploy

### Como rodar e dar deploy (Node.js instalado)

#### Clonar repositórios e instalar dependências

```sh
git clone https://github.com/ximenes130/semanacienciaetecnologia.git
cd semanacienciaetecnologia
npm install
```

#### Testar aplicação em servidor local

```sh
npm run dev
```

#### Compilar e dar commit

```sh
npm run build
git add .
git commit -m "Descrição"
git push origin master
```

#### Criar build para deploy

```sh
npm run release
```

### Utilizando Docker

- Baixe e extraia o último release
- Para construir e atualizar a imagem da aplicação:
```
	sudo docker build -t sctnode:v0.1 .
```
- Para Iniciar o container:
```
	sudo docker run -d --name sctcontainer -p 8082:8082 sctnode:v0.1
```

### [Build pronto para deploy com Docker](https://github.com/ximenes130/semanacienciaetecnologia/releases)
