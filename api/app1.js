let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let edit;
let data;

const fs = require('fs');
var cors = require('cors');
app.use(cors());

let taskx = require('./Use.json');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/data/:id', (req, res) => {
	data = req.params.id;
	console.log(data);
	edit = taskx[data];
	console.log(edit);
	res.redirect('/edit');
});

app.post('/update', (req, res) => {
	taskx[data] = req.body;

	console.log(taskx);

	res.redirect('/');
});

app.get('/edit', (req, res) => {
	res.send(JSON.stringify(edit));
});

app.post('/addtask', (req, res) => {
	//post route for adding new task

	const emp1 = req.body;

	console.log('Empxxxxxx' + emp1 + '\n');

	taskx.push(emp1);

	console.log(taskx);

	fs.writeFileSync('./Use.json', JSON.stringify(taskx));

	res.redirect('/');
});

app.get('/getrec/:id', (req, res) => {
	console.log(req.params.id);
	taskx = taskx.filter((p) => p.id !== req.params.id);
	fs.writeFileSync('./Use.json', JSON.stringify(taskx));
	res.redirect('/');
});

app.get('/', function(req, res, next) {
	res.send(JSON.stringify(taskx));
});

app.listen(9000, () => console.log('server is running on port 9000'));
