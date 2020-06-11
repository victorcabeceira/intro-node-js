const { fixId, findUser } = require('./users');

describe('users', () => {
  test('fixId', () => {
    expect(fixId('20')).toBe(20);
  });

  test('findUser', async () => {
    await expect(findUser('0')).resolves.toEqual(expect.objectContaining({ id: 0 }));
  });
});
