const mime = require("mime")

module.exports = async function (req, res) {
	let {url=false} = req.query;
	if(!url) return res.end("Error : 'url' not defined in query !")
	var err = false;
	const fetch = (await import("node-fetch")).default;

	try{var response = await fetch(url)}
	catch(e){err=e}
	
	if(err) return res.end(`${err.code}\nURL : '${url}'`);
	if(!response.ok) return res.end("Error : Server node-request is not 'OK' !")

	const {body, headers} = response;
	let length = headers.get("Content-Length") || false;
	let type = headers.get("Content-Type") || "octet/stream";
	let cd = "attachment; filename="+pName(url, type);

	res.header("Content-Disposition", cd);
	length && res.header("Content-Length", length);
	res.header("Content-Type", type);

	body.pipe(res)
}

function pName(url,type) {
	let name = url.split("/").at(-1).split("?")[0] || Math.random().toString(36).slice(2);
	let ext = name.split(".").at(-1) || '';
	let m = mime.getExtension(type);
	if( m !== ext) name += '.'+m
	return name;
}