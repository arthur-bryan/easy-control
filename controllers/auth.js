const express   = require("express");
const router    = express.Router();

router.post("/", function (request, response) {
	let username = request.body.usuario;
	request.session.loggedin = true;
	request.session.username = username;
	response.redirect("painel");
	response.end();
});

module.exports = router;
