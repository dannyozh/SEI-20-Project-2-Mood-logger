const sha256 = require('js-sha256');
const SALT = 'SEI20 FTW';

module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let createDashboard = (request, response) => {
        let usercookie = request.cookies.user_name;
        const data = {
            username: usercookie
        };
        response.render('dashboard/dashboardcreate', data);
    };

    let saveFeeling = (request, response) => {
        const userFeelingInfo = request.body;
        let username = request.cookies.user_name;
        const date = request.body.date;
        // console.log('the date is', date);
        // const modifiedDate = date.replace('2020-', '');
        const modifiedDate = date.slice(5);
        console.log('modified date is', modifiedDate);
        const log = request.body.log;
        // inserting into db, db needs to have a user....
        db.userFeeling.saveUserFeeling(userFeelingInfo, username, modifiedDate, log, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log('first card entered!');
                response.redirect('/seecurrentcard');
            }
        });
    };

    let locatingCurrentCard = (request, response) => {
        // inserting into db, db needs to have a user....

        db.cardFinder.findFeeling((error, result) => {
            const data = {
                username: result[0].users_name,
                mood: result[0].mood_level,
                feeling: result[0].illness_input,
                log: result[0].log,
                date: result[0].date
            };
            if (error) {
                console.log('the error is', error);
                // highly depressed or anxious
            } else if (data.mood >= 0 && data.mood < 3 && (data.feeling === 'depressed' || data.feeling === 'anxious')) {
                response.render('cardoutcomes/lowmood', data);
                // mood ok but not feeling great
            } else if (data.mood >= 3 && data.mood <= 7 && (data.feeling === 'stressed' || data.feeling === 'depressed' || data.feeling === 'anxious')) {
                response.render('cardoutcomes/lowokmood', data);
                // mood ok but feeling ok
            } else if (data.mood >= 3 && data.mood <= 7 && data.feeling === 'ok') {
                response.render('cardoutcomes/okmood', data);
                // person is doing better
            } else {
                response.render('cardoutcomes/goodmood', data);
            }
        });
    };
    return {
        createDashboard,
        saveFeeling,
        locatingCurrentCard
    };
};