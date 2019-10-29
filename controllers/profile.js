const sha256 = require('js-sha256');
const SALT = 'SEI20 FTW';

module.exports = (db) => {
	let returnProfile = (request, response) => {
		let usercookie = request.cookies.user_name;
		let today = new Date();
		let currentTime = today.getHours();
		console.log('currenttime is', currentTime);
		db.findProfile.sourceDetails(usercookie, (error, result) => {
			if (error) {
				console.log(error);
				console.log('error with rendering profile');
			} else if (result === null) {
				console.log('no past entries found');
				response.render('dashboard/dashboardcreate');
			} else {
				// console.log('profile successfully rendered!');
				// console.log('this is result', result);
				let allMoodArr = result;
				let allMood = allMoodArr.map((card) => {
					return card.mood_level;
				});
				let reversedMoods = allMood.reverse();

				let allDatesArr = result;
				let allDates = allDatesArr.map((card) => {
					return card.date;
				});
				let reversedDates = allDates.reverse();

				// find aggregate of moods
				const add = (a, b) => a + b;
				const sumMoods = reversedMoods.reduce(add);
				// console.log('sum of moods is', sumMoods);
				const aggregateMoods = sumMoods / reversedMoods.length;
				const data = {
					result,
					username: usercookie,
					moods: reversedMoods,
					dates: reversedDates,
					aggregateMoods: aggregateMoods
				};
				if (currentTime >= 6 && currentTime <= 11) {
					response.render('dashboard/profilemorning', data);
				} else if (currentTime >= 12 && currentTime <= 17) {
					response.render('dashboard/profileafternoon', data);
				} else {
					response.render('dashboard/profileevening', data);
				}
			}
		});
	};

	return {
		returnProfile
	};
};
