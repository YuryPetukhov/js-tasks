/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const  reduce = (nums, fn, init) => {
    let acc = init
    nums.forEach((number) =>  acc = fn(acc, number) )
    return acc
};

module.exports = reduce