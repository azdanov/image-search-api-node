const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = (app, mode) => {
  const format = mode === 'prod' ? 'combined' : 'dev';

  app.use(morgan(format));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};
