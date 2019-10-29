const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {
	// `dbPoolInstance` is accessible within this function scope

	let saveUserFeeling = (userFeelingInfo, username, modifiedDate, log, callback) => {
		console.log(userFeelingInfo);
		console.log('hello models');
		const arrQuery1 = [ username, userFeelingInfo.points, userFeelingInfo.illness, log, modifiedDate ];

		const query1 = `INSERT INTO dailylogs (users_name, mood_level, illness_input, log, date) VALUES($1, $2, $3, $4, $5) RETURNING *`;

		dbPoolInstance.query(query1, arrQuery1, (error, queryResult) => {
			if (error) {
				// invoke callback function with results after query has executed
				callback(error, null);
			} else {
				// invoke callback function with results after query has executed
				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
					console.log('dailylog updated, sans logs');
				}
			}
		});
	};

	return {
		saveUserFeeling
	};
};
