/**
 * @param {string} s
 * @return {number}
 *
 * bcabcbb
 * l
 *   r
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = 0;
  let m = 0;
  let SET = new Set();

  while (r < s.length) {
    if (!SET.has(s[r])) {
      SET.add(s[r]);
      m = Math.max(m, r - l + 1);
      r++;
    } else {
      SET.delete(s[l]);
      l++;
    }
  }

  return m;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
