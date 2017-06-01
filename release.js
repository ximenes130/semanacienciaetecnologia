const fs = require('fs-extra');
const path = require('path');

function update(from, to){
	fs.remove(to)
	.then(()=>{
		fs.copy(from, to)
		.catch((err)=>{
			throw err;
		});
	})
	.catch((err)=>{
		throw err;
	});
}

fs.ensureDir(path.join(__dirname, 'release', 'www'))
.then(()=>{
	update(path.join(__dirname, 'img'), path.join(__dirname, 'release', 'www', 'img'));
	update(path.join(__dirname, 'dist'), path.join(__dirname, 'release', 'www', 'dist'));
	update(path.join(__dirname, 'index.html'), path.join(__dirname, 'release', 'www', 'index.html'));
})
.catch((err)=>{
	throw err;
});