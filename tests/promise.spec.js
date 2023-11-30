const MyPromise = require("../promise/promise");
jest.useFakeTimers();
describe("promise polyfill", () => {


    test('promise test resolve', () => {
        const spyLog = jest.fn()

        const promise = new MyPromise((resolve, _) => {
            spyLog("Start");
            setTimeout(() => resolve("resolve value"), 1000);
        });

        MyPromise.resolve("123").then((data) => {
            expect(data).toEqual("123")
        });

        expect(spyLog).toHaveBeenCalledTimes(1)
        jest.runAllTimers();
        promise
        .then((data) => {
            expect(data).toEqual("resolve value")
        })
        .catch((e) => {
            console.log("error", e)
        })
    });

    test('promise test reject', () => {
        const spyLog = jest.fn()

        const promise = new MyPromise((resolve, reject) => {
            spyLog("Start");
            setTimeout(() => reject("reject value"), 1000);
        });

        MyPromise.reject("123").catch((data) => {
            expect(data).toEqual("123")
        });

        expect(spyLog).toHaveBeenCalledTimes(1)
        jest.runAllTimers();
        promise
            .then((data) => {
                expect(data).not.toEqual("reject value")
            })
            .catch((e) => {
                expect(e).toEqual("reject value")
            });
    });

})
