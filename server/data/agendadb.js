var mongoose = require('mongoose');
var agendadb = mongoose.connect('mongodb://localhost/agendadb');
module.exports = agendadb;