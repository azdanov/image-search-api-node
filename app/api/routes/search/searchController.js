const Image = require('../../models/Image');
const Search = require('../../models/Search');

const defaultLimit = 5;

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
  const limit = Number(req.param('limit')) || defaultLimit;
  try {
    const docs = await Image.find({}).limit(limit);
    res.json(docs);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const { term } = req.params;
  const limit = Number(req.params.limit) || defaultLimit;

  try {
    const docs = await Image.find({
      description: { $regex: term, $options: 'i' },
    }).limit(limit);

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
