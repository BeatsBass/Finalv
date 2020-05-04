const express = require('express');
const path = require('path');
const morgan = require('morgan')

// Initializations
const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// routes
app.use(require('./routes/index.routes'));
/*app.use(require('./routes/users.routes'));
app.use(require('./routes/notes.routes'));*/

// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;