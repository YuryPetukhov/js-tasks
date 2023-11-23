const promiseAll = require("../promiseAll");



describe("promiseAll function", () => {

    test('with empty array', async () => {
        const result = await promiseAll([]);
        expect(result).toEqual([])
    });

    test('with one promise',async  () => {
            try {
                const result = await  promiseAll([() => new Promise(resolve => setTimeout(() => resolve(5), 200))])
                expect(result).toEqual([5])
            } catch(e){
                console.log(e)
            }

    });

    test('with many promise',async  () => {
        try {
            const result = await  promiseAll([() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 150)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))])
            expect(result).toEqual([4,10,16])
        } catch(e){
            console.log(e)
        }
    });

    test('with error from  promise',async  () => {
        try {
            const result = await  promiseAll([() => new Promise(resolve => setTimeout(() => resolve(1), 200)), () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))])

        } catch(e){
            expect(e).toMatch('Error');
        }
    });

})
