const searchRouter = require('express').Router();
const { getAll } = require('./latestController');

searchRouter.route('/').get(getAll);

module.exports = searchRouter;
