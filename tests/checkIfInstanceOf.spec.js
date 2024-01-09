const checkIfInstanceOf = require('../checkInstanceObject');

describe('checkIfInstanceOf function', () => {
  test('negative scenario', () => {
    expect(checkIfInstanceOf(null, {})).toBe(false);
  });

  test('constructor as instance', () => {
    expect(checkIfInstanceOf(Date, Date)).toBe(false);
  });

  test('instance and Constructor as arguments', () => {
    expect(checkIfInstanceOf(5, Number)).toBe(true);
  });
});
