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

### Como rodar (Node.js instalado)

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

### [Build pronto para deploy com Docker](https://github.com/ximenes130/semanacienciaetecnologia/releases/tag/1.0)

### Criando uma build para deploy
- Baixe o arquivo sct.zip de alguma build
- Extraia ele
- Substitua o conteúdo da pasta www pelo novo conteúdo. Esse novo conteúdo é a pasta dist, img e o arquivo index.html do repositório.
