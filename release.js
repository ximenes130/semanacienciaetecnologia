const fs = require('fs-extra');
const path = require('path');
const EasyZip = require('easy-zip').EasyZip;
const zip = new EasyZip();

function update(from, to, cb){
	fs.remove(to)
	.then(()=>{
		fs.copy(from, to)
		.then(()=>{
			cb();
		});
	});
}

function updateAll(cb){
	update(path.join(__dirname, 'img'), path.join(__dirname, 'release', 'www', 'img'), ()=>{
		update(path.join(__dirname, 'dist'), path.join(__dirname, 'release', 'www', 'dist'), ()=>{
			update(path.join(__dirname, 'index.html'), path.join(__dirname, 'release', 'www', 'index.html'), ()=>{
				cb();
			});
		});
	});
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
