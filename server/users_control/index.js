var express = require('express');
var BDAgenda = require('../data/agendadb.js'),
	Operation = require('../data/users_CRUD.js');
var Router = express.Router();

Router.post('/', (request, response) => {
	Operation.get_user({
			user: request.body.user,
			pass: request.body.pass
		},(err, result) => {
			if(err){
				response.send(err);
			}else {
				request.session.login = true;
				request.session.userLogin = result;
				response.send("Validado");
			}
		}
	);
});

Router.get('/out', (request,response) => {
	request.session.destroy(function(err) {
		if(err){
			console.log(err);
		}else {
			response.redirect('/');
		}
	});
});


module.exports = Router;