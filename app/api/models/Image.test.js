const Image = require('./Image');

describe('Image model', () => {
  test('should be invalid if both description and url are missing', async () => {
    const image = new Image();
    try {
      await image.validate();
    } catch (err) {
      expect(err).toBeTruthy();
      expect(err.message).toEqual(
        'Image validation failed: description: Path `description` is required., url: Path `url` is required.',
      );
    }
  });

  test('should be invalid if url is missing', async () => {
    const image = new Image({ description: 'test' });
    try {
      await image.validate();
    } catch (err) {
      expect(err).toBeTruthy();
      expect(err.message).toEqual(
        'Image validation failed: url: Path `url` is required.',
      );
    }
  });

  test('should be invalid if url is incorrect', async () => {
    const image = new Image({ description: 'test', url: 'test' });
    try {
      await image.validate();
    } catch (err) {
      expect(err).toBeTruthy();
      expect(err.message).toEqual(
        'Image validation failed: url: test is not a valid url.',
      );
    }
  });

  test('should be valid', async () => {
    const image = new Image({ description: 'test', url: 'http://test.com/' });
    try {
      await image.validate();
    } catch (err) {
      expect(err).toBeFalsy();
    }
  });
});
