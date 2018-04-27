var mongoose = require('mongoose');  
var usersSchema = new mongoose.Schema({
	nombre: {type: String, required: true},
	user: {type: String, required: true},
	pass: {type: String, required: true},
	nacimiento: {type: Date, default: Date.now}
});
var User = mongoose.model('User', usersSchema);
module.exports = User;