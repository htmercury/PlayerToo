const gameData = require('../public/board_games.json');
const userData = require('../public/users.json');

const fs = require('fs');

const NUM_LISTINGS = 25;

const gameIds = Object.keys(gameData);
const userIds = Object.keys(userData);

const listings = {};

for (let i = 0; i < NUM_LISTINGS; i++) {
    // create random listings
    const lender_id = userIds[Math.floor(Math.random() * userIds.length)];
    const game_id = gameIds[Math.floor(Math.random() * gameIds.length)];
    listings[i] = {
        id: i,
        lender_id,
        game_id,
        borrowed: false
    };
    console.log('generated listing # ' + i);
}

// scraping is done, write to file
fs.writeFile('../public/listings.json', JSON.stringify(listings), function(err) {
    if (err) throw err;
    console.log('complete');
});