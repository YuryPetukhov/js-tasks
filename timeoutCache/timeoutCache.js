class TimeLimitedCache {
    constructor() {
        this.obj = new Map()
    }

     set = (key, value, duration) => {
        const founded = this.obj.has(key)

        if(founded) {
            clearTimeout(this.obj.get(key).ref)
        }

        this.obj.set(key, {  value, ref: setTimeout(() => this.obj.delete(key), duration)});

        return founded;
    }

      get = (key) =>  this.obj.has(key) ? this.obj.get(key).value : -1;

      count = () => this.obj.size

}

module.exports = TimeLimitedCache