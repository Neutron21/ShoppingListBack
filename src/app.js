const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const constants = require('./constants');
const app = express();
// Settings
app.set('port', process.env.PORT || constants.PORT);
app.set('views',  __dirname+'/views');
app.engine('.hbs', exphbs.engine({
    // layoutsDir: path.join(__dirname, 'views'),
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

// Static
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;