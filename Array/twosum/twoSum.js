var twoSum = function (nums, target) {
  const cache = new Map();
  let pair = [];

  nums.forEach((item, index) => {
    const sumMinus = target - item;

    if (cache.has(sumMinus)) {
      pair = [cache.get(sumMinus), index];
    }

    cache.set(item, index);
  });

  return pair;
};

console.log(twoSum([2, 7, 11, 15], 9));
