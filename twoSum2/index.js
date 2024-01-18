/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const MAP = new Map();
  let pair = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    if (MAP.has(target - element)) {
      pair = [MAP.get(target - element), index + 1];
    }

    MAP.set(element, index + 1);
  }
  return pair;
};

console.log(twoSum([2, 3, 4], 6)); // 1,3
