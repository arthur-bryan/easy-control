'use strict';
const User = require('../models/user');

exports.authUser = function(request, response) {
	var username = request.body.usuario;
    var password = request.body.senha;

	User.auth(username, password, function(err, result) {
    	if (err) {
        	response.send(err);
        } else {
 			if (result.length > 0) {
            	request.session.loggedin = true;
            	request.session.username = username;
           		response.redirect('/painel');
	        } else {
        		response.redirect('/login');
        	}
		}
        response.end();
    });
};
