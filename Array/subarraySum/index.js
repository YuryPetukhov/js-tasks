function subarraySum(nums, target) {
  let l = 0;
  let r = 0;
  let sum = 0;
  let result = [];

  while (r < nums.length) {
    sum += nums[r];

    while (sum > target) {
      sum -= nums[l];
      l++;
    }

    r++;

    if (sum === target) {
      result.push(nums.slice(l, r));
    }
  }

  return result;
}

const nums = [1, 2, 3, 4, 5];
const target = 9;
const result = subarraySum(nums, target);
