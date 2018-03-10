const Search = require('../../models/Search');
const { config } = require('../../../config');

const defaultLimit = config.searchLimit;

const getAll = async (req, res, next) => {
  const limit = Number(req.query.limit) || defaultLimit;
  const offset = Number(req.query.offset) || 0;

  try {
    const docs = await Search.find({})
      .sort({ date: 'desc' })
      .skip(offset)
      .limit(limit);

    res.json(docs);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
