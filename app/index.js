const express = require('express');

const db = require('./database');
const config = require('./config');
const middleware = require('./middleware');
const api = require('./api');

db(config.url);

const app = express();

middleware(app, config.mode);

app.use('/api', api);

module.exports = app;
