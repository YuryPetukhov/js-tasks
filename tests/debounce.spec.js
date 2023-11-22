const debounce = require("../debounce");

jest.useFakeTimers();

describe("debounce function", () => {
    test('debounce', () => {
        let func = jest.fn();
        let debouncedFunc = debounce(func, 100);
        debouncedFunc()
        debouncedFunc()
        debouncedFunc()
        jest.runAllTimers()
        expect(func).toBeCalledTimes(1);
    });
})
