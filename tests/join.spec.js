const join = require("../join/join");

describe("join function", () => {

    test('join with empty array', () => {
        expect(join([], [])).toEqual([])
    });

    test('join with no duplicate array', () => {
        expect(join([{"id": 1,"x": 1},{"id": 2,"x": 9}]
            , [{"id": 3,"x": 5}]
        )).toEqual([{"id":1,"x":1},{"id":2,"x":9},{"id":3,"x":5}])
    });

    test('join with duplicate array', () => {
        expect(join([{"id":1,"b":{"b": 94},"v":[4,3],"y":48}]
            , [{"id":1,"b":{"c": 84},"v":[1,3]}]
        )).toEqual([{"id":1,"b":{"c":84},"v":[1,3],"y":48}])
    });
})
