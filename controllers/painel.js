const express   = require("express");
const router    = express.Router();

router.get("/", function (request, response, next) {
    if (request.session.loggedin) {
        response.render("painel", {data: {
			title: "Easy Control | Painel",
			username: request.session.username
		}})
    } else {
        response.redirect("/login");
    }
});

module.exports = router;
