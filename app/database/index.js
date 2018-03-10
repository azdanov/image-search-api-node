const mongoose = require('mongoose');

module.exports = (url, promise = global.Promise) => {
  mongoose.Promise = promise;
  mongoose.connect(url).catch(err => {
    throw new Error(`Database connectivity problem: ${err.message}`);
  });
};
