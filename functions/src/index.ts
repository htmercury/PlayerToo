import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
import * as bodyParser from 'body-parser';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const app = express();
const main = express();
const usersCollection = 'Users';
const listingsCollection = 'Listings';
const gamesCollection = 'BoardGames';
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// webApi is your functions name, and you will pass main as
// a parameter
export const webApi = functions.https.onRequest(main);

// USER ROUTES

// View a user
app.get('/users/:userId', (req, res) => {
    firebaseHelper.firestore
        .getDocument(db, usersCollection, req.params.userId)
        .then(doc => res.status(200).send(doc))
        .catch(error => res.status(400).send(`Cannot get user: ${error}`));
});

// View all users
app.get('/users', (req, res) => {
    firebaseHelper.firestore
        .backup(db, usersCollection)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(`Cannot get users: ${error}`));
});

// LISTING ROUTES

// View a listing
app.get('/listings/:listingId', async (req, res) => {
    try {
        const listingDoc = await db
            .collection(listingsCollection)
            .doc(req.params.listingId)
            .get();
        const listing = listingDoc.data();

        if (listing !== undefined) {
            // joins
            const gameDoc = await db
                .collection(gamesCollection)
                .doc(listing.game_id)
                .get();
            listing.game = gameDoc.data();

            const lenderDoc = await db
                .collection(usersCollection)
                .doc(listing.lender_id)
                .get();
            listing.lender = lenderDoc.data();
        }

        res.status(200).send(listing);
    } catch (error) {
        res.status(400).send(`Cannot get listing: ${error}`);
    }
});

// View all listings
app.get('/listings', async (req, res) => {
    try {
        const docSnaps = await db
            .collection(listingsCollection)
            .orderBy('id', 'asc')
            .get();
        const listingsData: any[] = [];
        docSnaps.forEach(doc => listingsData.push(doc.data()));

        // do joins on the ids
        const joinAndReturnData = async () => {
            await Promise.all(
                listingsData.map(async (listing, i) => {
                    const gameDoc = await db
                        .collection(gamesCollection)
                        .doc(listing.game_id)
                        .get();
                    listing.game = gameDoc.data();

                    const lenderDoc = await db
                        .collection(usersCollection)
                        .doc(listing.lender_id)
                        .get();
                    listing.lender = lenderDoc.data();

                    listingsData[i] = listing;
                })
            );

            return listingsData;
        };

        const listings = await joinAndReturnData();
        res.status(200).send(listings);
    } catch (error) {
        res.status(400).send(`Cannot get listings: ${error}`);
    }
});

// BOARD GAME ROUTES

// View a game
app.get('/games/:gameId', (req, res) => {
    firebaseHelper.firestore
        .getDocument(db, gamesCollection, req.params.gameId)
        .then(doc => res.status(200).send(doc))
        .catch(error => res.status(400).send(`Cannot get game: ${error}`));
});

// View up to 100 games
app.get('/games', async (req, res) => {
    try {
        const queryName = req.query.limit;
        let queryLimit = req.query.limit;

        if (queryLimit === undefined) {
            queryLimit = 100; // default value
        } else {
            // parse string to int
            queryLimit = parseInt(queryLimit);
        }

        let query;

        if (queryName !== undefined) {
            query = db
                .collection(gamesCollection)
                .where('name', '>=', queryName)
                .orderBy('id', 'asc')
                .limit(queryLimit);
        } else {
            query = db
                .collection(gamesCollection)
                .orderBy('id', 'asc')
                .limit(queryLimit);
        }

        const docSnaps = await query.get();
        const gamesData: any[] = [];
        docSnaps.forEach(doc => gamesData.push(doc.data()));

        res.status(200).send(gamesData);
    } catch (error) {
        res.status(400).send(`Cannot get listings: ${error}`);
    }
});
