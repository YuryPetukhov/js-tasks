var flat = function (arr, n) {
    console.log(n, 'n')
    if(!n) return arr
    let arrRes = []
    arr.forEach(item => {

        console.log(item)
        if(Array.isArray(item) && n >= 0) {
          arrRes = [...arrRes, ...(flat(item, n - 1))]
        } else {
            arrRes.push(item)
        }

    })

    return arrRes
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))
//[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]