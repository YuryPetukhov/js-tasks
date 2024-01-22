function minSubArrayLen(target, nums) {
  if (nums.length === 0) {
    return 0;
  }

  let left = 0;
  let right = 0;
  let currentSum = 0;
  let minLength = Infinity;

  while (right < nums.length) {
    currentSum += nums[right];

    while (currentSum >= target) {
      // Update the minimum length of the subarray
      minLength = Math.min(minLength, right - left + 1);

      // Deduct nums[left] from the current sum of the subarray
      currentSum -= nums[left];

      // Decrease left (move the window to the left)
      left++;
    }
    // Enlarge right (widen the window to the right)
    right++;
  }

  return minLength === Infinity ? 0 : minLength;
}

// Example of use
const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
const result = minSubArrayLen(target, nums);
console.log(result); // log 2
