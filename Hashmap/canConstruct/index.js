/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = magazine.split('').reduce((acc, next) => {
    if (!acc[next]) {
      acc[next] = 0;
    }
    acc[next] = acc[next] + 1;
    return acc;
  }, {});

  for (let index = 0; index < ransomNote.length; index++) {
    const element = ransomNote[index];

    if (map[element] && map[element] > 0) {
      map[element] = map[element] - 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct('aa', 'aab'));
