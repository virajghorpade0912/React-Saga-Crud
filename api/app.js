const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/persons/:id', (req, res) => {
	console.log('persons get by id invoked');
	console.log(+req.params.id);
	res.send(db.deleterecord(+req.params.id));
});

app.get('/persons', (req, res) => {
	console.log('persons get all invoked');
	res.send(db.getAll());
});

app.post('/persons/:id', (req, res) => {
	console.log('persons update invoked', req.params.id, +req.params.id);
	let _person = req.body;
	let _uperson = db.update(+req.params.id, _person);
	res.send(_uperson);
});

app.post('/persons', (req, res) => {
	console.log('persons create invoked');
	let _person = req.body;
	let _iperson = db.create(_person);
	res.send(_iperson);
});

app.listen(9000, () => console.log('server is running on port 9000'));

// app.post('/data', (req, res) => {
// 	const data = req.body;
// 	console.log(data);
// 	edit = data;
// 	// taskx.forEach((val) => {
// 	// 	if (val.id === data.id) {
// 	// 		console.log(true);
// 	// 		val.id = 100;
// 	// 		val.first_name = 'Virat';
// 	// 		val.last_name = 'Kohli';
// 	// 	}
// 	// });
// 	// console.log(taskx);

// 	res.redirect('/edit');
// });

// app.post('/update', (req, res) => {
// 	const val1 = req.body;
// 	taskx.forEach((val) => {
// 		if (val.id === val1.id) {
// 			val.id = val1.id;
// 			val.first_name = val1.first_name;
// 			val.last_name = val1.last_name;
// 		}
// 	});
// 	console.log(taskx);

// 	res.redirect('/');
// });

// app.get('/edit', (req, res) => {
// 	res.send(JSON.stringify(edit));
// });

// app.post('/addtask', (req, res) => {
// 	//post route for adding new task

// 	const emp1 = req.body;
// 	//const emp2 = JSON.parse(req.body);

// 	console.log('Empxxxxxx' + emp1 + '\n');

// 	taskx.push(emp1); //add the new task from the post route

// 	console.log(taskx);

// 	//console.log(JSON.stringify(taskx));
// 	fs.writeFileSync('./Use.json', JSON.stringify(taskx));

// 	//Email.push(em);
// 	res.redirect('/');
// });

// app.post('/removetask', (req, res) => {
// 	//post route for move task to completed
// 	const data = req.body;

// 	console.log('->>>' + data.id);

// 	taskx = taskx.filter((p) => p.id !== data.id);

// 	fs.writeFileSync('./Use.json', JSON.stringify(taskx));
// 	res.redirect('/');
// });

// // app.get('/addtask', (req, res) => {
// // 	//post route for adding new task

// // 	var emp = req.body;
// // 	console.log('Emp' + emp);

// // 	taskx.push(emp); //add the new task from the post route

// // 	console.log(taskx);

// // 	fs.writeFileSync('./Use.json', JSON.stringify(taskx));

// // 	//Email.push(em);
// // 	res.redirect('/');
// // });

// //app.use(express.static("public"));

// //render the ejs and display added task, completed task
// app.get('/', function(req, res, next) {
// 	res.send(JSON.stringify(taskx));
// });

// app.get('/db', function(req, res, next) {
// 	res.send(JSON.stringify(taskx1));
// });
