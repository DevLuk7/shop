import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
// import * as algoliasearch from 'algoliasearch';
const algoliasearch = require('algoliasearch');


const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;

const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex('items');

// /// Cloud Functions

exports.addToIndex = functions.firestore
  .document('items/{itemId}')
  .onCreate((snapshot) => {
    const data = snapshot.data();
    const objectID = snapshot.id;

    return index.addObject({ ...data, objectID });
  });

exports.updateIndex = functions.firestore
  .document('items/{itemId}')
  .onUpdate((change) => {
    const newData = change.after.data();
    const objectID = change.after.id;
    return index.saveObject({ ...newData, objectID });
  });

exports.deleteFromIndex = functions.firestore
  .document('items/{itemId}')
  .onDelete((snapshot) => index.deleteObject(snapshot.id));