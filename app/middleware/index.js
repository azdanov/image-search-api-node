const morgan = require('morgan');
const compression = require('compression');
const { PRODUCTION } = require('../config');

module.exports = (app, mode) => {
  const format = mode === PRODUCTION ? 'combined' : 'dev';

  app.use(morgan(format));
  app.use(compression());
};
