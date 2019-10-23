module.exports = (app, allModels) => {
	// require the controller

	// register the user
	const registerControllerCallbacks = require('./controllers/register')(allModels);
	app.get('/', registerControllerCallbacks.userRegistration);
	app.post('/register', registerControllerCallbacks.registeredUser);
};
