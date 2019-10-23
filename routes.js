module.exports = (app, allModels) => {
	// require the controller

	// register the user
	const registerControllerCallbacks = require('./controllers/register')(allModels);
	app.get('/', registerControllerCallbacks.userRegistration);
	app.post('/register', registerControllerCallbacks.registeredUser);

	// login user
	const loginControllerCallbacks = require('./controllers/login')(allModels);
	app.get('/login', loginControllerCallbacks.userLogin);
	app.post('/loginsuccess', loginControllerCallbacks.userLoginSuccess);

	// user dashboard
	const dashboardControllerCallbacks = require('./controllers/dashboard')(allModels);
	app.get('/dashboardnew', dashboardControllerCallbacks.createDashboard);
	app.post('/dashboardsave', dashboardControllerCallbacks.saveFeeling);
	// app.get('/dashboardlogs', dashboardControllerCallbacks.createLogs);
	// app.post('/logsaved', dashboardControllerCallbacks.saveLogs);
	app.get('/seecurrentcard', dashboardControllerCallbacks.locatingCurrentCard);
};
