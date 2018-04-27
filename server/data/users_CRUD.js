var User = require('./users_Model.js');
module.exports.insert_user = function (callback) {
	let admin = new User({
		nombre: "admin",
		user: 'admin',
		pass:'admin'
	});
	
	admin.save((err) => {
		if(err) callback(err);
		callback(null,"Registro guardado");
	});
};

module.exports.delete_user = function (callback) {	
	User.remove({user: 'admin'}, (err) => {
		if(err) callback(err);
		callback(null,"Registro eliminado");
	});
};

module.exports.get_user = function (data, callback) {
	User.findOne({user: data.user}, (err, user) => {
		if(user){
			if(user.pass === data.pass){
				callback(null,user);
			}else{
				callback('Contraseña incorrecta');
			}
      	}else{
      		callback('Usuario no existe');
      	}
	});
};