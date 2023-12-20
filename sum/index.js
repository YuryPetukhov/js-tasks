function add(a, b) {
  let sum = a ? a : 0;

  if (!a) {
    return add;
  }

  if (!b) {
    return function inner(c) {
      if (!c) {
        return inner;
      }

      sum += c;
      return sum;
    };
  }

  return sum;
}

console.log(add(20, 22)); // -> 42
console.log(add(20)(22));
console.log(add(20)()()()(22));
console.log(add()()()()(20)(22));
