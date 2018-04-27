var agendadb = require('./data/agendadb.js'),
	Operation = require('./data/users_CRUD.js');
	
Operation.delete_User((err, result) => {
	if(err){
		console.log(err);
	}
	console.log(result);
});

Operation.insert_User((err, result) => {
	if(err){
		console.log(err);
	}
	console.log(result);
});