const config = {
  port: process.env.PORT || 3000,
  url: process.env.MONGO_URL || 'mongodb://localhost/test',
  mode: process.env.MONGO_URL ? 'prod' : 'dev',
};

module.exports = config;
