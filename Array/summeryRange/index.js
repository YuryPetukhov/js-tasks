/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  const res = [];

  let left = nums[0];
  let right = nums[0];

  for (let index = 1; index <= nums.length; index++) {
    const element = nums[index];

    if (right + 1 === element) {
      right = element;
    } else {
      left === right ? res.push(String(left)) : res.push(`${left}->${right}`);

      left = element;
      right = element;
    }
  }
  return res;
};
