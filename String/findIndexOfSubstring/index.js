/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let i = 0;
  let k = 0;
  let j = 0;

  // sadbutsad

  while (i < haystack.length) {
    while (haystack[k] === needle[j]) {
      k++;
      j++;
      if (j === needle.length) return i;
      if (k === haystack.length) return -1;
    }

    if (haystack[k] !== needle[j]) {
      i++;
      k = i;
      j = 0;
    }
  }
  return -1;
};
