module.exports = (app, allModels) => {
	// require the controller

	// landing page
	const landingControllerCallbacks = require('./controllers/landing')(allModels);
	app.get('/', landingControllerCallbacks.landingElements);

	// register the user
	const registerControllerCallbacks = require('./controllers/register')(allModels);
	app.get('/register', registerControllerCallbacks.userRegistration);
	app.post('/registersuccess', registerControllerCallbacks.registeredUser);
	``;
	// login user
	const loginControllerCallbacks = require('./controllers/login')(allModels);
	app.get('/login', loginControllerCallbacks.userLogin);
	app.post('/loginsuccess', loginControllerCallbacks.userLoginSuccess);
	// logout user
	app.get('/logout', loginControllerCallbacks.userLogout);

	// user dashboard
	const dashboardControllerCallbacks = require('./controllers/dashboard')(allModels);
	app.get('/dashboardnew', dashboardControllerCallbacks.createDashboard);
	app.post('/dashboardsave', dashboardControllerCallbacks.saveFeeling);
	// app.get('/dashboardlogs', dashboardControllerCallbacks.createLogs);
	// app.post('/logsaved', dashboardControllerCallbacks.saveLogs);
	app.get('/seecurrentcard', dashboardControllerCallbacks.locatingCurrentCard);

	// user profile
	const profileControllerCallbacks = require('./controllers/profile')(allModels);
	app.get('/profile/:username', profileControllerCallbacks.returnProfile);
};
