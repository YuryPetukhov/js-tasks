var compactObject = function (obj) {
    if (obj === null) return null;
    if (typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);

    const compoted = {};
    for (const key in obj) {
        const v = compactObject(obj[key]);
        if (Boolean(v)) {
            compoted[key] = v;
        }
    }

    return compoted;
};
