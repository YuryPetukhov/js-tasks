var wordPattern = function (pattern, s) {
  const patternArr = pattern.split('');
  const sArr = s.split(' ');

  if (patternArr.length !== sArr.length || !patternArr || !sArr) {
    return false;
  }
  const mab = new Map();
  const mat = new Map();

  for (let i = 0; i < patternArr.length; i++) {
    const elementP = patternArr[i];
    const elementS = sArr[i];

    if (!mab.has(elementP)) {
      mab.set(elementP, elementS);
    }

    if (!mat.has(elementS)) {
      mat.set(elementS, elementP);
    }

    if (
      !mab.has(mat.get(elementS)) ||
      !mat.has(mab.get(elementP)) ||
      mat.get(elementS) !== elementP ||
      mab.get(elementP) !== elementS
    ) {
      return false;
    }
  }

  return true;
};
