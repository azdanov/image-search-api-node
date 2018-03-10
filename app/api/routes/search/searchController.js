const Image = require('../../models/Image');
const Search = require('../../models/Search');
const { config } = require('../../../config');

const defaultLimit = config.searchLimit;

const logSearchTerm = async (req, res, next) => {
  const { term } = req.params;

  if (!term) {
    next();
    return;
  }

  try {
    await Search.create({ term });
  } catch (error) {
    next(error);
    return;
  }

  next();
};

const getAll = async (req, res, next) => {
  const limit = Number(req.query.limit) || defaultLimit;
  const offset = Number(req.query.offset) || 0;

  try {
    const docs = await Image.find({})
      .skip(offset)
      .limit(limit);
    res.json(docs);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const { term } = req.params;
  const limit = Number(req.query.limit) || defaultLimit;
  const offset = Number(req.query.offset) || 0;

  try {
    const docs = await Image.find({
      description: { $regex: term, $options: 'i' },
    })
      .skip(offset)
      .limit(limit);

    res.json(docs);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  logSearchTerm,
  getAll,
  getOne,
};
