const express = require('express');
const router = express.Router();

const {
	createPerson,
	createPersonPostman,
	getPeople,
	updatePerson,
	deletePerson,
} = require('../controlers/people');

router.get('/', getPeople);

router.post('/', createPerson);

router.post('/postman', createPersonPostman);

router.put('/:id', updatePerson);

router.delete('/:id', deletePerson);

module.exports = router;
