const sha256 = require('js-sha256');
const SALT = 'SEI20 FTW';

module.exports = (db) => {
	/**
   * ===========================================
   * Controller logic
   * ===========================================
   */

	let userRegistration = (request, response) => {
		response.render('register/registerpage');
	};

	let registeredUser = (request, response) => {
		const userRegistrationInfo = request.body;
		let userRegistrationUsername = request.body.username;
		// inserting into db, db needs to have a user....
		db.user.registerUserSuccess(userRegistrationInfo, (error, result) => {
			if (error) {
				console.log(error);
			} else {
				console.log('register success!');
				response.cookie('user_name', userRegistrationUsername);
				response.redirect('/dashboardnew');
			}
		});
	};

	/**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
	return {
		userRegistration,
		registeredUser
	};
};
