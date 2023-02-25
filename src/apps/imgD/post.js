// Scrape images,
// store them in a global object 'imgD' 
//	and gives a token in response to client
const { parse } = require("node-html-parser");
const { createHash } = require('node:crypto');
module.exports = async function(req, res) {
	let { urls } = req.body || {}
	if (!urls) return res.json({ error: "'urls' array not defined in post body !" })
	if (!urls.length) return res.json({ error: "'urls' length is zero !" });
	const hash = createHash('md5');
	hash.update(JSON.stringify(urls));
	const token = hash.digest("hex");
	if (Object.keys(global.imgD.tokens).includes(token)) {
		dlog(global.imgD)
		return res.json(pr(token))
	}
	let n = 0;
	dlog({urls, token})
	for (let url of urls) {
		dlog({url})
		let err;
		try { var response = await global.Fetch(url) } catch (e) {
			err = e
			console.log({ url, e })
		}
		if (err) continue;
		if (!response.ok) {
			dlog("response.ok : ", response.ok )
			continue
		};
		let htm = await response.text();
		// if(global.env == "dev") require("fs").writeFileSync("tmp/"+url, htm);
		let dom = parse(htm);
		if (!dom) {
			dlog("Error : !dom ", {htm})
			continue;
		}
		let imgs = dom.querySelectorAll("img").map((img, i) => imgFilter(img, i, url)).filter(Boolean);
		dlog({imgs})
		let title = dom.querySelector("title").innerHTML
		global.imgD.urls[url] = { imgs, title }
		n += imgs.length;
	}
	global.imgD.tokens[token] = urls;
	return res.json(pr(token));
}

function imgFilter(img, i, url) {
	let src = img.getAttribute("src") || img.getAttribute("data-src");
	if(!src) return false;
	url = url.split("?")[0];
	if (!src.startsWith("http")) src = (url.at(-1) == "/" ? url.slice(0, -1) : url) + src;
	let name = (i + 1 + ". ") + (img.getAttribute("alt") || "image")
	let ext = src.split("/").at(-1).split("?")[0].split(".").at(-1);
	name = name.replace(/[\W]/g, '') || Math.random().toString(36).slice(2);
	name = name + "." + ext;
	return { src, name }
}

function pr(token) { // Token ---> Client Response JSON
	let imgs = 0;
	let urls = global.imgD.tokens[token];
	urls.forEach(url => { imgs += global.imgD?.urls[url]?.imgs?.length || 0 })
	return { imgs, token, pages: urls.length }
}