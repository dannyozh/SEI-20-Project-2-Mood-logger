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
		// inserting into db, db needs to have a user....
		db.user.registerUserSuccess(userRegistrationInfo, (error, result) => {
			if (error) {
				console.log(error);
			} else {
				console.log('register success!');
				let loginCookie = sha256(userRegistrationInfo.username + 'logged' + SALT);
				response.cookie('logged_in', loginCookie);
				response.cookie('username', userRegistrationInfo.username);
				response.cookie('users_id', result[0].id);
				response.redirect('/');
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
