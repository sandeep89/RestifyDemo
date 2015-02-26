var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'employeedb'
});

connection.connect();

module.exports.getConnection=function(){
	return connection;
};

module.exports.closeConnection=function(){
	connection.end();
};