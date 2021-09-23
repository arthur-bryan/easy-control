'use strict';
const express       = require( "express");
const app           = express();
const nunjucks      = require("nunjucks");
const path          = require("path");
const session       = require("express-session");
const bodyParser    = require("body-parser");
const loginRoute    = require("./routes/login");
const painelRoute   = require("./routes/painel");
const authRoute		= require("./routes/auth");
const changeObjStatusRoute	= require("./routes/change-obj-status");
const changeObjNameRoute	= require("./routes/change-obj-name");

let port = 9000;

app.engine("html", nunjucks.render);
app.set("view engine", "html");
app.use(express.static("views/static"));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "secret",
	maxAge: 1000 * 60 * 60
}));

app.use("/", loginRoute);
app.use("/login", loginRoute);
app.use("/painel", painelRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/change/object/status", changeObjStatusRoute);
app.use("/api/v1/change/object/name", changeObjNameRoute);


nunjucks.configure(["views/templates"], {
    autoescape: true,
    cache: false,
    express: app
});

app.listen(port) ;
console.log("App rodando na porta %s...", port);
