const debounce = (fn, time) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => fn(...args), time);
  };
};

module.exports = debounce;
