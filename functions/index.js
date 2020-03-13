const functions = require('firebase-functions');

// import firebase-admin to allow access to the database. It is a SDK (software development kit).
const admin = require('firebase-admin');
// 
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Baron!");
});

exports.getHollers = functions.https.onRequest((request, response) => {
    admin.firestore()
    .collection('hollers')
    .get()
    .then(data => {
        let hollers = [];
        data.forEach(doc => {
            hollers.push(doc.data());
        });
        return response.json(hollers);
    })
    .catch(error => console.log(error));
}) 