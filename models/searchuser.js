const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {
	// `dbPoolInstance` is accessible within this function scope

	let userVer = (userLoginInfo, callback) => {
		console.log('hello models');
		const username = [ userLoginInfo.username ];
		console.log('this is userlogininfo on models', userLoginInfo);

		const query = `SELECT * FROM users WHERE name = $1`;

		dbPoolInstance.query(query, username, (error, queryResult) => {
			if (error) {
				// invoke callback function with results after query has executed
				callback(error, null);
				console.log('this the errorsrsrs', error);
			} else {
				// invoke callback function with results after query has executed
				if (queryResult.rows.length === 0) {
					console.log('found yoa');
					reload();
				} else if (queryResult.rows.length > 0) {
					console.log('this is queryresult', queryResult.rows);
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
					console.log('registered user found inside DATA BASESESE');
				}
			}
		});
	};

	return {
		userVer
	};
};
