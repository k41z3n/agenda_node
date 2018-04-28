var agendadb = require('./data/agendadb.js'),
	Operation = require('./data/users_CRUD.js');
	
Operation.delete_user((err, result) => {
	if(err){
		console.log(err);
	}
	console.log(result);
});

Operation.insert_user((err, result) => {
	if(err){
		console.log(err);
	}
	console.log(result);
});