const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {
	// `dbPoolInstance` is accessible within this function scope

	let sourceDetails = (usercookie, callback) => {
		console.log('hello sourceDetails models');
		let currentUser = [ usercookie ];

		const query1 = `SELECT * FROM dailylogs WHERE users_name = $1 ORDER BY ID DESC LIMIT 5`;

		// SELECT * FROM dailylogs WHERE users_name = $1 ORDER BY ID DESC LIMIT 5(
		//     SELECT FROM
		// )
		// SELECT * FROM dailylogs WHERE users_name = 'Daniel' ORDER BY ID DESC LIMIT 5 AND ORDER BY ID DESC LIMIT 1;
		// SELECT * FROM (SELECT * FROM dailylogs WHERE users_name = 'Daniel' ORDER BY ID DESC LIMIT 5) AS table_alias ORDER BY DATE DESC LIMIT 1;
		// (SELECT * FROM dailylogs WHERE users_name = 'Daniel' ORDER BY ID DESC LIMIT 5) AND (SELECT * FROM dailylogs WHERE users_name = 'Daniel' ORDER BY ID DESC LIMIT 1);

		dbPoolInstance.query(query1, currentUser, (error, queryResult) => {
			if (error) {
				// invoke callback function with results after query has executed
				callback(error, null);
			} else {
				// invoke callback function with results after query has executed
				// console.log('findging logs for selected user');
				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);
					// console.log('found dailylogs', queryResult.rows);
				} else {
					callback(null, null);
				}
			}
		});
	};

	return {
		sourceDetails
	};
};
