/* eslint-disable no-console */
const app = require('./app');
const { config } = require('./app/config');

app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
});
