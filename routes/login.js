"use strict";
const express               = require("express");
const router                = express.Router();

router.get("/", function (request, response, next) {
    response.render("login", {data:{
		title: "Easy Control | Login",
		img: "img/easyimg.jpg"
		}
	});
});

module.exports = router;
