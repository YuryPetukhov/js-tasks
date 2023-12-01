const TimeLimitedCache = require("../timeoutCache/timeoutCache");

const timeLimitedCache = new TimeLimitedCache()
describe("TimeLimitedCache constructor", () => {

    test('TimeLimitedCache set and get methods', () => {
        timeLimitedCache.set(1, 42, 1000);
        expect(timeLimitedCache.get(1)).toEqual(42)
    })

    test('TimeLimitedCache  multi set and count ', () => {
        timeLimitedCache.set(1, 42, 1000);
        timeLimitedCache.set(1, 42, 1000);
        timeLimitedCache.set(1, 42, 1000);
        timeLimitedCache.set(1, 42, 1000);

        expect(timeLimitedCache.count()).toEqual(1)
    })

    test('TimeLimitedCache set different value and count ', () => {
        timeLimitedCache.set(1, 42, 1000);
        timeLimitedCache.set(2, 42, 1000);
        timeLimitedCache.set(3, 42, 1000);
        timeLimitedCache.set(4, 42, 1000);

        expect(timeLimitedCache.count()).toEqual(4)
    })
})
