const mysql		= require("mysql");
const settings  = require("../data/db-settings.json");

connection = mysql.createConnection(settings);

let output;

const setOutput = (rows) => {
	output = rows;
	console.log(output);
}

function selectObjects() {
	connection.query("SELECT * FROM objects", function(err, rows){
		if(err) {
    		throw err;
		} else {
			setOutput(rows);
		}
	});
}

selectObjects();

module.exports = {

}
