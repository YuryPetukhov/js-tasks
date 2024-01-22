function containsNearbyDuplicate(nums, k) {
  const window = new Set();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (window.has(element)) {
      return true;
    }

    window.add(element);

    if (window.size > k) window.delete(nums[i - k]);
  }
  return false;
}
