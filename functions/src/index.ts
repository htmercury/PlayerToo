import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
import * as bodyParser from "body-parser";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const app = express();
const main = express();
const usersCollection = 'Users';
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// webApi is your functions name, and you will pass main as 
// a parameter
export const webApi = functions.https.onRequest(main);

// View a user
app.get('/users/:userId', (req, res) => {
    firebaseHelper.firestore
        .getDocument(db, usersCollection, req.params.userId)
        .then(doc => res.status(200).send(doc))
        .catch(error => res.status(400).send(`Cannot get user: ${error}`));
})

// View all users
app.get('/users', (req, res) => {
    firebaseHelper.firestore
        .backup(db, usersCollection)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(`Cannot get users: ${error}`));
})