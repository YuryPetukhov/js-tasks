let pairSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  const result = [];

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};

console.log(pairSum([1, 2, 3, 4, 5, 6, 8], 8));
