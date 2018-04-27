var mongoose = require('mongoose'),
	User = require('./users_Model');
	
var eventoSchema = new mongoose.Schema({
	title: {type: String, required: true},
	start: {type: String, required: true},
	end: String,
	uid: {type: mongoose.Schema.ObjectId, ref: "user" , required: true}
});
var Event = mongoose.model('evento', eventoSchema);
module.exports = Event;