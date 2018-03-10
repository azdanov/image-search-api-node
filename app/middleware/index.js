const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const { PRODUCTION } = require('../config');

module.exports = (app, mode) => {
  const format = mode === PRODUCTION ? 'combined' : 'dev';

  app.use(morgan(format));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(compression());
};
