var express = require('express');
var BDAgenda = require('../data/agendadb.js'),
	Operation = require('../data/calendar_CRUD.js');
var Router = express.Router();

Router.post('/new', (request, response) => {
	data = {title: request.body.title,
			start: request.body.start,
			end: request.body.end,
			uid: request.session.userLogin._id
		};
	Operation.insert_event(data, (err, result) => {
		if(err){ 
			response.send(err);
		}else{
			response.send(result);
		}
	});
});

Router.get('/all', (request, response) => {
	Operation.get_events(request.session.userLogin._id, (err, result) => {
		if(err){
			response.json(err);
		}else{
			var user_events = [];
			result.forEach(function(item){
				colorEvento = "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
				user_events.push({id: item._id,
								title: item.title,
								start: item.start,
								end: item.end,
								color: colorEvento
							});
			});
			response.json(user_events);
		}
	});
});

Router.post('/update', (request, response) => {
	data = {start: request.body.start, end: request.body.end};
	Operation.update_event(request.body.id, data, (err, result) => {
		if(err){
			response.send(err);
		}else{
			response.send(result);
		}
	});
});

Router.post('/delete/:id', (request, response) => {
	Operation.delete_event(request.body.id, (err, result) => {
		if(err){
			response.send(err);
		}else{
			response.send(result);
		}
	});
});
module.exports = Router;