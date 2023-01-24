const router = require("express").Router();

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

router.get("/env", (req,res) => {
	res.json(process.env)
})

module.exports = router;