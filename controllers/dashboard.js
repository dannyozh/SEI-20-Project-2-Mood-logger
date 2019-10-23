const sha256 = require('js-sha256');
const SALT = 'SEI20 FTW';

module.exports = (db) => {
	/**
   * ===========================================
   * Controller logic
   * ===========================================
   */

	let createDashboard = (request, response) => {
		response.render('dashboard/dashboardcreate');
	};

	let saveFeeling = (request, response) => {
		const userFeelingInfo = request.body;
		let username = request.cookies.username;
		const date = request.body.date;
		const log = request.body.log;
		// inserting into db, db needs to have a user....
		db.userFeeling.saveUserFeeling(userFeelingInfo, username, date, log, (error, result) => {
			if (error) {
				console.log(error);
				response.redirect('/dashboardnew');
			} else {
				console.log('register success!');
			}
		});
	};

	// let createLogs = (request, response) => {
	// 	response.render('dashboard/dashboardlogging');
	// };

	// let saveLogs = (request, response) => {
	// 	const userLogInfo = request.body.log;
	// 	console.log(userLogInfo);
	// 	db.userLog.saveUserLog(userLogInfo, (error, result) => {
	// 		if (error) {
	// 			console.log(error);
	// 			response.redirect('/dashboardlogs');
	// 		} else {
	// 			console.log('log recorded!');
	// 			response.redirect('/dashboardlogging');
	// 		}
	// 	});
	// };

	let locatingCurrentCard = (request, response) => {
		// inserting into db, db needs to have a user....
		db.cardFinder.findFeeling((error, result) => {
			if (error) {
				console.log('the error is', error);
			} else {
				console.log('details retrieved');
			}
		});
	};
	return {
		createDashboard,
		saveFeeling,
		locatingCurrentCard
	};
};
