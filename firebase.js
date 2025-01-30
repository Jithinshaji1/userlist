const admin = require('firebase-admin');
const serviceAccount = require('../backendassignment-b8303-firebase-adminsdk-fbsvc-fb40c46d29.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
