var admin = require("firebase-admin");

var serviceAccount = require("../../private/asDeporte-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cv-web-jucp.firebaseio.com/"
});

const db = admin.database();

module.exports = db;