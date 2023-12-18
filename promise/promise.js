const statuses = {
    PADDING: 'padding',
    FULFILLED: 'fulfilled',
    REJECTED: 'reject'
}
 class MyPromise {
     value;
     err;
     thenFn = null;
     catchFn = null;
     isCalled = false;
     status;

    constructor(initFn) {
        this.status = statuses["PADDING"]
        initFn(this.resolve, this.reject);
    }

    resolve = (resolveData) => {
        if(this.status === statuses["PADDING"]) {
            this.status = statuses["FULFILLED"]
            this.value = resolveData;

            if (this.thenFn && !this.isCalled) {
                this.thenFn(this.value);
                this.isCalled = true;
            }
        }

    }

    reject = (rejectData) =>  {
        if(this.status === statuses["PADDING"]) {

            this.status = statuses["REJECTED"]
            this.err = rejectData;

            if (this.catchFn && !this.isCalled) {
                this.catchFn(this.err);
                this.isCalled = true;
            }
        }
    }
// then call the first casu this is sync function
    then = (resolvedCallback, rejectedCallback) => {
        if(resolvedCallback) {
            this.thenFn = resolvedCallback;

            if (this.status === statuses["FULFILLED"] && !this.isCalled) {
                this.thenFn(this.value);
                this.isCalled = true;
            }

        }
        if(rejectedCallback) {

            this.catchFn = rejectedCallback;

            if (this.status === statuses["REJECTED"] && !this.isCalled) {
                this.catchFn(this.err);
                this.isCalled = true;
            }
        }
        return this;
    }

    catch = (catchCallback) => {
        this.then(null, catchCallback)
        return this;
    }

    static resolve =  (param) =>  {
        return new MyPromise((resolve, _) => {
            resolve(param);
        });
    };

    static reject = (param) => {
        return new MyPromise((_, reject) => {
            reject(param);
        });
    };
}
// //
// const promise = new MyPromise((resolve, reject) => {
//     console.log("Start");
//     setTimeout(() => reject("resolve value"), 1000);
// });
//
// MyPromise.resolve("123").then((data) => {
//     console.log("Sync resolve", data);
// });
//
// promise
//     .then((data) => {
//         console.log("Async", data);
//     })
//     .catch((e) => console.log("error", e));


// const promiseRejected = new MyPromise((resolve, reject) => {
//     console.log("Start promiseRejected");
//     setTimeout(() => reject("promiseRejected value"), 1000);
// });
//
// MyPromise.reject("123 reject").catch((data) => {
//     console.log("Sync reject", data);
// });
//
// promiseRejected
//     .then((data) => {
//         console.log("Async promiseRejected", data);
//     })
//     .catch((e) => console.log("error promiseRejected", e));

module.exports = MyPromise