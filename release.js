const fs = require('fs-extra');
const path = require('path');
const EasyZip = require('easy-zip').EasyZip;
const zip = new EasyZip();

function update(from, to){
	return new Promise((resolve, reject)=>{
		fs.remove(to)
		.then(()=>{
			fs.copy(from, to)
			.then(()=>{
				resolve();
			});
		});
	});
}

async function updateAll(cb){
	await update(path.join(__dirname, 'img'), path.join(__dirname, 'release', 'www', 'img'));
	await update(path.join(__dirname, 'dist'), path.join(__dirname, 'release', 'www', 'dist'));
	await update(path.join(__dirname, 'index.html'), path.join(__dirname, 'release', 'www', 'index.html'));
	cb();
}

fs.ensureDir(path.join(__dirname, 'release', 'www'))
.then(()=>{
	updateAll(()=>{
		zip.zipFolder(path.join(__dirname, 'release'), ()=>{
			zip.writeToFile(path.join(__dirname, 'release.zip'), ()=>{
				console.log('Release concluído!');
			});
		});
	});
});
