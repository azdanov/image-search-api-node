/* eslint-disable no-console,unicorn/no-process-exit,no-process-exit */
const { readFileSync } = require('fs');
require('../app/db')();

const Image = require('../app/api/models/Image');

const data = JSON.parse(readFileSync(`${__dirname}/MOCK_DATA.json`, 'utf-8'));

async function loadData() {
  try {
    await Image.create(data);
    console.log('Done!');
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
}

loadData();
