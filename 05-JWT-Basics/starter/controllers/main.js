const login = async (req, res) => {
	res.send('Fake login/register/signup');
};

const dashboard = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100);
	res.status(200).json({
		msg: `Hello John Doe`,
		secret: `Here is you authorized data, your lucky number is ${luckyNumber}`,
	});
};

module.exports = { login, dashboard };
