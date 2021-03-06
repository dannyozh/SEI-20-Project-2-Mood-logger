/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const pg = require('pg');
const url = require('url');

var configs;

if (process.env.DATABASE_URL) {
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    configs = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    };
} else {
    configs = {
        user: 'Daniel',
        host: '127.0.0.1',
        database: 'project_2_db',
        port: 5432
    };
}

const pool = new pg.Pool(configs);

pool.on('error', function(err) {
    console.log('idle client error', err.message, err.stack);
});

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

// getting registration details....
const registerUser = require('./models/register');
const user = registerUser(pool);

// finding out if user has account
const userSearch = require('./models/searchuser');
const authUser = userSearch(pool);

// saving feelings part 1
const savingFeelings = require('./models/dashboard1saved');
const userFeeling = savingFeelings(pool);

// finding currentcard
const retrievingCard = require('./models/gettingLogDetails');
const cardFinder = retrievingCard(pool);
// const savingLog = require('./models/dashboard2saved');
// const userLog = savingLog(pool);

// rendering profile
const retrievingProfileDetails = require('./models/profile');
const findProfile = retrievingProfileDetails(pool);

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

module.exports = {
    //make queries directly from here
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    // get a reference to end the connection pool at server end
    pool: pool,

    /*
     * ADD APP MODELS HERE
     */

    // users: userModelsObject,
    user: user,
    userFeeling: userFeeling,
    cardFinder: cardFinder,
    authUser: authUser,
    findProfile: findProfile
};