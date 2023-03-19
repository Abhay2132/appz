global.log = console.log;
global.env = (process.env.NODE_ENV||"").toLowerCase() == "production" ? "pro" : "dev"
global.dlog = env == "dev" ? log : (()=>{})
global.imgD = {urls:{}, tokens:{}}

const exp = require("express");
const app = exp();
const server = require("http").createServer(app);
const {exec, execSync} = require("child_process");
const cors = require("cors");

const {resolve:r, join:j} = require("path")
const port = process.env.PORT || 3000;
const {networkInterfaces} = require("os");
const {router, watcher, logger} = require("./util");

module.exports = async function (){
  global.Fetch = (await import("node-fetch")).default;
  app.use(cors())
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