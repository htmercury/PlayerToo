const gameData = require('../public/board_games.json');
const userData = require('../public/users.json');

const fs = require('fs');

const NUM_LISTINGS = 25;

const gameIds = Object.keys(gameData);
const userIds = Object.keys(userData);

const randomAddresses = [
    '1560 Sherman Ave',
    '1714 Hinman Ave',
    '1408 Isabella St',
    '1720 Maple Ave',
    '1826 Grant St',
    '2808 Sheridan Rd',
    '811 Lincoln St',
    '1422 Hartrey Ave ## 2',
    '1501 Hinman Ave #APT 5B',
    '706 Sheridan Rd',
    '729 Seward St',
    '515 Main St #402',
    '1407 Oakton St',
    '1140 Pitner Ave',
    '414 South Blvd',
    '142 Asbury Ave',
    '350 Custer Ave',
    '3505 Arcadia St',
    '9034 Ewing Ave',
    '67 Williamsburg Rd',
    '9257 Drake Ave',
    '32 Williamsburg Ln',
    '1105 Gates St',
    '941 Lorlyn Dr',
    '1001 Allen Ave',
];

const listings = {};

for (let i = 0; i < NUM_LISTINGS; i++) {
    // create random listings
    const lender_id = userIds[Math.floor(Math.random() * userIds.length)];
    const game_id = gameIds[Math.floor(Math.random() * gameIds.length)];
    listings[i] = {
        id: i,
        lender_id,
        game_id,
        borrowed: false,
        additional_details: '',
        requests: [],
        meeting_loc: randomAddresses[Math.floor(Math.random() * randomAddresses.length)],
    };
    console.log('generated listing # ' + i);
}

// scraping is done, write to file
fs.writeFile('../public/listings.json', JSON.stringify(listings), function(
    err
) {
    if (err) throw err;
    console.log('complete');
});
