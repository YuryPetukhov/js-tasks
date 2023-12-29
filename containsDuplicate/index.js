/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const cash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (cash.has(nums[i])) {
      return true;
    } else {
      cash.set(nums[i], i);
    }
  }
  return false;
};

module.exports = containsDuplicate;
