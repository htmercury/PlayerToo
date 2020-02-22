import { fireDb } from './firebase';
const gameData = require('../public/board_games.json');
const userData = require('../public/users.json');
const listingData = require('../public/listings.json');

const uploadGames = async () => {
    let count = 1;

    for (const gid in gameData) {
        await fireDb
            .collection('BoardGames')
            .doc(gid)
            .set(gameData[gid]);
        console.log('Entered new gameData into the collection ' + count);

        count++;
    }
};

const uploadUsers = async () => {
    let count = 1;

    for (const uid in userData) {
        await fireDb
            .collection('Users')
            .doc(uid)
            .set(userData[uid]);
        console.log('Entered new userData into the collection ' + count);

        count++;
    }
};

const uploadListings = async () => {
    let count = 1;

    for (const lid in listingData) {
        await fireDb
            .collection('Listings')
            .doc(lid)
            .set(listingData[lid]);
        console.log('Entered new listingData into the collection ' + count);

        count++;
    }
}

// uncomment only one at a time for migrating

// uploadGames().then(() => {
//     console.log('migration complete');
//     process.exit();
// });

// uploadUsers().then(() => {
//     console.log('migration complete');
//     process.exit();
// });

uploadListings().then(() => {
    console.log('migration complete');
    process.exit();
});