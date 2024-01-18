/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * exceptions: if one of string is over, it means if J equal t.length or I equal s.length
 * we need two pointers I and J which we will move to the end of strings. I chart of s string equal chart of t string
 * we increment I, if not increment J.. if J equal t.length ( means no matching with s[i] ) loop is stopping,
 * so we can check how many matching were, and if it is equal s.length return true, if not return false.
 *
 *
 */

var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
};

console.log(isSubsequence('acb', 'ahbgdc'));
