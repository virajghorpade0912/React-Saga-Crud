let data = require('./persons-data.json');

const getAll = () => data;

const getById = (id) => data.filter((person) => person.id !== id);

const update = (id, person) => {
	let _personId = data.findIndex((p) => p.id === id);
	person.id = id;
	data[_personId] = person;
	return person;
};

const deleterecord = (id) => {
	let dataid = data.findIndex((p) => p.id === id);
	console.log('hhhh' + dataid);
	data.splice(dataid, 1);
	return data;
};

const create = (person) => {
	let maxId = Math.max(...data.map((p) => p.id));
	person.id = maxId + 1;
	data.push(person);
	return person;
};

module.exports = {
	getAll,
	getById,
	update,
	create,
	deleterecord
};
