const sha256 = require('js-sha256');
const SALT = 'SEI20 FTW';

module.exports = (db) => {
	/**
   * ===========================================
   * Controller logic
   * ===========================================
   */

	let userLogin = (request, response) => {
		response.render('login/loginpage');
	};

	let userLoginSuccess = (request, response) => {
		const userLoginInfo = request.body;
		// inserting into db, db needs to have a user....
		let hashedPassword = sha256(userLoginInfo.password);
		let registeredUsername = request.cookies.username;
		let registeredPassword = request.cookies.password;
		if (userLoginInfo.username === registeredUsername && hashedPassword === registeredPassword) {
			console.log('success!');
			response.send('login success!');
			// db.user.registerUserSuccess(userRegistrationInfo, (error, result) => {
		} else {
			console.log('loginfail');
			response.redirect('/login');
		}
	};

	return {
		userLogin,
		userLoginSuccess
	};
};
