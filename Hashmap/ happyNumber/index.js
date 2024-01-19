const nextElement = (int) => {
  let reamining = int;
  let digit = 0;
  let next = 0;

  while (reamining > 0) {
    digit = reamining % 10;
    next += digit * digit;
    reamining = Math.floor(reamining / 10);
  }

  return next;
};

const isHappy = function (n) {
  let seenNumbers = new Set();
  let current = n;
  let next = -Infinity;

  while (!seenNumbers.has(current)) {
    seenNumbers.add(current);
    next = nextElement(current);
    current = next;
  }

  return current === 1;
};
