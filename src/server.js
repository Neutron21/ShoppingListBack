const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const router = require('./network/routes');
const constants = require('./constants');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.use('/app', express.static('public'));
router(app);

app.listen(constants.PORT);
console.clear();
console.log(`Sevidor corriendo en http://localhost:${constants.PORT}`);
