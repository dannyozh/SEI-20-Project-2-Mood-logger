const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {
	// `dbPoolInstance` is accessible within this function scope

	let registerUserSuccess = (userRegistrationInfo, callback) => {
		console.log(userRegistrationInfo);
		console.log('hello models');
		let hashedPassword = sha256(userRegistrationInfo.password);
		const arrQuery = [ userRegistrationInfo.username, hashedPassword ];

		const query = `INSERT INTO users (name, password) VALUES($1, $2) RETURNING *`;

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
