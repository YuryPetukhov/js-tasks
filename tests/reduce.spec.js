const reduce = require("../reduce/reduce");

describe("reduce function", () => {

    test('reduce with empty array should return init', () => {
        const init = []
        const array = []
        expect(reduce(  array, () => {}, init)).toEqual([])
    });

    test('should return reduced sum array', () => {
        const sum = (acc, next) => acc + next
        const arr = [1,2,3,4]
        expect(reduce(arr, sum, 0)).toEqual(10)
    });

    test('should return reduced multi array', () => {
        const sum = (acc, next) =>  acc + next * next
        const arr = [1,2,3,4]
        const init = 100
        expect(reduce(arr, sum, init)).toEqual(130)
    });
})
