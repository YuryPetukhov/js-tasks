const duplicate = require('../Array/containsDuplicate');

describe('duplicate function', () => {
  test('duplicate', () => {
    const mockArr = [1, 2, 3, 1];
    expect(duplicate(mockArr)).toEqual(true);
  });
});
