function subarraySum(nums, target) {
  let l = 0;
  let r = 0;
  let sum = 0;
  let result = [];
  /*
    [2, 3, 4] и [4, 5]

    1 + 2 + 3 + 4 
    1,2,3,4,5  target = 9 
    l
          r
*/
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
console.log(result);
