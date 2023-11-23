const  promiseAll = (functions) => new Promise((resolve,reject) => {
    if(!functions.length) {
        resolve([]);
        return;
    }

    const res = new Array(functions.length);

    let resolvedCount = 0;
    const fnLength = functions.length

    for(let idx = 0; idx < fnLength; idx++) {
        (async () => {
            try {
                const subResult = await functions[idx]();
                res[idx] = subResult;

                resolvedCount++;
                if(resolvedCount === fnLength) {

                    resolve(res);
                }
            } catch(err) {
                reject(err);
            }
        })()
    }

});


module.exports = promiseAll