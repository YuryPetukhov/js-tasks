const groupBy = function (fn) {
        if (!fn) {
                return
        }
        return this.reduce((acc, next) => {
                const key = fn(next)
                if (!(key in acc)) {
                        acc[key] = []
                }
                acc[key].push(next)
                return acc
        }, {})

};

Array.prototype.groupBy

module.exports = groupBy