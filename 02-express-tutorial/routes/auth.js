const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(200).send('WELCOME ' + name);
	}
	return res.status(401).send('PLEASE PROVIDE CREDENTIALS');
});

module.exports = router;
