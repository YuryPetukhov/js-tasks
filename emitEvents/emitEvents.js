class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        const subscribers = this.events.get(eventName);
        subscribers.push(callback);

        return {
            unsubscribe: () => {
                const listener = subscribers.indexOf(callback);

                if (listener > -1) {
                    subscribers.splice(listener, 1);
                }

                return undefined;
            },
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const subscribers = this.events.get(eventName);
        const resultArray = [];

        subscribers.forEach((callback) => {
            resultArray.push(callback(...args));
        });

        return resultArray;
    }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
    return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);
console.log(emitter.emit("onClick")); // []
sub.unsubscribe(); // undefined
console.log(emitter.emit("onClick")); // []
