// Server start file
var restify = require('restify');
var middleware = require('./lib/middleware');
var logger = require("./logger");

var employee = middleware.employee;

var server = restify.createServer();
server.pre(function(req, res, next){
	req.logger = logger;
	next();
})
server.use(restify.bodyParser());

server.post('/ems/employee', employee.createEmployee);



// Start server code 
server.listen(8080, function() {
  logger.info('%s listening at %s', server.name, server.url);
});