"use strict";
const Object = require("../models/object");
const spawn = require("child_process").spawn;


function set_pin(pin, state) {
    spawn("gpio", ["write", pin, state]);
}

exports.getAll = function(request, response) {
    if (request.session.loggedin) {
        Object.getAll(function(err, objects) {
            if (err) {
                response.send(err);
            } else {
                console.log(objects);
                response.render("painel", {data: {
                    	title: "Easy Control | Painel",
                    	username: request.session.username,
                    	objects: objects
                }});
            }
        });
    } else {
        response.redirect("/login");
    }
};

exports.updateStatus = function(request, response) {
    if (request.session.loggedin) {
		var gpio = request.params.gpio;
        var status = request.params.status;
        Object.updateStatus(gpio, 1 - status, function(err, objects) {
			if (err) {
            	response.send(err);
            } else {
            	set_pin(gpio, 1 - status)
                response.redirect("/painel")
                response.end()
            }
        });
    } else {
        response.redirect("/login");
    }
};

exports.updateName = function(request, response) {
    if (request.session.loggedin) {
        var gpio = request.params.gpio;
        var name = request.params.name;
        Object.updateName(gpio, name, function(err, objects) {
            if (err) {
                response.send(err);
            } else {
                response.redirect("/painel")
                response.end()
            }
        });
    } else {
        response.redirect("/login");
    }
};
