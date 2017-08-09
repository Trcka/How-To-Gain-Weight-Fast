var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: 'h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'qiuru0akkn86zlz5',
	password: 'dg9agr73a3jeajdr',
	database: 'eatzBurgers'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
