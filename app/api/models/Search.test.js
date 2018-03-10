/* eslint-disable node/no-unpublished-require */
const Search = require('./Search');

describe('Search model', () => {
  test('should be invalid if term is missing', async () => {
    const search = new Search();
    try {
      await search.validate();
    } catch (err) {
      expect(err).toBeTruthy();
      expect(err.message).toEqual(
        'Search validation failed: term: Path `term` is required.',
      );
    }
  });

  test('should be valid', async () => {
    const search = new Search({ term: 'test' });
    try {
      await search.validate();
    } catch (err) {
      expect(err).toBeFalsy();
    }
  });
});
