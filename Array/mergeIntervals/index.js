const merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let index = 0; index < intervals.length; index++) {
    const current = intervals[index];
    let previous = result[result.length - 1];

    if (previous.at(1) >= current.at(0)) {
      previous[1] = [Math.max(previous.at(1), current.at(1))];
    } else {
      result.push(current);
    }
  }

  return result;
};
