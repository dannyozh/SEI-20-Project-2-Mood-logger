const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {
	// `dbPoolInstance` is accessible within this function scope

	let registerUserSuccess = (userRegistrationInfo, callback) => {
		console.log(userRegistrationInfo);
		console.log('hello models');
		const arrQuery = [ userRegistrationInfo.username ];

		const query = `INSERT INTO users (name) VALUES($1) RETURNING *`;

		dbPoolInstance.query(query, arrQuery, (error, queryResult) => {
			if (error) {
				// invoke callback function with results after query has executed
				callback(error, null);
			} else {
				// invoke callback function with results after query has executed
				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
					console.log('registered user inside DATA BASESESE');
				}
			}
		});
	};

	return {
		registerUserSuccess
	};
};
