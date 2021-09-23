"use strict";
const express			= require("express");
const router			= express.Router();
const objectController	= require("../controllers/object");

router.get("/:gpio/:name", objectController.updateName);

module.exports = router;
