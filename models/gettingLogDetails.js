const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {
	// `dbPoolInstance` is accessible within this function scope

	let findFeeling = (callback) => {
		console.log('hello models');

		const query1 = `SELECT * FROM dailylogs`;

		dbPoolInstance.query(query1, (error, queryResult) => {
			if (error) {
				console.log('TESTSTSTSTSTSTSTS');
				// invoke callback function with results after query has executed
				callback(error, null);
			} else {
				// invoke callback function with results after query has executed
				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);
					console.log('we did it', queryResult.rows);
				} else {
					callback(null, null);
				}
			}
		});
	};

	return {
		findFeeling
	};
};
