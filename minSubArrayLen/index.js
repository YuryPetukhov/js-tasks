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
      // Обновляем минимальную длину подмассива
      minLength = Math.min(minLength, right - left + 1);

      // Вычитаем nums[left] из текущей суммы подмассива
      currentSum -= nums[left];

      // Уменьшаем left (перемещаем окно влево)
      left++;
    }
    // Увеличиваем right (расширяем окно вправо)
    right++;
  }

  return minLength === Infinity ? 0 : minLength;
}

// Пример использования
const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
const result = minSubArrayLen(target, nums);
console.log(result); // Выведет 2
