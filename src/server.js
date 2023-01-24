const exp = require("express");
const app = exp();
const server = require("http").createServer(app);
const {exec, execSync} = require("child_process");

const {resolve:r, join:j} = require("path")
const port = process.env.PORT || 3000;
const {networkInterfaces} = require("os");
const {router, watcher, logger} = require("./util");

global.j = j;
global.log = console.log;
global.env = (process.env.NODE_ENV||"").toLowerCase() == "production" ? "pro" : "dev"

module.exports = async function (){
  app.use(logger)
  app.use(exp.json())
  app.use(router);
	app.use(exp.static(r("src", "public")))

	server.listen(port, ()=>{
	let ni = networkInterfaces();
    let ms = 15;
    log("Server is onine xD");
    log("  MODE %s : %s", " ".repeat(ms - 4),  env.toUpperCase());
    for (let key in ni)
      ni[key].forEach((item, i) => {
        if (item.family == "IPv4")
          log("  %s %s : http://%s:%i",key," ".repeat(ms - key.length),item.address,port);
      });
    log();
	})
}