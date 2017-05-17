# SComp 2017

Acesse o site em: https://ximenes130.github.io/semanacienciaetecnologia

---

### TO-DOs
- [ ] Sobre
- [ ] Inscrições
- [ ] Programação
- [ ] Mapa do Campus
- [x] Endereço do Campus + Mapa
- [ ] Fotos
     - [ ] Estive no evento
     - [ ] Melhores momentos
     - [ ] compartilhavel
- [ ] Entre em contato

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



## Utilizando Docker

### Obtenha a imagem base NodeJS para Docker:
```
	docker pull node
```

### Para contruir e atualizar a imagem da aplicação:
```
	sudo docker build -t sctnode:v0.1 .
```
### Para Iniciar o container

```
	sudo docker run -d --name sctcontainer -p 8082:8082 sctnode:v0.1
```
