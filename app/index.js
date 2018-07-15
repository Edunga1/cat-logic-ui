const path = require('path');
const express = require('express');
const route = require('./app.route');
const logger = require('./middlewares/logger');
const config = require('./middlewares/config');

const app = express();
// app.engine('ejs', ejs.renderFile);
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use(logger);
app.use(config);
app.use(route(express.Router));

module.exports = app;
