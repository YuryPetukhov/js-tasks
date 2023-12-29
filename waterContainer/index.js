const maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let area = 0;

  while (leftPointer < rightPointer) {
    const left = height[leftPointer];
    const right = height[rightPointer];
    const currentArea = Math.min(left, right) * (rightPointer - leftPointer);

    area = Math.max(area, currentArea);

    if (left <= right) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return area;
};
