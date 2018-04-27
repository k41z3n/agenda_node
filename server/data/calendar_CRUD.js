var Event = require('./calendar_Model.js');

module.exports.insert_event = function (data, callback) {
	let newEvent = new Event(data);
	
	newEvent.save((err) => {
		if(err) callback(err);
		callback(null,"Evento nuevo guardado");
	});
};

module.exports.get_events = function (iduser, callback) {
	Event.find({uid: iduser}, (err, eventos) => {
		if(err)
			callback(err);

		else {
      		callback(null,eventos);
      	}
	});
};

module.exports.update_event = function (id, data, callback) {
	Event.update({_id: id}, data, (err, result) => {
		if(err) callback(err);
		callback(null,"Evento actualizado correctamente");
	});
};

module.exports.delete_event = function (id, callback) {
	Event.remove({_id: id}, (err) => {
		if(err) callback(err);
		callback(null,"Evento eliminado");
	});
};