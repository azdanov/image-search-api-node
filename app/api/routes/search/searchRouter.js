const searchRouter = require('express').Router();
const { logSearchTerm, getAll, getOne } = require('./searchController');

searchRouter.route('/').get(getAll);
searchRouter.use('/:term', logSearchTerm);
searchRouter.route('/:term').get(getOne);

module.exports = searchRouter;
