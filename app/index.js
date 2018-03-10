const express = require('express');

const connectDb = require('./database');
const config = require('./config');
const useMiddleware = require('./middleware');
const api = require('./api');

connectDb(config.url);

const app = express();

useMiddleware(app, config.mode);

app.use('/api', api);

module.exports = app;
