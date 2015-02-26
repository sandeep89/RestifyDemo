var mysqlConnection = require("./db");

var employee = module.exports;

employee.createEmployee = function(userData, cb){
	//validation check 

	var query = "insert into employee(`name`) values('" + userData.name + "')"; 
	mysqlConnection.getConnection().query(query, function(err, rows){
		if(err){
			return cb(err);
		}
		return cb(err, rows);
	});
}