const router = require("express").Router();
const {resolve:r} = require("path");

router.post("/kill", (req, res) =>{
	const code = req?.body?.code;
	if(!code) return res.json({error : "code not given in body !"})
	const killed = process.env.node_kill_code == code;
	if(killed) 
		res.on("finish", ()=>{
			console.log("Server is Dead !")
			process.exit();
		});
	res.json({killed});
})

router.post("/imgD", require("../apps/imgD").post);
router.get("/imgD/dl", require("../apps/imgD").dl);
router.get("/imgD/store", (req, res) => res.json(global.imgD))

// router.get("/imgD", (req,res) => {
// 	res.sendFile(r("src","public", "index.html"));
// })

router.use("/pipe*", require("./pipe"));
router.use((req, res, next) => {
	if(!ar.includes(req.url)) return next();
	if(req.method !== "GET") return next();
	res.sendFile(r("src","public", "index.html"));
})

module.exports = router;
const ar = ['/imgD']