const sha256 = require('js-sha256');
const SALT = 'SEI20 FTW';

module.exports = (db) => {
	let renderProfile = (request, response) => {
		let usercookie = request.cookies.user_name;
		db.findProfile.sourceDetails(usercookie, (error, result) => {
			if (error) {
				console.log(error);
				console.log('error with rendering profile');
			} else {
				console.log('profile successfully rendered!');
				const data = {
					logs: result
				};
				console.log('logs is', data.logs);
			}
		});
	};

	return {
		renderProfile
	};
};
