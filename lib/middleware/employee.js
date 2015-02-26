var employee = module.exports;

var model = require("../model").employee;

employee.createEmployee = function(req, res, next){
req.logger.info("[middleware]->[employee]->[createEmployee]");

	model.createEmployee(req.body, function(err, rows){
		if(err){
			req.logger.log("error", err.message);
			return res.send(400, "Error occured while createEmployee")
		}
		req.logger.log("debug", rows);
		return res.send(201, rows);
	})
}