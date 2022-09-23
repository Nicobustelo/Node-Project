let { people } = require('../data');

const getPeople = (req, res) => {
	res.status(200).json({ sucess: true, data: people });
};

const createPerson = (req, res) => {
	const { name } = req.body;
	console.log(req.body);
	if (!name) {
		return res
			.status(400)
			.json({ sucess: false, msg: 'please provide a name' });
	}
	res.status(201).json({ sucess: true, person: name });
};

const createPersonPostman = (req, res) => {
	const { name } = req.body;
	console.log(req.body);
	if (!name) {
		return res
			.status(400)
			.json({ sucess: false, msg: 'please provide a name' });
	}
	res.status(201).json({ sucess: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	console.log(id, name);
	const person = people.find(person => person.id === Number(id));
	if (!person) {
		return res
			.status(404)
			.json({ sucess: false, msg: `No person with ID ${id}` });
	}
	const newPeople = people.map(person => {
		if (person.id === Number(id)) {
			person.name = name;
		}
		return person;
	});
	return res.status(200).json({ sucess: true, data: newPeople });
};

const deletePerson = (req, res) => {
	const { id } = req.params;
	const person = people.find(person => {
		return person.id === Number(id);
	});
	if (!person) {
		return res
			.status(404)
			.json({ sucess: false, msg: `No person with ID ${id}` });
	}
	const newPeople = people.filter(person => {
		return person.id !== Number(id);
	});
	return res.status(200).json({ sucess: true, data: newPeople });
};

module.exports = {
	createPerson,
	createPersonPostman,
	getPeople,
	updatePerson,
	deletePerson,
};
