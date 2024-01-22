const groupBy = require('../Object/groupeBy');

describe('groupBy function', () => {
  afterAll(() => {
    Array.prototype.groupBy = null;
  });

  test('groupBy', () => {
    Array.prototype.groupBy = groupBy;
    const testArr = [{ id: '1' }, { id: '1' }, { id: '2' }];

    expect(
      testArr.groupBy(function (item) {
        return item.id;
      })
    ).toEqual({
      1: [{ id: '1' }, { id: '1' }],
      2: [{ id: '2' }],
    });
  });
});
