const debounce = (fn, time) => {
    let timer = null;
    return (...args) => {
        clearInterval(timer)
        timer = setTimeout(() => fn(...args), time)
    }
 }

 module.exports = debounce