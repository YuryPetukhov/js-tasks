const squareSort = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let pointer = arr.length;

  const res = [];

  while (left <= right) {
    const squareLeft = arr[left] ** 2;
    const squareRight = arr[right] ** 2;
    pointer--;

    if (squareLeft > squareRight) {
      res[pointer] = squareLeft;
      left++;
    } else {
      res[pointer] = squareRight;
      right--;
    }
  }

  return res;
};

console.log(squareSort([-4, -1, 0, 3, 10]));
