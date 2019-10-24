const sha256 = require('js-sha256');
const SALT = 'SEI20 FTW';

module.exports = (db) => {
	/**
   * ===========================================
   * Controller logic
   * ===========================================
   */

	let landingElements = (request, response) => {
		response.render('landing/landingpage');
	};

	return {
		landingElements
	};
};
