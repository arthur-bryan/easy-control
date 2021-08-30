const express       = require( "express");
const app           = express();
const nunjucks      = require("nunjucks");
const path          = require("path");
const session       = require("express-session");
const bodyParser    = require("body-parser");
const loginRoute    = require("./controllers/login");
const painelRoute   = require("./controllers/painel");
const authRoute		= require("./controllers/auth");

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
app.use("/auth", authRoute);

nunjucks.configure(["views/templates"], {
    autoescape: true,
    cache: false,
    express: app
});

app.listen(port) ;
console.log("Listening on port %s...", port);
