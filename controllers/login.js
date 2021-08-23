const express               = require("express");
const router                = express.Router();
const bodyParser            = require("body-parser")
const mysql                 = require("mysql");
const path                  = require("path");


let connection = mysql.createConnection({
    host     : "localhost",
    user     : "administrator",
    password : "Admin@123",
    database : "easy_control"
});

router.get("/", function (request, response, next) {
    let data = {
        title: "Easy Control - Login"
    }
    response.render("login.html", data);
    }
);

router.post('/', function (request, response, next) {
    var usuario = request.body.username;
    var senha = request.body.password;
    if (usuario && senha) {
        connection.query("SELECT * FROM contas WHERE usuario = ? AND senha = ?", [usuario, senha], function (error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = usuario;
                response.redirect("painel");
				response.locals.username = usuario;
				next()
			} else {
                response.send("Incorrect Username and/or Password!");
			}
        });
    } else {
        response.send("Preencha todos os campos!");
		response.redirect("painel");
        response.end();
    }
});

router.use(function (err, reqquest, response, next) {
    if (err) {
        console.log(err);
    }
})

module.exports = router;
