const join = function(arr1, arr2) {
    if(!arr1.length || !arr2.length) return []
    const result = [...arr1, ...arr2].sort((a,b) => a.id - b.id)
    const obj = {};

result.forEach(item => {
    obj[item.id] = obj[item.id] ? obj[item.id] = {...obj[item.id], ...item } : obj[item.id] = item;
})

return Object.values(obj)
};

module.exports = join