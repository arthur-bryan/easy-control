"use strict";
const mysql		= require("mysql");
const settings  = require("../data/db-settings.json");

var connection = mysql.createConnection(settings);

Object.getAll = function(result) {
    connection.query("SELECT * FROM objects", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Object.updateStatus = function(gpio, status, result) {
    connection.query("UPDATE objects SET status=? WHERE gpio = ?", [status, gpio], function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Object.updateName = function(gpio, name, result) {
    connection.query("UPDATE objects SET name=? WHERE gpio = ?", [name, gpio], function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Object;
