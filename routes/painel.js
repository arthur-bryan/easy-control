"use strict";
const express   		= require("express");
const router    		= express.Router();
const objectController	= require("../controllers/object")

router.get("/", objectController.getAll);

module.exports = router;
