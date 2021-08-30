const express   = require("express");
const router    = express.Router();

router.get("/", function (request, response, next) {
    let data = {
        title: "Easy Control - Painel"
    };
    if (request.session.loggedin) {
		response.setHeader("Content-Type","text/html")
        response.render("painel.html", data);
		response.end();
    } else {
        response.redirect("/login");
    }
});

router.use(function (err, request, response, next) {
    if (err) {
        console.log(err);
    }
});

module.exports = router;
