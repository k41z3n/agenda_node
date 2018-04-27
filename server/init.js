var bodyParser = require('body-parser'),
	http = require('http'),
	express = require('express'),
	session = require('express-session'),
	users = require('./users_control'),
	calendar = require('./calendar_control');

var PORT = 3000,
	app = express(),
	Server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
	secret: "l4_cl4v3d3_Dr4cul4",
	resave: false,
	saveUninitialized: false
}));

app.use('/login', users);
app.use('/calendar', calendar);

app.use(express.static('client'));
Server.listen(PORT, () => {
	console.log('Server is listening on port: '+PORT);
});