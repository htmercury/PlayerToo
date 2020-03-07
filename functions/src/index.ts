import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import * as cors from 'cors';

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

app.use(cors({ origin: true }));
main.use(cors({ origin: true }));
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
        .then((data: any) => res.status(200).send(Object.values(data['Users'])))
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

// Remove a listing
app.delete('/listings/:listingId', async (req, res) => {
    try {
        // check if listing exists first
        const listingRef = await db
            .collection(listingsCollection)
            .doc(req.params.listingId)
            .get();

        if (!listingRef.exists) {
            res.status(400).send({
                message: 'listing_id does not exist.',
                success: false,
            });
            return;
        }

        await db
            .collection(listingsCollection)
            .doc(req.params.listingId)
            .delete();

        res.status(200).send({
            message: 'listing successfully deleted.',
            success: true,
        });
    } catch (error) {
        res.status(400).send({
            message: `Failed to delete listing: ${error}`,
            success: false,
        });
    }
});

// Edit a listing
app.put('/listings/:listingId', async (req, res) => {
    try {
        // check if listing exists first
        const listingRef = await db
            .collection(listingsCollection)
            .doc(req.params.listingId)
            .get();

        if (!listingRef.exists) {
            res.status(400).send({
                message: 'listing_id does not exist.',
                success: false,
            });
            return;
        }
        // grab update body params
        const new_body = req.body;

        // update
        await db
            .collection(listingsCollection)
            .doc(req.params.listingId)
            .update(new_body);


        res.status(200).send({
            message: 'listing successfully updated.',
            success: true,
        });
    } catch (error) {
        res.status(400).send({
            message: `Failed to update listing: ${error}`,
            success: false,
        });
    }
});

// Add a listing
app.post('/listings', async (req, res) => {
    try {
        const game_id = req.body.game_id;
        const user_id = req.body.user_id;
        const additional_details = req.body.additional_details;
        const requests = req.body.requests;

        if (game_id === undefined || user_id === undefined) {
            res.status(400).send({
                message: 'game_id or user_id was undefined.',
                success: false,
            });
            return;
        }

        // check if id exists
        const userRef = await db
            .collection(usersCollection)
            .doc(user_id)
            .get();
        const gameRef = await db
            .collection(gamesCollection)
            .doc(game_id)
            .get();

        if (!userRef.exists || !gameRef.exists) {
            res.status(400).send({
                message: 'game_id or user_id was invalid.',
                success: false,
            });
            return;
        }

        const listingRef = db.collection(listingsCollection).doc();

        // post to db
        await listingRef.set({
            id: listingRef.id,
            borrowed: false,
            game_id: game_id,
            lender_id: user_id,
            additional_details: additional_details,
            requests: requests,
        });

        res.status(201).send({ message: 'listing was added.', success: true });
    } catch (error) {
        res.status(400).send(`Cannot add listing: ${error}`);
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
            queryLimit = 20; // default value
        } else {
            // parse string to int
            queryLimit = parseInt(queryLimit);

            // limit is 100
            if (queryLimit > 100) {
                queryLimit = 100;
            }
        }

        let query;

        if (queryName !== undefined) {
            query = db
                .collection(gamesCollection)
                .where('name', '>=', queryName)
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
        res.status(400).send(`Cannot get games: ${error}`);
    }
});
