"use strict";
const mysql		= require("mysql");
const settings  = require("../data/db-settings.json");

var connection = mysql.createConnection(settings);

Object.auth = function(username, password, result) {
	connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Object;
