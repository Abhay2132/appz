const fs = require("fs");

module.exports = function watcher(dirs, cb) {
	for (let dir of dirs) {
		fs.watch(dir, cb);
		let files = fs.readdirSync(dir);
		for (let file of files) {
			log("watching :", j(dir,file))
			file = j(dir, file);
			let stat = fs.statSync(file);
			let isDir = stat.isDirectory()
			if (isDir) watcher([file], cb);
		}
	}
}