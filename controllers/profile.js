const sha256 = require('js-sha256');
const SALT = 'SEI20 FTW';

module.exports = (db) => {
	let renderProfile = (request, response) => {
		let usercookie = request.cookies.user_name;
		db.findProfile.sourceDetails(usercookie, (error, result) => {
			if (error) {
				console.log(error);
				console.log('error with rendering profile');
			} else if (result === null) {
				console.log('no logs recorded');
				response.redirect('/dashboardnew');
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

				// console.log('this is reversed mood', reversedMoods);
				// console.log('this is all dates', allDates);
				const data = {
					result,
					username: usercookie,
					moods: reversedMoods,
					dates: reversedDates
				};
				response.render('dashboard/profile', data);
			}
		});
	};

	let returnProfile = (request, response) => {
		let usercookie = request.cookies.user_name;
		let today = new Date();
		let currentTime = today.getHours();
		console.log('currenttime is', currentTime);
		db.findProfile.sourceDetails(usercookie, (error, result) => {
			if (error) {
				console.log(error);
				console.log('error with rendering profile');
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

				// console.log('this is reversed mood', reversedMoods);
				// console.log('this is all dates', allDates);
				const data = {
					result,
					username: usercookie,
					moods: reversedMoods,
					dates: reversedDates
				};
				if (currentTime >= 24 && currentTime <= 11) {
					response.render('dashboard/profilemorning', data);
				} else if (currentTime >= 12 && currentTime <= 5) {
					response.render('dashboard/profileafternoon', data);
				} else {
					response.render('dashboard/profileevening', data);
				}
			}
		});
	};

	return {
		renderProfile,
		returnProfile
	};
};
