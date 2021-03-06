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
		let userLoginName = request.body.username;
		console.log(userLoginInfo);
		// inserting into db, db needs to have a user....
		// let hashedPassword = sha256(userLoginInfo.password);
		// let registeredUsername = request.cookies.username;
		// let registeredPassword = request.cookies.password;
		// let newUserAuth;
		// let authPassword = sha256('abc');
		db.authUser.userVer(userLoginInfo, (error, result) => {
			let hashedPassword = sha256(userLoginInfo.password);
			if (error) {
				console.log(error);
				console.log('are we in error?');
				response.redirect('/login');
			} else if (result === null) {
				console.log('user entered in nonsense');
				response.redirect('/login');
			} else if (userLoginInfo.username === result[0].name && hashedPassword === result[0].password) {
				console.log('this is result', result);
				console.log('login for second time');
				response.cookie('user_name', userLoginName);
				const data = {
					username: result[0].name
				};
				response.redirect('profile/:username');
			} else {
				response.redirect('/login');
			}
		});
	};

	let userLogout = (request, response) => {
		response.clearCookie('user_name');
		response.redirect('/login');
	};

	return {
		userLogin,
		userLoginSuccess,
		userLogout
	};
};
