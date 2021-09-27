"use strict";
const express   		= require("express");
const router    		= express.Router();
const userController	= require("../controllers/user");

router.post("/", userController.logoutUser);

module.exports = router;
