const twoSum = function (nums, target) {
  const mab = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (mab.has(target - number)) {
      return [mab.get(target - number), i];
    }

    if (!mab.has(number)) {
      mab.set(number, i);
    }
  }
};
