const PRODUCTION = 'production';
const DEVELOPMENT = 'production';

const config = {
  port: process.env.PORT || 3000,
  url: process.env.MONGO_URL || 'mongodb://localhost/test',
  mode: process.env.MONGO_URL ? PRODUCTION : DEVELOPMENT,
  searchLimit: 5,
};

module.exports = {
  config,
  PRODUCTION,
  DEVELOPMENT,
};
