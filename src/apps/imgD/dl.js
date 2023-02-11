const Packer = require('zip-stream');

module.exports = async function (req, res) {
	let {token } = req.query;
	if(!token) return res.end("Error : 'token' not given in query !");
	let urls = global.imgD.tokens[token].map(url => global.imgD.urls[url]);
	const zip = new Packer();
	res.header("Content-Type", "application/zip");
	res.header("Content-Disposition", "attachment; filename=imgD"+token+".zip")
	zip.pipe(res);
	for(let url of urls){
		let {imgs, title} = url;
		for(let img of imgs){
			let {src, name} = img;
			let body = (await Fetch(src)).body;
			await add(zip, body, title+"/"+name);
		}
	}
	zip.finish();
}

async function add (zip, file, name) {
	return new Promise(a => {
		zip.entry(file, {name}, a);
	})
}