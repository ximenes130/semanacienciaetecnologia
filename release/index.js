const express = require('express');
const compression = require('compression');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();
app.use(compression());
app.use(serveStatic(path.join(__dirname, 'www')));
app.listen(8082, ()=>{
	console.log('Servidor rodando na porta 8082');
});