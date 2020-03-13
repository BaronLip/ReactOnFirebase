# ReactOnFirebase
A React social media app using Firebase as the backend. 

https://www.youtube.com/watch?v=m_u6P5k0vP0

$ npm install -g firebase-tools
$ firebase login
$ firebase init
$ firebase deploy

Create a database in the Firebase console.
> Create database
> Start in test mode > go through the prompt options.

Create some test collections. Collections are database entries.
Require firebase-admin and create "admin".
Created getHollers function to test.
firebase deploy, then use the Function URL to test fetching database entries.
---commit---

Created createHoller function.
$ firebase serve - to start a server function and test. It's more efficient than $ firebase deploy.
Running into "Error: Could not load the default credentials."
---commit---

Add firebase SDK key to project and utilize gitignore file for the key.
Source:
https://stackoverflow.com/questions/58127896/error-could-not-load-the-default-credentials-firebase-function-to-firestore
Go to firebase settings tab > Service accounts > click "Generate new private key".
Download the json file and all it's location into the admin.initializeApp() function.
Trying $ firebase init emulators.
Set port to (5001). (Didn't work.)
Updated firebase.json file to have "host" and "port" info. (Didn't work.)
Restarted system (F'ing worked...unbelievable.)
---commit---

