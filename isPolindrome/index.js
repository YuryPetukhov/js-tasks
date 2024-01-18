/**
 * @param {string} s
 * @return {boolean}
 */

function removeNonAlphanumeric(inputString) {
  return inputString.replace(/[^a-zA-Z0-9]/g, '');
}

var isPalindrome = function (s) {
  const str = removeNonAlphanumeric(s);
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panamas'));
